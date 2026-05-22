# Live site — Netlify

**https://oyshibanglabistro.netlify.app**

This is the main public link (no “github” in the URL).

---

## Update the website

1. Edit files in `~/oyshis-bangla-bistro`
2. Push to GitHub:

```bash
cd ~/oyshis-bangla-bistro
git add .
git commit -m "Your change"
git push origin main
git push origin main
```

3. Netlify rebuilds automatically (1–2 minutes)

---

## Reconnect Netlify (if deploy stopped)

1. Log in at [app.netlify.com](https://app.netlify.com)
2. Your site should be named **oyshibanglabistro**
3. **Site configuration** → **Build & deploy** → **Link repository** → `SAI141003/SAI141003.github.io`
4. Build command: *(leave empty)* · Publish directory: `.`

Or one-click deploy:  
https://app.netlify.com/start/deploy?repository=https://github.com/SAI141003/SAI141003.github.io

---

## Backup: GitHub Pages

https://sai141003.github.io/

Still updates when you push, but share the **Netlify** link with customers.

---

## Custom domain later (.ca / .com)

In Netlify: **Domain management** → **Add domain** → follow DNS steps.  
See **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.
