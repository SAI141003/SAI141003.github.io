# Live link without “github” in the URL

Your public link (after one-time setup):

**https://oyshibanglabistro.pages.dev**

No `github`, no `sai141003` — only your business name.

Hosting: **Cloudflare Pages** (free, unlimited bandwidth).

---

## One-time setup (~10 minutes)

### 1. Create a free Cloudflare account

https://dash.cloudflare.com/sign-up

### 2. Connect GitHub and deploy

1. Open https://dash.cloudflare.com → **Workers & Pages** → **Create**
2. Choose **Pages** → **Connect to Git**
3. Select repo: **SAI141003/SAI141003.github.io**
4. **Project name:** `oyshibanglabistro` (this sets the URL)
5. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
6. **Save and Deploy**

Wait 2–3 minutes. Your site will be at:

**https://oyshibanglabistro.pages.dev**

### 3. Share that link

Use it on Facebook, Google, and business cards — not the old `sai141003.github.io` link.

---

## Even better: your own `.ca` domain (optional, ~$15/year)

Buy **oyshibanglabistro.ca** (Namecheap, Porkbun, etc.), then in Cloudflare Pages:

**Custom domains** → **Set up a domain** → follow DNS steps.

See **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.

---

## Update the site later

```bash
cd ~/oyshis-bangla-bistro
git add .
git commit -m "Update menu"
git push origin main
```

Cloudflare rebuilds automatically (like GitHub, but the public URL stays `oyshibanglabistro.pages.dev`).
