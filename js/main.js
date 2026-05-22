/* Oyshi's Bangla Bistro — shared interactions */
(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('is-open'))
    );
  }

  // ---------- Active nav link based on current path ----------
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ---------- Footer year ----------
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Home page menu horizontal scroll ----------
  const menuScroll = document.getElementById('menuScroll');
  const prevBtn = document.querySelector('.menu-scroll-prev');
  const nextBtn = document.querySelector('.menu-scroll-next');

  if (menuScroll && prevBtn && nextBtn) {
    const step = () => {
      const card = menuScroll.querySelector('.menu-scroll__card');
      return card ? card.offsetWidth + 20 : 300;
    };

    const updateButtons = () => {
      const max = menuScroll.scrollWidth - menuScroll.clientWidth - 2;
      prevBtn.disabled = menuScroll.scrollLeft <= 2;
      nextBtn.disabled = menuScroll.scrollLeft >= max;
    };

    prevBtn.addEventListener('click', () => {
      menuScroll.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      menuScroll.scrollBy({ left: step(), behavior: 'smooth' });
    });
    menuScroll.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons();
  }

  // ---------- Gallery lightbox ----------
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<button class="lightbox__close" aria-label="Close">&times;</button><img alt="">';
    document.body.appendChild(box);

    const bigImg = box.querySelector('img');
    const close  = () => box.classList.remove('is-open');

    gallery.addEventListener('click', (e) => {
      const t = e.target;
      if (t.tagName === 'IMG') {
        bigImg.src = t.src;
        bigImg.alt = t.alt || '';
        box.classList.add('is-open');
      }
    });

    box.addEventListener('click', (e) => {
      if (e.target === box || e.target.classList.contains('lightbox__close')) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }
})();
