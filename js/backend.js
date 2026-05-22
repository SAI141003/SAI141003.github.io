/* Supabase backend — gallery + reviews + owner uploads */
(function () {
  'use strict';

  let client = null;

  function cfg() {
    return window.SITE_CONFIG || {};
  }

  function isEnabled() {
    const c = cfg();
    return Boolean(c.supabaseUrl && c.supabaseAnonKey && window.supabase);
  }

  function getClient() {
    if (!isEnabled()) return null;
    if (!client) {
      client = window.supabase.createClient(cfg().supabaseUrl, cfg().supabaseAnonKey);
    }
    return client;
  }

  function rowToImage(row) {
    return {
      id: row.id,
      src: row.src,
      alt: row.alt || row.title || '',
      title: row.title || '',
      desc: row.description || '',
      price: row.price || '',
      menuBoard: row.menu_board,
    };
  }

  async function fetchGallery() {
    const sb = getClient();
    if (!sb) throw new Error('Backend not configured');

    const { data, error } = await sb
      .from('gallery_images')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: true });

    if (error) throw error;
    return { images: (data || []).map(rowToImage) };
  }

  async function fetchReviews() {
    const sb = getClient();
    if (!sb) throw new Error('Backend not configured');

    const { data, error } = await sb
      .from('reviews')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data || []).map((r) => ({
      name: r.name,
      rating: r.rating,
      text: r.message,
      date: new Date(r.created_at).toLocaleDateString('en-CA', {
        month: 'short',
        year: 'numeric',
      }),
    }));
  }

  async function submitReview({ name, rating, message, email }) {
    const sb = getClient();
    if (!sb) throw new Error('Backend not configured');

    const { error } = await sb.from('reviews').insert({
      name,
      rating: Number(rating),
      message,
      email: email || '',
      approved: false,
    });
    if (error) throw error;
  }

  async function signIn(email, password) {
    const sb = getClient();
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

  async function signOut() {
    const sb = getClient();
    if (sb) await sb.auth.signOut();
  }

  async function getSession() {
    const sb = getClient();
    if (!sb) return null;
    const { data } = await sb.auth.getSession();
    return data.session;
  }

  async function uploadGalleryImage(file, meta) {
    const sb = getClient();
    const session = await getSession();
    if (!session) throw new Error('Please log in first.');

    const ext = file.name.split('.').pop().toLowerCase() || 'jpg';
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: upErr } = await sb.storage.from('gallery').upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });
    if (upErr) throw upErr;

    const { data: urlData } = sb.storage.from('gallery').getPublicUrl(path);
    const publicUrl = urlData.publicUrl;

    const { error: dbErr } = await sb.from('gallery_images').insert({
      src: publicUrl,
      alt: meta.alt || meta.title || '',
      title: meta.title || '',
      description: meta.description || '',
      price: meta.price || '',
      menu_board: Boolean(meta.menuBoard),
      sort_order: meta.sortOrder || 0,
    });
    if (dbErr) throw dbErr;

    return publicUrl;
  }

  async function deleteGalleryImage(id) {
    const sb = getClient();
    const session = await getSession();
    if (!session) throw new Error('Please log in first.');

    const { error } = await sb.from('gallery_images').delete().eq('id', id);
    if (error) throw error;
  }

  async function fetchAllReviews() {
    const sb = getClient();
    const session = await getSession();
    if (!session) throw new Error('Please log in first.');

    const { data, error } = await sb
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }

  async function setReviewApproved(id, approved) {
    const sb = getClient();
    const { error } = await sb.from('reviews').update({ approved }).eq('id', id);
    if (error) throw error;
  }

  window.OyshiBackend = {
    isEnabled,
    getClient,
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
  };
})();
