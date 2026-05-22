# Where your site is hosted

## Live site (use this link)

**https://sai141003.github.io/**

| Page | Link |
|------|------|
| Home | https://sai141003.github.io/ |
| Menu | https://sai141003.github.io/menu.html |
| Gallery | https://sai141003.github.io/gallery.html |
| Order & Contact | https://sai141003.github.io/contact.html |
| Add Photos (owner) | https://sai141003.github.io/manage-images.html |

Deploys automatically when you push to `main` on GitHub (free, no bandwidth pause like Netlify).

---

## Netlify is paused

**https://oyshibanglabistro.netlify.app** shows “site was paused” because the free plan hit its usage limit.

**Options:**

1. **Use GitHub Pages** (recommended, free) — link above. Already working.
2. **Upgrade Netlify** — [Netlify billing](https://docs.netlify.com/accounts-and-billing/billing/) → paid plan, then unpause the site in the Netlify dashboard.
3. **Wait** — sometimes limits reset on the next billing cycle (not guaranteed on free tier).

You do **not** need Netlify for Firebase. Add this domain in Firebase if login fails:

**Authentication → Settings → Authorized domains → Add:** `sai141003.github.io`

---

## Update the site

```bash
cd ~/oyshis-bangla-bistro
# edit files, then:
npm run build
git add -A
git commit -m "Your message"
git push origin main
```

GitHub Actions rebuilds in about 1–2 minutes.
