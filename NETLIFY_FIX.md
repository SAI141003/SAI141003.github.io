# Netlify — fix “build failed” / 404

Your live link: **https://oyshibanglabistro.netlify.app**

## Netlify settings (must match exactly)

In [app.netlify.com](https://app.netlify.com) → site **oyshibanglabistro** → **Site configuration** → **Build & deploy**:

| Setting | Value |
|---------|--------|
| Repository | `SAI141003/SAI141003.github.io` (or `oyshis-bangla-bistro`) |
| Branch | `main` |
| Build command | `bash scripts/prepare-dist.sh` |
| Publish directory | `dist` |
| Base directory | *(leave empty)* |

Click **Save** → **Deploys** → **Trigger deploy** → **Deploy site**.

Build should finish in under 1 minute. Then open https://oyshibanglabistro.netlify.app/

---

## If build still fails

1. **Clear build cache**: Deploys → Trigger deploy → **Clear cache and deploy site**
2. **Relink repo**: Build & deploy → Link repository → choose `SAI141003.github.io` → branch `main`
3. Copy the **deploy log** error line and fix (often wrong publish folder — must be `dist`, not `.`)

---

## GitHub “build failed” emails

Those were from the **old** repo `oyshis-bangla-bistro` Pages (Jekyll). That is **turned off** now.

- **GitHub backup site** (works): https://sai141003.github.io/
- **Main site** (Netlify): https://oyshibanglabistro.netlify.app

Push updates:

```bash
cd ~/oyshis-bangla-bistro
git push pages main
```

Netlify auto-deploys if the repo is linked.
