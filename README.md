# Oyshi's Bangla Bistro — Website

A clean, multi-page static website for **Oyshi's Bangla Bistro** (Vancouver, BC).
Pure HTML / CSS / vanilla JavaScript — no build step required.

## Pages

- `index.html` — Home (hero, story, signature dishes, CTA)
- `menu.html` — Full menu (signature mains, curries & mach, newly launched, nasta, misty, weekly rotating bundles)
- `gallery.html` — Photo gallery with click-to-zoom lightbox
- `contact.html` — Order channels, address, embedded map, service options

## Folder structure

```
oyshis-bangla-bistro/
├── index.html
├── menu.html
├── gallery.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── gallery/
        ├── 01-beef-teheri.png
        ├── 02-mixed-vaji-dal.png
        ├── 03-dim-bhuna.png
        ├── 04-chicken-kosha.png
        ├── 05-beef-orosh.png
        ├── 06-rupchada-masallam.png
        ├── 07-vorta-platter.png
        ├── 08-chicken-korma.png
        ├── 09-vorta-spread.png
        ├── 10-bhuna-trio.png
        ├── 11-chicken-platter.png
        ├── 12-full-spread.png
        ├── menu-classic.png
        ├── menu-mains.png
        ├── menu-nasta.png
        ├── menu-newly-launched.png
        └── menu-weekly.png
```

## Run locally

Open `index.html` directly in your browser, or run a small static server (the map iframe behaves better over `http://`):

```bash
cd ~/oyshis-bangla-bistro
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Editing content

- **Prices / menu items** — edit `menu.html` (one `<article class="menu-card">` per dish).
- **Featured dishes on Home** — edit the `Customer Favourites` block inside `index.html`.
- **Gallery photos** — drop new images into `images/gallery/` and reference them in `gallery.html`.
- **Contact details** — phone, email, address and Facebook link live inside `contact.html` (and the footer of every page).
- **Theme colours** — change CSS variables at the top of `css/styles.css` (`--terracotta`, `--cream`, etc.).

## Deploy

This site is fully static, so you can host it for free on any of:

- **GitHub Pages** — push to a repo and enable Pages on the `main` branch.
- **Netlify / Vercel** — drag-and-drop the folder.
- **Cloudflare Pages** — connect the repo or upload directly.

## Contact

- Phone / WhatsApp: 236-268-6198
- Email: oyshictg2000@gmail.com · toyatoffiii123@gmail.com
- Facebook: <https://www.facebook.com/share/17ZcsncsjH/?mibextid=wwXIfr>
- Address: 1488 E 54th Avenue, Vancouver, BC V5P 1Y2, Canada
