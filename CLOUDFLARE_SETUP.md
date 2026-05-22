# Live link without “github” in the URL

**https://oyshibanglabistro.pages.dev**

---

## Cloudflare build settings (copy exactly)

In **Workers & Pages** → your project → **Settings** → **Build**:

| Setting | Value |
|---------|--------|
| **Framework preset** | `None` |
| **Build command** | `npm run build` |
| **Deploy command** | **Completely blank** — delete all text (do **not** type the word `empty`) |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty / default) |
| **Node.js version** | `20` |

**Important:** Do **not** use `npx wrangler deploy`. Do **not** type the word `empty` in the box — that makes Cloudflare run a command called `empty` and fail.

If Cloudflare will not let you save a blank deploy command, use: `:` (colon only — does nothing, succeeds).

Cloudflare publishes `dist/` automatically after the build when deploy command is blank or `:`.

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
| `wrangler deploy` / Missing entry-point | **Clear Deploy command** (must be blank, not the word `empty`) |
| `/bin/sh: 1: empty: not found` | You typed `empty` in Deploy command — **delete it** or use `:` only |

---

## Optional: your own `.ca` domain

See **[CUSTOM_DOMAIN.md](CUSTOM_DOMAIN.md)**.
