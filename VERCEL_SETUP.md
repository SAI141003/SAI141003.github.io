# Deploy on Vercel (free, no github in URL)

## Your link (after setup)

**https://oyshibanglabistro.vercel.app**

(Vercel may show a slightly different name until you rename the project — see step 4.)

---

## One-time setup (~5 minutes)

### 1. Sign up

https://vercel.com/signup — use **Continue with GitHub**.

### 2. Import your repo

1. **Add New…** → **Project**
2. Import **SAI141003/SAI141003.github.io**
3. **Project Name:** `oyshibanglabistro` (this sets the URL)
4. **Framework Preset:** Other
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. **Install Command:** leave default or `npm install`
8. Click **Deploy**

Wait 2–3 minutes.

### 3. Open your site

**https://oyshibanglabistro.vercel.app**

Or: Vercel dashboard → your project → **Visit** (top right).

### 4. Find / change the link

**Project** → **Settings** → **Domains**

- Production domain is shown there (e.g. `oyshibanglabistro.vercel.app`)
- You can add a custom domain later (e.g. `oyshibanglabistro.ca`)

---

## Update the site later

```bash
cd ~/oyshis-bangla-bistro
git add .
git commit -m "Update menu"
git push origin main
```

Vercel rebuilds automatically on every push to `main`.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on pages | Output directory must be `dist`, not `.` |
| Build failed | Build command must be `npm run build` |
| Wrong URL | Settings → Domains — check production domain |

---

## Backup

https://sai141003.github.io/ still works from GitHub Pages.
