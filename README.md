# Hustler's Tuition — Premium Website (v3)

This is a full redesign of your existing site, built on your original content,
identity and structure. Nothing about the school's story was invented — only
the visual system, layout and page structure were rebuilt.

## What was analyzed in your old site

- **Pages/sections:** single-page site with Header, Hero, About, Why Choose Us,
  Stats, Courses, Boards, Subjects, Facilities, Teachers, Gallery,
  Testimonials, FAQ, Admission Form, Notice Board, Events, Notes, Contact,
  Map, Footer.
- **Design system:** all-blue dark theme (`#2563eb` on near-black `#08111f`),
  Poppins everywhere, generic AOS zoom/fade animations, vanilla-tilt on cards.
- **Issues found:** no light theme, low contrast between many blues, heavy
  external JS (AOS + Typed.js + vanilla-tilt) hurting load performance,
  repeated card-grid sections with no visual hierarchy, "Success Rate %" stat
  with no verifiable number, empty/placeholder Notice Board & Events sections,
  Facebook/YouTube icons for accounts that likely aren't active, duplicate
  form pattern, Computer-subject content mixed into an academic-only offering,
  teachers each tied to a single subject.

## What changed

- **Palette:** Deep navy (`#0a1b34` / `#050d1c`) + antique gold
  (`#d1a13d`) — a trust-and-prestige combination instead of a single blue,
  with a full light theme as default and dark mode as a toggle.
- **Type:** Fraunces (serif display) for headings + Plus Jakarta Sans for
  body — replaces the single-family Poppins setup for more hierarchy.
- **Removed:** Facebook/YouTube icons, Notice Board, Upcoming Events, Download
  Notes (placeholder links), duplicate/looser form pattern, Computer &
  Technology course + teacher subject tag.
- **Added/updated:** single highlighted Admission form, generic school &
  scholarship exam-prep mention (no exam names), 150+ Students / 5 Teachers
  stat (no invented "Success Rate"), dark/light toggle, sticky nav, animated
  counters, scroll-to-top, lighter JS (no AOS/Typed.js/vanilla-tilt — see
  below), semantic HTML5, JSON-LD schema, sitemap.xml, robots.txt.
- **Performance:** dropped 3 external animation libraries in favor of ~9KB of
  hand-written vanilla JS; images use `loading="lazy"`; fonts are preconnected
  and loaded with `display=swap`.

## Folder structure

```
/
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md              ← this file
└── assets/
    ├── css/style.css
    ├── js/script.js
    └── images/
        ├── logo/           (logo.svg, favicon.svg — already in place)
        ├── hero/            ← add hero photo(s) here
        ├── about/           ← add about/classroom photo(s) here
        ├── teachers/        ← add 5 teacher photos here
        ├── students/        ← optional, for future use
        ├── classroom/       ← optional, for future use
        └── gallery/         ← add up to 6 gallery photos here
```

## Replacing the placeholder visuals with real photos

The hero, about, teacher and gallery images currently use a hand-drawn
gold/navy `.art-fill` placeholder graphic instead of stock or fake photos —
this was a deliberate choice rather than using generic filler photography.
To swap in real photos:

1. Drop your image into the matching folder above (e.g.
   `assets/images/teachers/hemraj-sir.jpg`). Use compressed `.jpg`/`.webp`,
   ideally under 200KB each.
2. In `index.html`, find the `<div class="art-fill">...</div>` block you want
   to replace and swap it for:
   ```html
   <img src="assets/images/teachers/hemraj-sir.jpg"
        alt="Hemraj Sir teaching at Hustler's Tuition"
        loading="lazy" width="400" height="400">
   ```
3. Keep the parent wrapper (`.hero-panel`, `.about-frame`, `.teacher-photo`,
   `.gallery-item`) as-is — it already handles the rounded corners, aspect
   ratio and hover effects.

## Teacher details — please verify

Teacher names were kept from your original site (Hemraj Sir, Atul Sir, Laxmi
Ma'am, Aryan Khiladi) plus one added placeholder (Sneha Ma'am) to reach five.
Per your request they're no longer tied to a single subject — the bios are
generic professional placeholders. Please replace the bio text and add real
years of experience once confirmed; I did not invent specific experience
numbers.

## Before publishing, please also:

- Confirm the address (`Jaam Sawli, Nagpur, Maharashtra`) is exact enough for
  the Google Map to pin correctly, or share a precise pin and I'll update the
  embed URL.
- Wire up the two forms (Admission + Contact) to a real backend — right now
  they show a success message but don't send data anywhere. Easiest options:
  Formspree, Google Forms (hidden iframe), or a small serverless function.
- Update `og:image` in `index.html` once you have a real hero photo, so link
  previews on WhatsApp/Facebook look right.
