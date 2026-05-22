# Your Cloudflare website link

**https://oyshibanglabistro.saikoushik1410.workers.dev/**

(No `github` in the address.)

---

## Build settings (Workers + static site)

In **Workers & Pages** → **oyshibanglabistro** → **Settings** → **Build**:

| Setting | Value |
|---------|--------|
| **Framework preset** | `None` |
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Build output directory** | `dist` (if asked) |

The repo includes `wrangler.toml` so deploy uploads your real website from `dist/`, not “Hello world”.

**Save** → **Retry deployment**.

---

## After deploy succeeds

Open **https://oyshibanglabistro.saikoushik1410.workers.dev/** — you should see Oyshi Bangla Bistro (menu, gallery, etc.), not “Hello world”.

---

## Find your link in Cloudflare

1. https://dash.cloudflare.com
2. **Workers & Pages** → click **oyshibanglabistro**
3. Click **Visit** at the top

URL format: `https://PROJECT-NAME.YOUR-SUBDOMAIN.workers.dev`

---

## Backup (GitHub)

https://sai141003.github.io/ — still works if Cloudflare fails.

---

## Custom domain later

Buy `oyshibanglabistro.ca` and add it under **Custom domains** in the same project. See **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.
