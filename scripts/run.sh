#!/usr/bin/env bash
# GymnexAI runner (macOS).
# Usage:
#   ./scripts/run.sh            # dev server (default)
#   ./scripts/run.sh dev        # dev server on http://localhost:3000
#   ./scripts/run.sh build      # production build
#   ./scripts/run.sh start      # serve the production build
#   ./scripts/run.sh lint       # eslint
#   ./scripts/run.sh PORT=4000 dev   # dev on a custom port

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

# Optional inline PORT=xxxx arg
for arg in "$@"; do
  case "$arg" in
    PORT=*) export PORT="${arg#PORT=}";;
  esac
done
PORT="${PORT:-3000}"

CMD="${1:-dev}"
case "$CMD" in
  PORT=*) CMD="${2:-dev}";;
esac

# Sanity: deps installed?
if [[ ! -d node_modules ]]; then
  echo "node_modules/ missing — running installer first..."
  bash "$PROJECT_DIR/scripts/install.sh"
fi

case "$CMD" in
  dev)
    echo "Starting Next.js dev server on http://localhost:${PORT}"
    exec npx next dev -p "$PORT"
    ;;
  build)
    echo "Building production bundle..."
    exec npx next build
    ;;
  start)
    if [[ ! -d .next ]]; then
      echo ".next/ not found — running build first..."
      npx next build
    fi
    echo "Serving production build on http://localhost:${PORT}"
    exec npx next start -p "$PORT"
    ;;
  lint)
    exec npx eslint
    ;;
  *)
    echo "Unknown command: $CMD"
    echo "Usage: $0 [dev|build|start|lint] [PORT=xxxx]"
    exit 2
    ;;
esac
