# Netlify — new approach (no build on Netlify)

The website files are in the **`dist/`** folder inside the repo.  
Netlify only **publishes** that folder — it does **not** run a build. That avoids “build failed” errors.

## Netlify settings

[app.netlify.com](https://app.netlify.com) → **oyshibanglabistro** → **Build & deploy**:

| Setting | Value |
|---------|--------|
| Build command | *(leave completely empty)* |
| Publish directory | `dist` |
| Branch | `main` |
| Repository | **`SAI141003/SAI141003.github.io`** (the only repo — do not use oyshis-bangla-bistro) |

Save → **Trigger deploy** → **Deploy site**.

---

## When you edit the website

1. Edit `index.html`, `menu.html`, `css/`, `js/`, etc.
2. Run locally:

```bash
cd ~/oyshis-bangla-bistro
npm run build
```

3. Commit **both** your edits **and** the updated `dist/` folder:

```bash
git add .
git commit -m "Update menu"
git push origin main
```

4. Netlify updates automatically (1–2 min).

GitHub Actions also runs `npm run build` and updates https://sai141003.github.io/

---

## Live links

- **Netlify:** https://oyshibanglabistro.netlify.app
- **GitHub:** https://sai141003.github.io/
