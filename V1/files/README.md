# Portfolio — File Structure & How to Edit

## Folder overview

```
portfolio/
├── index.html          ← Main page structure (sections, text, links)
├── css/
│   └── style.css       ← All visual styles (colors, fonts, layout)
├── js/
│   ├── projects.js     ← Your project list — edit this to add work
│   └── main.js         ← Animations, lightbox, contact form logic
└── images/             ← (create this folder) Put your photos & videos here
    ├── hero-main.jpg
    ├── portrait.jpg
    └── projects/
        ├── project-1.jpg
        └── ...
```

---

## How to customize each part

### Change your name, bio, links
→ Open `index.html`. Every section that needs your content is marked with `✏️ EDIT`.

### Change colors
→ Open `css/style.css`. Edit the `:root { }` block at the very top:
```css
:root {
  --cream:   #FAF7F2;   /* page background */
  --sienna:  #B5622B;   /* accent color    */
  --charcoal:#2B2520;   /* dark sections   */
  /* ... */
}
```

### Add or edit projects
→ Open `js/projects.js`. Edit the `PROJECTS` array at the top:
```js
{
  category: "Portrait",
  title:    "My New Project",
  desc:     "A short description.",
  thumb:    "images/projects/my-photo.jpg",   // shown in the grid
  media:    "images/projects/my-photo-hd.jpg", // opened in lightbox
  type:     "image"   // or "video"
}
```
Just copy-paste an existing object and change the values.

### Add a video project
Same as above but set `type: "video"`, and set `media` to your `.mp4` path:
```js
{
  category: "Short film",
  title:    "My Film",
  desc:     "Description here.",
  thumb:    "images/projects/film-poster.jpg",
  media:    "images/projects/my-film.mp4",
  type:     "video"
}
```

### Use your own images (replace placeholder photos)
1. Create an `images/` folder next to `index.html`
2. Copy your photos into it (e.g. `images/hero-main.jpg`)
3. In `index.html`, update the `src` attributes, e.g.:
   `src="https://..."` → `src="images/hero-main.jpg"`
4. In `js/projects.js`, update `thumb` and `media` paths the same way.

---

## Making the contact form send real emails

The form currently runs in demo mode. Two easy free options:

**Option A — Formspree** (simplest):
1. Go to https://formspree.io and create a free account
2. Create a form → copy your endpoint URL
3. In `index.html`, change `onsubmit="handleForm(event)"` to nothing,
   and add `action="https://formspree.io/f/YOUR_ID" method="POST"` to the `<form>` tag

**Option B — EmailJS** (stays 100% client-side):
1. Go to https://www.emailjs.com
2. Follow their setup guide — you'll get a `emailjs.send()` call
3. Replace the `setTimeout` in `js/main.js` with that call

---

## How to host it yourself

**GitHub Pages (free):**
1. Push this folder to a GitHub repository
2. Go to Settings → Pages → Source: main branch / root
3. Your site is live at `https://yourusername.github.io/portfolio`

**Netlify (free, drag & drop):**
1. Go to https://netlify.com
2. Drag the entire `portfolio/` folder onto the Netlify dashboard
3. Done — live in 30 seconds

**Your own server (VPS/shared hosting):**
Upload the folder via FTP to your `public_html` or `www` directory.
No server-side setup needed — it's all static files.
