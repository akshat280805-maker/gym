import kb from "../data/concierge-kb.json";

export type ConciergeEntry = {
  id: string;
  chip: string;
  related: string[];
  questions: string[];
  keywords: string[];
  answer: string;
};

export type ConciergeKb = {
  meta: {
    name: string;
    version: number;
    updated: string;
    fallback: string;
    greeting: string;
    suggested: string[];
    teasers: string[];
  };
  entries: ConciergeEntry[];
};

export const KB = kb as ConciergeKb;

// Words too generic to discriminate between topics — stripped from queries
// and never counted toward a match score.
const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "am", "was", "were", "be", "been", "being",
  "do", "does", "did", "doing", "have", "has", "had", "having",
  "i", "me", "my", "we", "us", "our", "you", "your", "they", "them", "their",
  "it", "its", "this", "that", "these", "those",
  "of", "to", "in", "on", "at", "for", "with", "and", "or", "but", "if",
  "as", "by", "from", "about", "into", "out", "up", "down",
  "what", "where", "when", "who", "why", "how",
  "can", "could", "would", "should", "will", "shall", "may", "might", "must",
  "tell", "show", "give", "explain", "please", "thanks", "thank", "hi", "hello", "hey",
  "so", "just", "really", "very", "quite", "well",
]);

/** Light stemming — strips common English suffixes so "leads" matches "lead",
 *  "running" matches "run", "integrations" matches "integrate". Crude on
 *  purpose: better to over-match a little than miss obvious cognates. */
function stem(word: string): string {
  let w = word;
  if (w.length <= 3) return w;
  if (w.endsWith("ies") && w.length > 4) return w.slice(0, -3) + "y";
  if (w.endsWith("sses")) return w.slice(0, -2);
  if (w.endsWith("ing") && w.length > 5) return w.slice(0, -3);
  if (w.endsWith("ed") && w.length > 4) return w.slice(0, -2);
  if (w.endsWith("ly") && w.length > 4) return w.slice(0, -2);
  if (w.endsWith("s") && !w.endsWith("ss") && w.length > 3) return w.slice(0, -1);
  return w;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => !STOP_WORDS.has(t))
    .map(stem);
}

type EntryIndex = {
  entry: ConciergeEntry;
  questionTokens: Set<string>;
  keywordTokens: Set<string>;
  answerTokens: Set<string>;
};

let _index: EntryIndex[] | null = null;
function getIndex(): EntryIndex[] {
  if (_index) return _index;
  _index = KB.entries.map((entry) => ({
    entry,
    questionTokens: new Set(entry.questions.flatMap(tokenize)),
    keywordTokens: new Set(entry.keywords.flatMap((k) => tokenize(k))),
    answerTokens: new Set(tokenize(entry.answer)),
  }));
  return _index;
}

export type MatchResult = {
  entry: ConciergeEntry | null;
  score: number;
  confident: boolean;
};

/**
 * Match a user query to the best KB entry.
 *
 * Scoring: each non-stop-word query token contributes
 *   +3 if it appears in any of the entry's curated questions,
 *   +2 if it appears in the entry's keyword list,
 *   +1 if it appears in the entry's answer body.
 * Confidence threshold is score >= 3 — otherwise the bot returns the
 * meta.fallback line.
 */
export function matchQuery(query: string): MatchResult {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return { entry: null, score: 0, confident: false };
  }

  const index = getIndex();
  let best: EntryIndex | null = null;
  let bestScore = 0;

  for (const idx of index) {
    let score = 0;
    for (const t of tokens) {
      if (idx.questionTokens.has(t)) score += 3;
      else if (idx.keywordTokens.has(t)) score += 2;
      else if (idx.answerTokens.has(t)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = idx;
    }
  }

  return {
    entry: best?.entry ?? null,
    score: bestScore,
    confident: bestScore >= 3,
  };
}

/** Look up related entries by id list. Silently skips ids that don't resolve. */
export function getRelated(ids: string[]): ConciergeEntry[] {
  return ids
    .map((id) => KB.entries.find((e) => e.id === id))
    .filter((e): e is ConciergeEntry => Boolean(e));
}

/** Default follow-up trio when the bot lands on the fallback — three of the
 *  most-asked starting points keep the conversation alive. */
const FALLBACK_FOLLOWUPS = ["demo", "pricing", "what-is-gymnexai"];

export type Answer = {
  text: string;
  matchedId: string | null;
  followUps: ConciergeEntry[];
};

/** Public answer-and-finalise. */
export function answer(query: string): Answer {
  const result = matchQuery(query);
  if (result.confident && result.entry) {
    return {
      text: result.entry.answer,
      matchedId: result.entry.id,
      followUps: getRelated(result.entry.related),
    };
  }
  return {
    text: KB.meta.fallback,
    matchedId: null,
    followUps: getRelated(FALLBACK_FOLLOWUPS),
  };
}
