#!/usr/bin/env bash
# Installs a pre-commit hook that runs the cannibalization audit and blocks
# any commit that would introduce a duplicate title, H1, or canonical.
#
# Why: The biggest risk to SEO progress is a new commit silently
# reintroducing the regressions we just spent weeks fixing. This is the
# cheapest guardrail — a single regex check during commit, takes ~1 second.
#
# Usage:
#   bash scripts/install-precommit-hook.sh
#
# Skip with: git commit --no-verify  (only if you're sure)
set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOK_PATH="$ROOT/.git/hooks/pre-commit"

cat > "$HOOK_PATH" <<'EOF'
#!/usr/bin/env bash
# Auto-installed by scripts/install-precommit-hook.sh
# Blocks commits that introduce SEO cannibalization regressions.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

# Run the audit
node "$ROOT/scripts/cannibalization-audit.mjs" > /tmp/cannib-precommit.log 2>&1 || {
  echo "❌ Cannibalization audit failed to run. See /tmp/cannib-precommit.log"
  exit 1
}

# Parse counts — use awk to grab the LAST whitespace-separated field on each
# matched line (the numeric count). Original sed-based approach broke because
# `sed 's/[^0-9]//g'` keeps every digit in the line, including the "1" in "H1s",
# so "Exact-duplicate H1s:    0" became "10" instead of "0".
DUPCAN=$(grep "Exact-duplicate canonicals:" /tmp/cannib-precommit.log | awk '{print $NF}' | head -1)
DUPTITLE=$(grep "Exact-duplicate titles:" /tmp/cannib-precommit.log | awk '{print $NF}' | head -1)
DUPH1=$(grep "Exact-duplicate H1s:" /tmp/cannib-precommit.log | awk '{print $NF}' | head -1)

# Block on any non-zero count
if [ "${DUPCAN:-0}" != "0" ] || [ "${DUPTITLE:-0}" != "0" ] || [ "${DUPH1:-0}" != "0" ]; then
  echo ""
  echo "🚨 Commit blocked — cannibalization regression detected:"
  echo "   - Duplicate canonicals: $DUPCAN"
  echo "   - Duplicate titles:     $DUPTITLE"
  echo "   - Duplicate H1s:        $DUPH1"
  echo ""
  echo "   See scripts/seo-audit-results/cannibalization-$(date +%Y-%m-%d).md for details."
  echo "   Fix the dup, then re-commit. To bypass (emergency only): git commit --no-verify"
  exit 1
fi

exit 0
EOF

chmod +x "$HOOK_PATH"
echo "✅ Pre-commit hook installed at $HOOK_PATH"
echo "   Runs cannibalization-audit.mjs before every commit."
echo "   Blocks commits with duplicate titles/H1s/canonicals."
echo "   To bypass in emergencies: git commit --no-verify"
