#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Create a temporary directory for gh-pages
TEMP_DIR=$(mktemp -d)
echo "Using temporary directory: $TEMP_DIR"

# Clone the repository into temp directory
echo "Cloning repository..."
GIT_TOKEN="${GITHUB_TOKEN:-}"
if [ -z "$GIT_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN environment variable is not set"
    exit 1
fi
if ! git clone --branch gh-pages --single-branch https://${GIT_TOKEN}@github.com/aimbright/instapark-ai-website.git $TEMP_DIR 2>&1; then
    # If clone fails, initialize new repo
    echo "Clone failed, initializing new repository..."
    cd $TEMP_DIR
    git init
    git remote add origin https://${GIT_TOKEN}@github.com/aimbright/instapark-ai-website.git
    git checkout -b gh-pages
    cd /Users/moin/Documents/React_workspace/instapark_ai_fresh
fi

# Copy dist contents to temp directory
echo "Copying build files..."
cd $TEMP_DIR
rm -rf * .[!.]* 2>/dev/null || true
cp -r /Users/moin/Documents/React_workspace/instapark_ai_fresh/dist/* .

# Commit and push
echo "Committing changes..."
git add -A
git commit -m "Deploy to GitHub Pages - $(date)" || echo "No changes to commit"
echo "Pushing to gh-pages branch..."
if [ -z "$GIT_TOKEN" ]; then
    echo "Error: GITHUB_TOKEN environment variable is not set"
    exit 1
fi
git remote set-url origin https://${GIT_TOKEN}@github.com/aimbright/instapark-ai-website.git
git push origin gh-pages

# Cleanup
cd /Users/moin/Documents/React_workspace/instapark_ai_fresh
rm -rf $TEMP_DIR

echo "Deployment complete! Your site should be available at:"
echo "https://aimbright.github.io/instapark-ai-website/"

