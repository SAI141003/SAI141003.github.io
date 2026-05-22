# Firebase — next steps (project created)

Do these **4 steps** in [Firebase Console](https://console.firebase.google.com), then send the config to finish the website connection.

---

## Step 1 — Web app config (send this to complete connection)

Your project is **oyshi-bangla-bistro** (project number 533772481391).  
You still need **apiKey** and **appId** from a **Web app** (not shown on the project overview page).

1. Open project **oyshi-bangla-bistro**
2. Click the **gear** → **Project settings**
3. Scroll to **Your apps**
4. If there is no web app yet: click **`</>`** (Web) → name: `Oyshi Website` → **Register app** → Continue (no need for Firebase Hosting)
5. You will see `const firebaseConfig = { ... }` — copy **apiKey** and **appId** (and check storageBucket) and paste in chat, OR into `js/config.js`:

```javascript
window.SITE_CONFIG = {
  siteUrl: 'https://oyshibanglabistro.netlify.app',
  firebase: {
    apiKey: 'PASTE_HERE',
    authDomain: 'PASTE_HERE',
    projectId: 'PASTE_HERE',
    storageBucket: 'PASTE_HERE',
    messagingSenderId: 'PASTE_HERE',
    appId: 'PASTE_HERE',
  },
};
```

---

## Step 2 — Login for Add Photos page

1. **Build** → **Authentication** → **Get started**
2. **Sign-in method** → **Email/Password** → **Enable** → Save
3. **Users** tab → **Add user**
4. Enter **your email** and a **password** (you use this on Add Photos page)

---

## Step 3 — Firestore (database for photos & reviews)

1. **Build** → **Firestore Database** → **Create database**
2. **Production mode** → pick a region (e.g. `northamerica-northeast1`) → Enable
3. **Firestore** → **Rules** tab
4. Delete everything → paste from file `firebase/firestore.rules` in this repo → **Publish**

---

## Step 4 — Storage (image files)

1. **Build** → **Storage** → **Get started** → Continue
2. **Rules** tab
3. Delete everything → paste from file `firebase/storage.rules` in this repo → **Publish**

---

## Done?

Open **Add Photos** on your site. You should see **Connected to Firebase** → log in → upload a test photo.

**Need help?** Paste your Step 1 config here (apiKey, projectId, etc.) and say “config pasted” — the rest can be wired up for you.
