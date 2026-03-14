/* ============================================================
   PORTFOLIO — MAIN JAVASCRIPT
   Structure:
     1. Navigation (shrink on scroll)
     2. AOS (scroll animations init)
     3. Lightbox (click to expand project media)
     4. Contact form (demo submit handler)
   ============================================================ */


/* ─── 1. NAVIGATION ─────────────────────────────────────────── */

(function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
})();


/* ─── 2. AOS — ANIMATE ON SCROLL ───────────────────────────── */

/*
  AOS is loaded via CDN in index.html.
  Options: https://michalsnik.github.io/aos/
  - once: true  → animation plays only the first time
  - offset: 80  → trigger 80px before element enters viewport
*/

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, offset: 80 });
});


/* ─── 3. LIGHTBOX ───────────────────────────────────────────── */

(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbVideo  = document.getElementById('lightbox-video');
  const lbClose  = document.getElementById('lightbox-close');

  if (!lightbox) return;

  /* Open lightbox when a project card is clicked */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const media = card.dataset.media;
      const type  = card.dataset.type; /* "image" or "video" */

      if (!media) return;

      if (type === 'video') {
        lbVideo.src           = media;
        lbVideo.style.display = 'block';
        lbImg.style.display   = 'none';
      } else {
        lbImg.src             = media;
        lbImg.style.display   = 'block';
        lbVideo.style.display = 'none';
      }

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  /* Close helpers */
  function closeLightbox() {
    lightbox.classList.remove('open');
    lbVideo.pause();
    lbVideo.src              = '';
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', closeLightbox);

  /* Click the dark backdrop to close */
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  /* Press Escape to close */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
})();


/* ─── 4. CONTACT FORM ───────────────────────────────────────── */

/*
  Currently runs in demo mode (no real email sent).

  TO SEND REAL EMAILS — easiest options:
  ① Formspree (free tier):
      - Go to https://formspree.io and create a form
      - Change the <form> action in index.html to your Formspree endpoint
      - Remove the onsubmit="handleForm(event)" and let the default POST work
      - Or keep the JS and use fetch() to post to the endpoint

  ② EmailJS (free tier, stays client-side):
      - https://www.emailjs.com
      - Install their SDK via CDN, then call emailjs.send() below
*/

function handleForm(e) {
  e.preventDefault();

  const btn     = e.target.querySelector('.form-submit');
  const success = document.getElementById('form-success');

  btn.textContent = 'Sending…';
  btn.disabled    = true;

  /* ✏️ REPLACE THIS TIMEOUT with a real fetch() / emailjs.send() call */
  setTimeout(() => {
    e.target.reset();
    success.style.display = 'block';
    btn.textContent       = 'Send message →';
    btn.disabled          = false;
  }, 900);
}
