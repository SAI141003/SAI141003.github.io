# Backend setup (Supabase)

Free backend for:
- **Upload photos** from the website (no GitHub editing)
- **Reviews** saved in database; you approve them on **Add Photos** page
- **Auto-update** home slideshow, menu scroll, gallery, and menu

Until setup is done, the site still works using `data/gallery.json` and email (FormSubmit).

---

## Step 1: Create Supabase project

1. Go to [https://supabase.com](https://supabase.com) and sign up (free).
2. **New project** → name it `oyshis-bangla-bistro` → set a database password (save it).
3. Wait until the project is ready.

---

## Step 2: Run database SQL

1. In Supabase: **SQL Editor** → **New query**
2. Copy all of `supabase/schema.sql` from this repo and **Run**
3. You should see success for tables `gallery_images` and `reviews`

---

## Step 3: Create storage bucket

1. **Storage** → **New bucket**
2. Name: `gallery`
3. Turn on **Public bucket**
4. Open bucket **Policies** and add:
   - **SELECT** — public (everyone can view images)
   - **INSERT / UPDATE / DELETE** — only `authenticated` (logged-in owner)

Or use Policy templates: “Allow public read”, “Allow authenticated uploads”.

---

## Step 4: Create owner login

1. **Authentication** → **Users** → **Add user** → **Create new user**
2. Email: your email (e.g. `oyshictg2000@gmail.com`)
3. Password: choose a strong password (you use this on **Add Photos** page)
4. Check **Auto Confirm User**

---

## Step 5: Add keys to the website

1. Supabase → **Settings** → **API**
2. Copy **Project URL** and **anon public** key
3. Open `js/config.js` in this project:

```javascript
window.SITE_CONFIG = {
  supabaseUrl: 'https://xxxxx.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
};
```

4. Save, commit, and push to GitHub (same as any site update)

---

## Step 6: Upload existing photos (optional)

1. Open **Add Photos** on your live site
2. Log in with the owner email/password
3. Upload each dish photo, or upload new ones going forward

Old images in `images/gallery/` still work if you keep them in the database with path `images/gallery/filename.png` — or re-upload through the admin page for Supabase Storage URLs.

---

## Daily use

| Task | Where |
|------|--------|
| Upload new food photo | **Add Photos** → log in → Upload |
| Approve a customer review | **Add Photos** → Pending reviews → Approve |
| Delete a photo | **Add Photos** → Photos list → Delete |

Changes appear on the site within seconds (no Git push needed for photos/reviews).

---

## Troubleshooting

- **“Backend off”** — `js/config.js` is empty or not pushed to GitHub
- **Upload fails** — check Storage bucket `gallery` is public read + auth write
- **Login fails** — confirm user exists under Authentication → Users
- **Reviews not showing** — approve them on Add Photos page first
