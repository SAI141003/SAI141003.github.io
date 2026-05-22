# Free link **without** GitHub (no domain purchase)

## Important (please read)

**No free service on the internet can give you a link that is only your business name** (like `https://oyshibanglabistro`) without buying a domain (~$12/year).

Every free host adds a small suffix, for example:

| Host | Example link | Has “github”? |
|------|----------------|---------------|
| GitHub Pages | `sai141003.github.io` | Yes |
| **Netlify** (recommended) | `oyshibanglabistro.netlify.app` | **No** |
| Firebase Hosting | `oyshi-bangla-bistro.web.app` | **No** |
| Cloudflare Pages | `oyshibanglabistro.pages.dev` | **No** |

Below is the **easiest free option** (about 3 minutes): **Netlify**.

---

## Option A — Netlify (easiest, no GitHub in URL)

### 1. One-click deploy

1. Open this link (log in with GitHub if asked):  
   **https://app.netlify.com/start/deploy?repository=https://github.com/SAI141003/SAI141003.github.io**
2. Click **Deploy site** (defaults are fine).
3. Wait until the deploy finishes (~1 minute).

### 2. Choose your site name

1. In Netlify: **Site configuration** → **General** → **Site details**
2. Click **Change project name**
3. Type: `oyshibanglabistro` (if taken, try `oyshi-bangla-bistro`)
4. Save

Your public link is now:

**https://oyshibanglabistro.netlify.app**

(Replace with the name you picked if different.)

### 3. Share that link

Use it on Facebook, WhatsApp, and your menu.  
The review form on the home page already redirects to whatever domain you use.

### Updates

When you push changes to GitHub (`SAI141003.github.io` repo), Netlify can auto-rebuild if you left “continuous deploy” on (default).

---

## Option B — Firebase Hosting (same project as photo backend)

If you already use Firebase (see `FIREBASE_SETUP.md`):

```bash
npm install -g firebase-tools
firebase login
cd ~/oyshis-bangla-bistro
firebase init hosting   # choose existing project, public folder = .
firebase deploy --only hosting
```

Your link will look like:

**https://YOUR-PROJECT-ID.web.app**

Example: `https://oyshi-bangla-bistro.web.app`

No “github” in the URL. Still has `.web.app`.

---

## Option C — Keep GitHub (simplest, but has “github”)

**https://sai141003.github.io/**

Already live. No repo name in the path. Free forever. Only downside: “github” appears in the link.

---

## Later: perfect link (your own .ca / .com)

When you can spend about **$12–20 per year**, buy `oyshibanglabistro.ca` and follow **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.  
You can point that domain to Netlify or Firebase instead of GitHub.

---

## Summary

| What you want | What to do |
|---------------|------------|
| Free, no “github”, OK with “netlify” in link | **Option A** above |
| Free, no “github”, you use Firebase backend | **Option B** |
| Free, simplest, “github” is OK | **Option C** — `sai141003.github.io` |
| Only `oyshibanglabistro.ca` with nothing else | Buy a domain + CUSTOM_DOMAIN.md |
