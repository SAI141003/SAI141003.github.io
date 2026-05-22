#!/usr/bin/env bash
# Copy only public website files (for Netlify / clean deploy)
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"
rm -rf "$DIST"
mkdir -p "$DIST"

cp "$ROOT/index.html" "$ROOT/menu.html" "$ROOT/gallery.html" \
   "$ROOT/contact.html" "$ROOT/manage-images.html" "$DIST/"
cp -R "$ROOT/css" "$ROOT/js" "$ROOT/data" "$ROOT/images" "$DIST/"
cp "$ROOT/.nojekyll" "$DIST/" 2>/dev/null || touch "$DIST/.nojekyll"
cp "$ROOT/_redirects" "$DIST/" 2>/dev/null || true

echo "Built dist/ ($(find "$DIST" -type f | wc -l | tr -d ' ') files)"
