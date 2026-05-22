/* Reviews: load published reviews + submit form */
(function () {
  'use strict';

  const listEl = document.getElementById('reviewsList');
  const form = document.getElementById('reviewForm');
  const thanksEl = document.getElementById('reviewThanks');
  const starInput = document.getElementById('reviewRating');
  const starBtns = document.querySelectorAll('.star-rating button');

  function starsHtml(n) {
    const full = Math.round(Number(n)) || 0;
    let s = '';
    for (let i = 1; i <= 5; i++) {
      s += i <= full ? '&#9733;' : '&#9734;';
    }
    return s;
  }

  function renderReviews(reviews) {
    if (!listEl) return;
    if (!reviews || reviews.length === 0) {
      listEl.innerHTML =
        '<p class="reviews-empty">No reviews posted yet. You can be the first.</p>';
      return;
    }
    listEl.innerHTML = reviews
      .map(
        (r) => `
      <article class="review-card">
        <div class="review-card__stars" aria-label="${r.rating} out of 5 stars">${starsHtml(r.rating)}</div>
        <p class="review-card__text">${escapeHtml(r.text)}</p>
        <footer class="review-card__meta">
          <strong>${escapeHtml(r.name)}</strong>
          ${r.date ? `<span>${escapeHtml(r.date)}</span>` : ''}
        </footer>
      </article>`
      )
      .join('');
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  async function loadReviews() {
    try {
      const res = await fetch('data/reviews.json');
      if (!res.ok) throw new Error('not found');
      const data = await res.json();
      renderReviews(Array.isArray(data) ? data : []);
    } catch {
      renderReviews([]);
    }
  }

  // Star rating picker
  if (starBtns.length && starInput) {
    starBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.value;
        starInput.value = val;
        starBtns.forEach((b) => {
          const on = Number(b.dataset.value) <= Number(val);
          b.classList.toggle('is-on', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      });
    });
  }

  // Thank-you message after FormSubmit redirect
  const formCard = document.getElementById('reviewFormCard');
  if (new URLSearchParams(location.search).get('review') === 'thanks') {
    if (thanksEl) thanksEl.hidden = false;
    if (formCard) formCard.hidden = true;
    history.replaceState(null, '', location.pathname + '#reviews');
  }

  if (form && starInput) {
    form.addEventListener('submit', (e) => {
      if (!starInput.value) {
        e.preventDefault();
        alert('Please choose a star rating.');
      }
    });
  }

  if (listEl) loadReviews();
})();
