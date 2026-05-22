/* Reviews: Firebase or JSON + FormSubmit fallback */
(function () {
  'use strict';

  const listEl = document.getElementById('reviewsList');
  const form = document.getElementById('reviewForm');
  const thanksEl = document.getElementById('reviewThanks');
  const formCard = document.getElementById('reviewFormCard');
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

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
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

  async function loadReviews() {
    if (window.OyshiBackend?.isEnabled()) {
      try {
        const reviews = await window.OyshiBackend.fetchReviews();
        renderReviews(reviews);
        return;
      } catch (err) {
        console.warn('Firebase reviews:', err);
      }
    }

    try {
      const res = await fetch('data/reviews.json');
      if (!res.ok) throw new Error('not found');
      const data = await res.json();
      renderReviews(Array.isArray(data) ? data : []);
    } catch {
      renderReviews([]);
    }
  }

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

  function showThanks() {
    if (thanksEl) thanksEl.hidden = false;
    if (formCard) formCard.hidden = true;
    if (location.hash !== '#reviews') location.hash = 'reviews';
  }

  if (new URLSearchParams(location.search).get('review') === 'thanks') {
    showThanks();
    history.replaceState(null, '', location.pathname + '#reviews');
  }

  if (form && starInput) {
    form.addEventListener('submit', async (e) => {
      if (!starInput.value) {
        e.preventDefault();
        alert('Please choose a star rating.');
        return;
      }

      if (window.OyshiBackend?.isEnabled()) {
        e.preventDefault();
        const fd = new FormData(form);
        try {
          await window.OyshiBackend.submitReview({
            name: fd.get('name'),
            rating: fd.get('rating'),
            message: fd.get('message'),
            email: fd.get('email') || '',
          });
          form.reset();
          starBtns.forEach((b) => b.classList.remove('is-on'));
          showThanks();
        } catch (err) {
          alert('Could not send review. Try again or call us.');
          console.error(err);
        }
      }
    });
  }

  if (listEl) loadReviews();
})();
