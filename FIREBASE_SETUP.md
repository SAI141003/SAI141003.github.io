# Firebase backend setup

Free backend for:
- **Upload photos** on **Add Photos** (no GitHub editing)
- **Customer reviews** stored in Firebase; you **approve** them before they show on the site
- **Auto-update** home slideshow, menu scroll, gallery, and menu page

Until Firebase is configured, the site uses `data/gallery.json` and email (FormSubmit).

---

## Step 1: Create Firebase project

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. **Add project** → name: `oyshis-bangla-bistro` → continue (Google Analytics optional)
3. Wait until the project is created

---

## Step 2: Enable Authentication

1. **Build** → **Authentication** → **Get started**
2. **Sign-in method** → enable **Email/Password**
3. **Users** → **Add user** → your email + password (owner login for Add Photos page)

---

## Step 3: Create Firestore database

1. **Build** → **Firestore Database** → **Create database**
2. Start in **production mode** (we add rules next)
3. Choose a region close to you (e.g. `northamerica-northeast1`)

### Firestore rules

1. **Firestore** → **Rules**
2. Replace with the contents of `firebase/firestore.rules` from this repo
3. **Publish**

---

## Step 4: Enable Storage

1. **Build** → **Storage** → **Get started**
2. Use default bucket
3. **Rules** → replace with `firebase/storage.rules` from this repo
4. **Publish**

---

## Step 5: Register web app & copy config

1. **Project overview** (gear) → **Project settings**
2. Scroll to **Your apps** → click **Web** `</>`
3. App nickname: `Oyshi Website` → **Register app**
4. Copy the `firebaseConfig` object values into `js/config.js`:

```javascript
window.SITE_CONFIG = {
  firebase: {
    apiKey: 'AIza...',
    authDomain: 'your-project.firebaseapp.com',
    projectId: 'your-project-id',
    storageBucket: 'your-project-id.appspot.com',
    messagingSenderId: '...',
    appId: '1:...:web:...',
  },
};
```

5. Commit and push to GitHub

---

## Step 6: First use

1. Open **Add Photos** on your live site
2. Log in with the owner email/password you created
3. Upload photos — they appear on the site immediately

For **reviews**, customers submit on the home page; you **Approve** under **Pending reviews** on Add Photos.

---

## Firestore collections (automatic)

| Collection | Purpose |
|------------|---------|
| `gallery_images` | Photo URL + title, price, menu board flag |
| `reviews` | Customer reviews (`approved: false` until you approve) |

No manual tables to create — first upload creates the data.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Backend off on Add Photos | Fill `js/config.js` and push to GitHub |
| Login failed | Check Email/Password enabled; user exists in Authentication |
| Upload permission denied | Publish `storage.rules`; log in first |
| Reviews not saving | Publish `firestore.rules` |
| Photos not on site | Hard refresh; check Firestore has `gallery_images` docs |

---

## Daily use

| Task | Where |
|------|--------|
| Upload photo | **Add Photos** → log in → Upload |
| Approve review | **Add Photos** → Pending reviews → Approve |
| Delete photo | **Add Photos** → Photos list → Delete |
