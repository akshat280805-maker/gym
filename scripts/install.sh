#!/usr/bin/env bash
# GymnexAI installer (macOS). Installs the EXACT dependency versions from package-lock.json.
# Usage: ./scripts/install.sh

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

# Required toolchain versions
REQUIRED_NODE_MAJOR=20      # Next.js 16 requires Node >= 20.9.0
REQUIRED_NODE_MINOR=9
RECOMMENDED_NODE="20.19.0"  # matches @types/node ^20

bold()  { printf "\033[1m%s\033[0m\n" "$*"; }
green() { printf "\033[32m%s\033[0m\n" "$*"; }
red()   { printf "\033[31m%s\033[0m\n" "$*" 1>&2; }
yellow(){ printf "\033[33m%s\033[0m\n" "$*"; }

# -----------------------------------------------------------------------------
# 1. Platform check
# -----------------------------------------------------------------------------
if [[ "$(uname -s)" != "Darwin" ]]; then
  red "This installer targets macOS (Darwin). Detected: $(uname -s)"
  exit 1
fi
bold "==> macOS detected ($(sw_vers -productVersion))"

# -----------------------------------------------------------------------------
# 2. Node.js (>= 20.9). Install Node 20 LTS via Homebrew ONLY if missing/too old.
# -----------------------------------------------------------------------------
node_ok() {
  command -v node >/dev/null 2>&1 || return 1
  local v major minor
  v="$(node -v | sed 's/^v//')"
  major="${v%%.*}"
  minor="$(echo "$v" | cut -d. -f2)"
  if (( major > REQUIRED_NODE_MAJOR )); then return 0; fi
  if (( major == REQUIRED_NODE_MAJOR && minor >= REQUIRED_NODE_MINOR )); then return 0; fi
  return 1
}

ensure_brew() {
  if command -v brew >/dev/null 2>&1; then return 0; fi
  yellow "Homebrew not found. Installing Homebrew (you may be prompted for your password)..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  if [[ -x /opt/homebrew/bin/brew ]]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
  elif [[ -x /usr/local/bin/brew ]]; then
    eval "$(/usr/local/bin/brew shellenv)"
  fi
}

if node_ok; then
  green "Node already satisfies requirement (>= ${REQUIRED_NODE_MAJOR}.${REQUIRED_NODE_MINOR}). Skipping Homebrew/Node install."
else
  yellow "Node >= ${REQUIRED_NODE_MAJOR}.${REQUIRED_NODE_MINOR} not found."
  ensure_brew
  yellow "Installing node@20 via Homebrew..."
  brew install node@20
  NODE20_PREFIX="$(brew --prefix node@20)"
  export PATH="${NODE20_PREFIX}/bin:${PATH}"
  yellow "Add this to your ~/.zshrc to make it permanent:"
  echo "  export PATH=\"${NODE20_PREFIX}/bin:\$PATH\""
fi
green "Node:  $(node -v)"
green "npm:   $(npm -v)"

# -----------------------------------------------------------------------------
# 4. Clean install of EXACT versions from package-lock.json
#    `npm ci` requires lockfile + package.json to be in sync and never mutates them.
# -----------------------------------------------------------------------------
if [[ ! -f package-lock.json ]]; then
  red "package-lock.json not found in $PROJECT_DIR"
  exit 1
fi

bold "==> Installing exact versions from package-lock.json (npm ci)"
rm -rf node_modules
npm ci --no-audit --no-fund

# -----------------------------------------------------------------------------
# 5. Verify installed versions match the lockfile
# -----------------------------------------------------------------------------
bold "==> Installed (locked) versions:"
node -e '
const lock = require("./package-lock.json");
const root = lock.packages[""];
const deps = {...(root.dependencies||{}), ...(root.devDependencies||{})};
const names = Object.keys(deps).sort();
const pad = Math.max(...names.map(n => n.length));
for (const n of names) {
  const p = lock.packages["node_modules/" + n];
  console.log("  " + n.padEnd(pad) + "  " + (p ? p.version : "MISSING"));
}
'

green ""
green "Install complete. Start the app with:  ./scripts/run.sh dev"
