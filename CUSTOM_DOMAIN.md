# Remove “github” from your website link

GitHub free hosting **always** uses an address like `https://something.github.io/` unless you add **your own domain name**.

After setup, customers open something like:

- **https://oyshibanglabistro.ca**  
  or  
- **https://www.oyshibanglabistro.ca**

No `github`, no repo name — only your business name.

---

## Step 1: Buy a domain (about $12–20/year)

Pick one name and check it is available (Namecheap, Google Domains, Porkbun, Hover, etc.).

Good options for Oyshi Bangla Bistro:

| Domain | Notes |
|--------|--------|
| `oyshibanglabistro.ca` | Best for Vancouver (.ca) |
| `oyshibanglabistro.com` | Works worldwide |
| `oyshibistro.ca` | Shorter |

Buy **one** domain. You do not need a separate “website package” — only the domain.

---

## Step 2: DNS at your domain registrar

In your domain’s **DNS settings**, add:

### If you use **www** (recommended: `www.oyshibanglabistro.ca`)

| Type | Name / Host | Value |
|------|-------------|--------|
| CNAME | `www` | `sai141003.github.io` |

### If you also want the **root** (`oyshibanglabistro.ca` without www)

| Type | Name / Host | Value |
|------|-------------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

(These four A records are GitHub Pages. GitHub may show slightly different IPs in **Settings → Pages** — use what GitHub shows if they differ.)

DNS can take from a few minutes up to 48 hours (usually under 1 hour).

---

## Step 3: Tell GitHub your domain

1. Open **[github.com/SAI141003/SAI141003.github.io/settings/pages](https://github.com/SAI141003/SAI141003.github.io/settings/pages)**
2. Under **Custom domain**, type your domain (e.g. `www.oyshibanglabistro.ca`) → **Save**
3. Wait until **DNS check** is successful (green)
4. Turn on **Enforce HTTPS**

---

## Step 4: Add `CNAME` file in this repo

Replace `YOUR-DOMAIN` with what you entered in GitHub (usually `www.yourdomain.ca`):

1. Create a file named **`CNAME`** in the repo root (same folder as `index.html`)
2. Single line only, no `https://`:

```
www.oyshibanglabistro.ca
```

3. Commit and push to **SAI141003.github.io**:

```bash
cd ~/oyshis-bangla-bistro
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

---

## Step 5: Test

- Open `https://www.yourdomain.ca` — site should load
- Open `https://sai141003.github.io` — may still work; you can leave it or later disable old Pages on other repos

The review form on the home page already uses your **current** domain for redirects (no hard-coded github link).

---

## Facebook / Google / cards

Update your Facebook page, Google Business, and printed materials to the **new** `.ca` or `.com` link only.

---

## Need help?

Send your exact domain name (after you buy it) and we can add the `CNAME` file and double-check DNS for you.
