# Where your site is hosted

## Primary — Firebase Hosting (recommended)

**https://oyshi-bangla-bistro.web.app**

Deploy from your Mac:

```bash
cd ~/oyshis-bangla-bistro
npm install -g firebase-tools   # once
firebase login                # once
npm run deploy:firebase
```

Full steps: **[FIREBASE_HOSTING.md](FIREBASE_HOSTING.md)**

| Page | Link |
|------|------|
| Home | https://oyshi-bangla-bistro.web.app/ |
| Menu | https://oyshi-bangla-bistro.web.app/menu.html |
| Gallery | https://oyshi-bangla-bistro.web.app/gallery.html |
| Contact | https://oyshi-bangla-bistro.web.app/contact.html |
| Add Photos | https://oyshi-bangla-bistro.web.app/manage-images.html |

Same Firebase project as Auth, Firestore, and Storage — no extra backend setup.

---

## Backup — GitHub Pages

**https://sai141003.github.io/**

Auto-deploys on `git push` (free). Use if Firebase deploy is not run yet.

---

## Netlify — removed

The Netlify project was deleted. Use **Firebase Hosting** or **GitHub Pages** only.
