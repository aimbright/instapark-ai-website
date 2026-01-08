#!/bin/bash
set -e

PROJECT_DIR="/Users/moin/Documents/React_workspace/instapark_ai"
TEMP_DIR=$(mktemp -d)
# Use environment variable for GitHub token (set it before running: export GITHUB_TOKEN=your_token)
GIT_TOKEN="${GITHUB_TOKEN:-}"

echo "Building project..."
cd "$PROJECT_DIR"
npm run build

echo "Cloning gh-pages branch..."
cd "$TEMP_DIR"
git init
if [ -n "$GIT_TOKEN" ]; then
  git remote add origin "https://${GIT_TOKEN}@github.com/aimbright/instapark-ai-website.git"
else
  git remote add origin "https://github.com/aimbright/instapark-ai-website.git"
fi

# Fetch and checkout gh-pages branch
git fetch origin gh-pages 2>/dev/null || echo "Branch might not exist yet"
if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
  git checkout -b gh-pages origin/gh-pages
else
  git checkout -b gh-pages
fi

echo "Copying build files..."
# Make sure we're in TEMP_DIR
cd "$TEMP_DIR"
rm -rf * .[!.]* 2>/dev/null || true
cp -r "$PROJECT_DIR/dist/"* .

echo "Committing and pushing..."
# Make absolutely sure we're in TEMP_DIR
cd "$TEMP_DIR"
git add -A
git commit -m "Deploy to GitHub Pages - $(date +%Y-%m-%d\ %H:%M:%S)" || echo "No changes"
if [ -n "$GIT_TOKEN" ]; then
  git remote set-url origin "https://${GIT_TOKEN}@github.com/aimbright/instapark-ai-website.git"
fi
git push -f origin gh-pages

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site should be available at:"
echo "   https://aimbright.github.io/instapark-ai-website/"
echo ""
echo "⏳ It may take a few minutes for GitHub Pages to update."
echo "💡 Make sure GitHub Pages is enabled in your repository settings:"
echo "   Settings → Pages → Source: gh-pages branch"

# Cleanup
cd "$PROJECT_DIR" || true
rm -rf "$TEMP_DIR" 2>/dev/null || true
