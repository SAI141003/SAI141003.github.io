# How to find your website link

## Works right now (GitHub)

**https://sai141003.github.io/**

| Page | Link |
|------|------|
| Home | https://sai141003.github.io/ |
| Menu | https://sai141003.github.io/menu.html |
| Gallery | https://sai141003.github.io/gallery.html |
| Contact | https://sai141003.github.io/contact.html |

This updates when you push to GitHub. It includes `github` in the URL but the site works.

---

## Cloudflare link (after deploy succeeds)

The address is **not** in the build log. Find it in the dashboard:

1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** (left menu)
3. Click your **project name** (e.g. `oyshibanglabistro`)
4. On the project page, look for **Visit** or **Domains** at the top
5. Your link looks like:

   **https://PROJECT-NAME.pages.dev**

   Example: if project name is `oyshibanglabistro` →  
   **https://oyshibanglabistro.pages.dev**

6. Only use the link when the latest deployment shows **Success** (green), not Failed.

---

## If Cloudflare link does not open

The deploy must finish successfully first. Check:

**Deployments** tab → latest row → must say **Success**

Build settings:

| Field | Value |
|-------|--------|
| Build command | `npm run build` |
| Deploy command | blank (or `:` only) |
| Build output directory | `dist` |

See **[CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md)**.

Until Cloudflare works, use **https://sai141003.github.io/** for customers.

---

## No “github” in the URL (later)

Buy a domain (e.g. `oyshibanglabistro.ca`) and attach it in Cloudflare or GitHub — **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.
