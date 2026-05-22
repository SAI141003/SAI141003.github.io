# Deploy site on Firebase Hosting (free)

Your project: **oyshi-bangla-bistro**

After deploy, the site will be live at:

- **https://oyshi-bangla-bistro.web.app** (share this)
- https://oyshi-bangla-bistro.firebaseapp.com (same site)

Firebase Hosting is free for small sites and works with your existing Firebase login, photos, and reviews.

---

## One-time setup (on your Mac)

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Log in to Google (same account as Firebase Console)

```bash
firebase login
```

A browser window opens — sign in with the Google account that owns **oyshi-bangla-bistro**.

### 3. Enable Hosting in Firebase Console (if asked)

1. [Firebase Console](https://console.firebase.google.com/project/oyshi-bangla-bistro/hosting)
2. **Hosting** → **Get started** → follow prompts (you can skip “add Firebase SDK” — already in the site)

---

## Deploy (every time you update the site)

From the project folder:

```bash
cd ~/oyshis-bangla-bistro
npm run deploy:firebase
```

That runs `npm run build` then uploads `dist/` to Firebase Hosting.

First deploy may ask to confirm project **oyshi-bangla-bistro** — choose **yes**.

---

## Also deploy security rules (recommended once)

```bash
cd ~/oyshis-bangla-bistro
firebase deploy --only firestore:rules,storage:rules
```

Or deploy everything:

```bash
npm run deploy:firebase:all
```

---

## After deploy

1. Open **https://oyshi-bangla-bistro.web.app**
2. Test **Add Photos** — login should work (Hosting domain is authorized automatically)
3. Share the **.web.app** link with customers

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `firebase: command not found` | Run `npm install -g firebase-tools` |
| Not logged in | `firebase login` |
| Permission denied | Use the Google account that owns the Firebase project |
| Login fails on Add Photos | Firebase → Authentication → Authorized domains — ensure `oyshi-bangla-bistro.web.app` is listed |

---

## Optional: custom domain

Firebase Console → **Hosting** → **Add custom domain** (e.g. `oyshibanglabistro.com`) and follow DNS steps.
