/* Load images from Firebase or data/gallery.json and render across the site */
(function () {
  'use strict';

  let cache = null;

  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str == null ? '' : String(str);
    return d.innerHTML;
  }

  async function loadGallery() {
    if (cache) return cache;

    if (window.OyshiBackend?.isEnabled()) {
      try {
        cache = await window.OyshiBackend.fetchGallery();
        if (cache.images && cache.images.length > 0) return cache;
      } catch (err) {
        console.warn('Firebase gallery, using JSON fallback:', err);
      }
    }

    const res = await fetch('data/gallery.json');
    if (!res.ok) throw new Error('Could not load gallery.json');
    cache = await res.json();
    return cache;
  }

  function foodImages(data) {
    return (data.images || []).filter((i) => !i.menuBoard);
  }

  function boardImages(data) {
    return (data.images || []).filter((i) => i.menuBoard);
  }

  function initSlideshow(container, images) {
    if (!container || !images.length) return;
    container.innerHTML = '';
    images.forEach((item, i) => {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || item.title || '';
      if (i === 0) img.classList.add('is-active');
      container.appendChild(img);
    });
    const slides = container.querySelectorAll('img');
    if (slides.length < 2) return;
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove('is-active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('is-active');
    }, 4000);
  }

  function menuScrollCard(item) {
    const price = item.price ? `<span class="price">${esc(item.price)}</span>` : '';
    const desc = item.desc ? `<p>${esc(item.desc)}</p>` : '';
    return `
      <article class="menu-scroll__card">
        <img src="${esc(item.src)}" alt="${esc(item.alt || item.title || '')}" loading="lazy">
        <div class="card__body">
          <h3>${esc(item.title || item.alt || 'Dish')}</h3>
          ${desc}
          ${price}
        </div>
      </article>`;
  }

  function initMenuScroll(container, images) {
    if (!container) return;
    container.innerHTML = images.map(menuScrollCard).join('');
    initMenuScrollNav();
  }

  function initMenuScrollNav() {
    const menuScroll = document.getElementById('menuScroll');
    const prevBtn = document.querySelector('.menu-scroll-prev');
    const nextBtn = document.querySelector('.menu-scroll-next');
    if (!menuScroll || !prevBtn || !nextBtn) return;

    const step = () => {
      const card = menuScroll.querySelector('.menu-scroll__card');
      return card ? card.offsetWidth + 20 : 300;
    };
    const updateButtons = () => {
      const max = menuScroll.scrollWidth - menuScroll.clientWidth - 2;
      prevBtn.disabled = menuScroll.scrollLeft <= 2;
      nextBtn.disabled = menuScroll.scrollLeft >= max;
    };
    prevBtn.onclick = () => menuScroll.scrollBy({ left: -step(), behavior: 'smooth' });
    nextBtn.onclick = () => menuScroll.scrollBy({ left: step(), behavior: 'smooth' });
    menuScroll.onscroll = updateButtons;
    window.addEventListener('resize', updateButtons);
    updateButtons();
  }

  function initGalleryGrid(container, images) {
    if (!container) return;
    container.classList.remove('is-loading');
    if (!images.length) {
      container.innerHTML =
        '<p style="color:var(--cocoa-soft);grid-column:1/-1">No photos yet. Check back soon.</p>';
      return;
    }
    container.innerHTML = images
      .map(
        (item) =>
          `<img src="${esc(item.src)}" alt="${esc(item.alt || item.title || '')}" loading="lazy" width="400" height="300">`
      )
      .join('');
  }

  function menuPhotoCard(item) {
    return `
      <article class="menu-card menu-card--photo">
        <img src="${esc(item.src)}" alt="${esc(item.alt || '')}" loading="lazy">
        <div class="menu-card__inner">
          <div class="menu-card__top">
            <h3>${esc(item.title || item.alt || 'Dish')}</h3>
            ${item.price ? `<span class="menu-card__price">${esc(item.price)}</span>` : ''}
          </div>
          ${item.desc ? `<p>${esc(item.desc)}</p>` : ''}
        </div>
      </article>`;
  }

  function initMenuBoards(container, boards) {
    if (!container) return;
    container.innerHTML = boards
      .map(
        (item) => `
      <figure class="menu-board">
        <img src="${esc(item.src)}" alt="${esc(item.alt || '')}" loading="lazy">
        <figcaption>${esc(item.title || item.alt || '')}</figcaption>
      </figure>`
      )
      .join('');
  }

  function initMenuPhotoGrid(container, images) {
    if (!container) return;
    container.innerHTML = images.map(menuPhotoCard).join('');
  }

  async function init() {
    const galleryEl = document.querySelector('.gallery--dynamic');
    if (galleryEl) galleryEl.classList.add('is-loading');

    try {
      const data = await loadGallery();
      const food = foodImages(data);
      const boards = boardImages(data);
      const all = data.images || [];

      initSlideshow(document.getElementById('aboutSlideshow'), food);
      initMenuScroll(document.getElementById('menuScroll'), food);
      initGalleryGrid(galleryEl, all);
      initMenuBoards(document.querySelector('.menu-boards--dynamic'), boards);
      initMenuPhotoGrid(document.getElementById('menuPhotoGrid'), food);
    } catch (err) {
      console.warn('Gallery loader:', err);
      if (galleryEl) {
        galleryEl.classList.remove('is-loading');
        galleryEl.innerHTML =
          '<p style="color:var(--cocoa-soft)">Could not load photos. Please refresh the page.</p>';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.OyshiGallery = { loadGallery, foodImages, boardImages, refresh: () => { cache = null; return init(); } };
})();
