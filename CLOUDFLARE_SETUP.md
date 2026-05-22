# Live link without “github” in the URL

**https://oyshibanglabistro.pages.dev**

---

## Cloudflare build settings (copy exactly)

In **Workers & Pages** → your project → **Settings** → **Build**:

| Setting | Value |
|---------|--------|
| **Framework preset** | `None` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty / default) |
| **Node.js version** | `20` (or “Default” if 20 is available) |

Click **Save** → **Retry deployment**.

---

## If build still fails — use “no build” (easiest)

The `dist/` folder is already in GitHub. You can skip the build step:

| Setting | Value |
|---------|--------|
| **Framework preset** | `None` |
| **Build command** | *(leave completely empty)* |
| **Build output directory** | `dist` |

Save and redeploy. Cloudflare will publish the files already in your repo.

---

## One-time: connect GitHub

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages**
2. **Connect to Git** → repo **SAI141003/SAI141003.github.io**
3. **Project name:** `oyshibanglabistro`
4. Use the table above → **Save and Deploy**

Live URL: **https://oyshibanglabistro.pages.dev**

---

## Common errors

| Error | Fix |
|-------|-----|
| `npm ci` / lockfile error | Use settings above; latest repo includes `package-lock.json` |
| `dist` not found | Set **Build output directory** to `dist` (not `/` or blank) |
| Wrong framework (Next, Jekyll, etc.) | Set **Framework preset** to **None** |
| Build succeeds but 404 | Output must be `dist`, not project root |

---

## Optional: your own `.ca` domain

See **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.
