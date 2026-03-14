/* ============================================================
   PORTFOLIO — PROJECTS DATA
   ============================================================

   HOW TO ADD A PROJECT
   ─────────────────────
   Copy one object from the array below, paste it at the end,
   and fill in your own values.

   Fields:
     category  — label shown above the title (e.g. "Portrait")
     title     — project title
     desc      — short one-line description
     thumb     — path to the thumbnail shown in the grid
                 e.g. "images/projects/my-photo.jpg"
     media     — path to the full-size image OR video opened in the lightbox
                 can be the same as thumb, or a higher-res version
     type      — "image" or "video"

   FOR A VIDEO PROJECT
   ─────────────────────
   Set type to "video".
   Set thumb to a poster/thumbnail image (JPG).
   Set media to your video file path (e.g. "images/projects/my-film.mp4").

   ============================================================ */

const PROJECTS = [
  {
    category: "Portrait",
    title:    "Golden Hour Series",
    desc:     "Intimate outdoor portraits taken during the magic hour in the Loire Valley.",
    thumb:    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80",
    media:    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=90",
    type:     "image"
  },
  {
    category: "Architecture",
    title:    "Urban Geometry",
    desc:     "Lines, shadows, and human scale — a study of Parisian modernism.",
    thumb:    "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=700&q=80",
    media:    "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1200&q=90",
    type:     "image"
  },
  {
    category: "Wedding",
    title:    "Marie & Théo",
    desc:     "A rainy June wedding in Bordeaux — raw emotion, candid joy.",
    thumb:    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80",
    media:    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=90",
    type:     "image"
  },
  {
    category: "Short film",
    title:    "Before Noon",
    desc:     "A 12-minute documentary about early-morning market vendors in Lyon.",
    thumb:    "https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=700&q=80",
    media:    "https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=1200&q=90",
    type:     "image"
  },
  {
    category: "Commercial",
    title:    "Brand Campaign — Montre Atelier",
    desc:     "Product and lifestyle photography for an independent watchmaker.",
    thumb:    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80",
    media:    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=90",
    type:     "image"
  },
  {
    category: "Documentary",
    title:    "South Light",
    desc:     "Thirty days in Portugal chasing southern light and slow living.",
    thumb:    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=700&q=80",
    media:    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=1200&q=90",
    type:     "image"
  }
];


/* ─── RENDER PROJECTS INTO THE GRID ────────────────────────── */
/*
  This function reads the PROJECTS array above and builds the
  HTML cards automatically. You never need to touch the HTML
  for projects — just edit the array.
*/

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  PROJECTS.forEach((project, i) => {
    /* Stagger AOS delay: 0, 100, 200, then reset every 3 cards */
    const delay = (i % 3) * 100;

    const card = document.createElement('div');
    card.className         = 'project-card';
    card.dataset.media     = project.media;
    card.dataset.type      = project.type;
    card.dataset.aos       = 'fade-up';
    card.dataset.aosDuration = '700';
    card.dataset.aosDelay  = delay;

    const mediaTag = project.type === 'video'
      ? `<video class="project-media" poster="${project.thumb}" muted playsinline></video>`
      : `<img  class="project-media" src="${project.thumb}" alt="${project.title}" loading="lazy" />`;

    card.innerHTML = `
      ${mediaTag}
      <div class="project-info">
        <p class="project-category">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
      </div>
    `;

    grid.appendChild(card);
  });

  /* Re-init AOS so dynamically added cards get their animations */
  if (window.AOS) AOS.refresh();
});
