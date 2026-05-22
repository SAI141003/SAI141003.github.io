# Oyshi Bangla Bistro — Website

A clean, multi-page static website for **Oyshi Bangla Bistro** (Vancouver, BC).
Pure HTML / CSS / vanilla JavaScript — no build step required.

**One GitHub repo only:** [github.com/SAI141003/SAI141003.github.io](https://github.com/SAI141003/SAI141003.github.io)  
*(The old `oyshis-bangla-bistro` repo was removed to avoid confusion.)*

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

## Add new photos

1. Drop image files in `images/gallery/`, then run `node scripts/sync-gallery.js` (optional)
2. Edit `data/gallery.json` if you need custom titles/prices
3. Push to GitHub — Cloudflare Pages updates automatically:
   - Home page **About** slideshow (rotating)
   - Home page **menu scroll** (sideways)
   - **Gallery** page
   - **Menu** page (boards + dish photos)

Menu board images: set `"menuBoard": true` in `gallery.json` so they only show on menu boards, not the home scroll.

## Editing content

- **Prices / menu items** — edit `menu.html` (one `<article class="menu-card">` per dish).
- **Featured dishes on Home** — edit the `Customer Favourites` block inside `index.html`.
- **Gallery photos** — edit `data/gallery.json` (see above).
- **Contact details** — phone, email, address and Facebook link live inside `contact.html` (and the footer of every page).
- **Theme colours** — change CSS variables at the top of `css/styles.css` (`--terracotta`, `--cream`, etc.).

## Live site (share this link — no “github” in the URL)

**https://oyshibanglabistro.vercel.app**

| Page | Link |
|------|------|
| Home | https://oyshibanglabistro.vercel.app/ |
| Menu | https://oyshibanglabistro.vercel.app/menu.html |
| Gallery | https://oyshibanglabistro.vercel.app/gallery.html |
| Order & Contact | https://oyshibanglabistro.vercel.app/contact.html |

**First-time setup:** [VERCEL_SETUP.md](VERCEL_SETUP.md) (connect GitHub to Vercel, ~5 min).

---

After you edit files locally:

```bash
cd ~/oyshis-bangla-bistro
npm run build
git add .
git commit -m "Describe your change"
git push origin main
```

Push to GitHub → Vercel rebuilds in ~2 min.

## Reviews

- Customers submit reviews on the home page (**Reviews** section). Submissions go to **oyshictg2000@gmail.com** (via [FormSubmit](https://formsubmit.co)).
- The first time a review is sent, FormSubmit may email you a link to **activate** the form. Click it once.
- To **show a review on the website**, add an entry to `data/reviews.json`:

```json
[
  {
    "name": "Ayesha",
    "rating": 5,
    "text": "The beef teheri was excellent. Will order again.",
    "date": "May 2026"
  }
]
```

Then commit and push. The `date` field is optional.

## Custom domain (remove “github” from the link)

Free GitHub hosting **cannot** give you a link with zero “github” in it. To use only your business name (e.g. **https://oyshibanglabistro.ca**), buy a domain and follow **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.

For **oyshibanglabistro.ca** (your own domain, ~$15/year), see **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.

## Contact

- Phone / WhatsApp: 236-268-6198
- Email: oyshictg2000@gmail.com · toyatoffiii123@gmail.com
- Facebook: <https://www.facebook.com/share/17ZcsncsjH/?mibextid=wwXIfr>
- Address: 1488 E 54th Avenue, Vancouver, BC V5P 1Y2, Canada
