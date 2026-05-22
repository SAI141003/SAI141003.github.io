# Free hosting for Oyshi Bangla Bistro (static site)

Your site is plain HTML/CSS/JS — no server required. These hosts are **free** and fit a small restaurant website.

---

## Best choices (recommended)

### 1. GitHub Pages — **already set up**

| | |
|---|---|
| **URL** | https://sai141003.github.io/ |
| **Cost** | $0 (public repo) |
| **Bandwidth** | ~100 GB/month (soft limit) |
| **Custom domain** | Yes (free SSL) |
| **How to update** | `git push` → auto-deploy (~1–2 min) |

**Pros:** You already use this repo; no new account.  
**Cons:** Address includes `github.io` unless you add your own domain.

---

### 2. Cloudflare Pages — **best if you outgrow GitHub bandwidth**

| | |
|---|---|
| **Cost** | $0 |
| **Bandwidth** | Unlimited (free tier) |
| **Builds** | 500/month |
| **Custom domain** | Yes (free SSL) |
| **Sign up** | https://pages.cloudflare.com |

Connect repo `SAI141003/SAI141003.github.io` → build command: `npm run build` → output folder: `dist`.

**Pros:** Very generous limits; fast global CDN; unlikely to “pause” like Netlify.  
**Cons:** Slightly more setup than GitHub Pages.

---

## Other free options

| Service | Good for | Free tier notes | Link |
|---------|----------|-----------------|------|
| **Vercel** | Static + simple deploys | 100 GB bandwidth/month on hobby | https://vercel.com |
| **GitLab Pages** | If you use GitLab | 400 CI minutes/month | https://gitlab.com |
| **Surge.sh** | Quick one-folder deploy | Unlimited static sites; CLI deploy | https://surge.sh |
| **Render** | Static sites | Free static hosting; sleeps on free backend (not needed for you) | https://render.com |
| **Firebase Hosting** | Same account as Firebase | Free for small traffic; you had backend/storage limits | https://firebase.google.com/products/hosting |

---

## Avoid or use with caution

| Service | Why |
|---------|-----|
| **Netlify (free)** | You hit usage limits and the site was paused — deleted. |
| **Firebase (Auth + Storage + Firestore)** | Free tier is tight for uploads; you chose to drop upload feature. Hosting alone is OK but GitHub/Cloudflare is simpler. |

---

## Custom domain (no “github” in the link)

Buy a name (e.g. `oyshibanglabistro.ca`) and point DNS to **GitHub Pages** or **Cloudflare Pages**. See **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.

---

## What to use today

| Goal | Use |
|------|-----|
| Easiest — already working | **GitHub Pages** → https://sai141003.github.io/ |
| More bandwidth / no pause risk | **Cloudflare Pages** |
| Own domain later | GitHub Pages or Cloudflare + CUSTOM_DOMAIN.md |

Share **https://sai141003.github.io/** with customers until you set up Cloudflare or a custom domain.
