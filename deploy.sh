#!/bin/bash

# Build the project
npm run build

# Add all files to git
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to main branch
git push origin main

echo "Deployment initiated! Check GitHub Actions for progress."
