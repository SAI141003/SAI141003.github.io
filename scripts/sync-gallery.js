#!/usr/bin/env node
/**
 * Scan images/gallery/ and update data/gallery.json
 * Run after adding new image files: node scripts/sync-gallery.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GALLERY_DIR = path.join(ROOT, 'images', 'gallery');
const JSON_PATH = path.join(ROOT, 'data', 'gallery.json');

const MENU_BOARD_PREFIX = 'menu-';

function titleFromFilename(name) {
  return name
    .replace(/\.(png|jpe?g|webp|gif)$/i, '')
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function loadExisting() {
  if (!fs.existsSync(JSON_PATH)) return { images: [] };
  return JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
}

function main() {
  const existing = loadExisting();
  const bySrc = new Map(existing.images.map((i) => [i.src, i]));

  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f))
    .sort();

  const images = files.map((file) => {
    const src = `images/gallery/${file}`;
    const prev = bySrc.get(src);
    const base = file.replace(/\.[^.]+$/, '');
    const isBoard = base.startsWith(MENU_BOARD_PREFIX);

    if (prev) return prev;

    return {
      src,
      alt: titleFromFilename(file),
      title: titleFromFilename(file),
      ...(isBoard ? { menuBoard: true } : { desc: '', price: '' }),
    };
  });

  fs.writeFileSync(JSON_PATH, JSON.stringify({ images }, null, 2) + '\n');
  console.log(`Updated ${JSON_PATH} with ${images.length} images.`);
}

main();
