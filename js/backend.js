/* Firebase backend — gallery + reviews + owner uploads */
(function () {
  'use strict';

  let ready = null;

  function cfg() {
    return window.SITE_CONFIG || {};
  }

  function isEnabled() {
    const f = cfg().firebase || {};
    return Boolean(f.apiKey && f.projectId && window.firebase);
  }

  function initFirebase() {
    if (!isEnabled()) return null;
    if (!ready) {
      ready = Promise.resolve().then(() => {
        if (!firebase.apps.length) {
          firebase.initializeApp(cfg().firebase);
        }
      });
    }
    return ready;
  }

  function db() {
    return firebase.firestore();
  }

  function storage() {
    return firebase.storage();
  }

  function auth() {
    return firebase.auth();
  }

  function docToImage(id, data) {
    return {
      id,
      src: data.src,
      alt: data.alt || data.title || '',
      title: data.title || '',
      desc: data.description || '',
      price: data.price || '',
      menuBoard: Boolean(data.menuBoard),
      sortOrder: data.sortOrder || 0,
    };
  }

  async function fetchGallery() {
    await initFirebase();
    const snap = await db().collection('gallery_images').get();
    const images = snap.docs
      .map((d) => docToImage(d.id, d.data()))
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return { images };
  }

  async function fetchReviews() {
    await initFirebase();
    const snap = await db()
      .collection('reviews')
      .where('approved', '==', true)
      .get();

    return snap.docs
      .map((d) => {
        const r = d.data();
        const created = r.createdAt?.toDate?.() || new Date(0);
        return {
          name: r.name,
          rating: r.rating,
          text: r.message,
          date: created.toLocaleDateString('en-CA', { month: 'short', year: 'numeric' }),
          _t: created.getTime(),
        };
      })
      .sort((a, b) => b._t - a._t)
      .map(({ _t, ...rest }) => rest);
  }

  async function submitReview({ name, rating, message, email }) {
    await initFirebase();
    await db().collection('reviews').add({
      name,
      rating: Number(rating),
      message,
      email: email || '',
      approved: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  async function signIn(email, password) {
    await initFirebase();
    return auth().signInWithEmailAndPassword(email, password);
  }

  async function signOut() {
    await initFirebase();
    return auth().signOut();
  }

  async function getSession() {
    await initFirebase();
    const user = auth().currentUser;
    if (user) return { user: { email: user.email } };
    return new Promise((resolve) => {
      const unsub = auth().onAuthStateChanged((u) => {
        unsub();
        resolve(u ? { user: { email: u.email } } : null);
      });
    });
  }

  async function uploadGalleryImage(file, meta) {
    await initFirebase();
    if (!auth().currentUser) throw new Error('Please log in first.');

    const ext = file.name.split('.').pop().toLowerCase() || 'jpg';
    const path = `gallery/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const ref = storage().ref(path);

    await ref.put(file);
    const publicUrl = await ref.getDownloadURL();

    await db().collection('gallery_images').add({
      src: publicUrl,
      alt: meta.alt || meta.title || '',
      title: meta.title || '',
      description: meta.description || '',
      price: meta.price || '',
      menuBoard: Boolean(meta.menuBoard),
      sortOrder: meta.sortOrder || Date.now(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    return publicUrl;
  }

  async function deleteGalleryImage(id) {
    await initFirebase();
    if (!auth().currentUser) throw new Error('Please log in first.');
    await db().collection('gallery_images').doc(id).delete();
  }

  async function fetchAllReviews() {
    await initFirebase();
    if (!auth().currentUser) throw new Error('Please log in first.');
    const snap = await db().collection('reviews').get();
    return snap.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .sort((a, b) => {
        const ta = a.createdAt?.toDate?.()?.getTime() || 0;
        const tb = b.createdAt?.toDate?.()?.getTime() || 0;
        return tb - ta;
      });
  }

  async function setReviewApproved(id, approved) {
    await initFirebase();
    await db().collection('reviews').doc(id).update({ approved });
  }

  async function deleteReview(id) {
    await initFirebase();
    await db().collection('reviews').doc(id).delete();
  }

  window.OyshiBackend = {
    isEnabled,
    fetchGallery,
    fetchReviews,
    submitReview,
    signIn,
    signOut,
    getSession,
    uploadGalleryImage,
    deleteGalleryImage,
    fetchAllReviews,
    setReviewApproved,
    deleteReview,
  };
})();
