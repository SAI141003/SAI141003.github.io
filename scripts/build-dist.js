#!/usr/bin/env node
/**
 * Copy public site files into dist/ (works on Netlify, GitHub Actions, Windows, Mac).
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

const htmlFiles = [
  'index.html',
  'menu.html',
  'gallery.html',
  'contact.html',
  'manage-images.html',
  'firebase-help.html',
];

const copyDirs = ['css', 'js', 'data', 'images'];

function rm(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function cp(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

rm(dist);
fs.mkdirSync(dist, { recursive: true });

for (const f of htmlFiles) {
  cp(path.join(root, f), path.join(dist, f));
}
for (const d of copyDirs) {
  cp(path.join(root, d), path.join(dist, d));
}

fs.writeFileSync(path.join(dist, '.nojekyll'), '');
const redirects = path.join(root, '_redirects');
if (fs.existsSync(redirects)) cp(redirects, path.join(dist, '_redirects'));

const count = (dir) => {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    n += e.isDirectory() ? count(p) : 1;
  }
  return n;
};

console.log('dist/ ready:', count(dist), 'files');
