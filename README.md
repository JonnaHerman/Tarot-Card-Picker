# Lunar Arcana — Tarot Card Picker

An interactive Rider–Waite–Smith tarot web app built as a personal front-end learning project.

The current version supports **one-card, three-card, and five-card readings**. Each reading uses a newly shuffled 78-card deck, and the numbers entered by the user represent positions in the current shuffle.

## Current Features

- Full 78-card Rider–Waite–Smith deck
- One-card draw
- Three-card spread
- Five-card spread
- Random deck reshuffling
- Random upright / reversed orientation
- Unique random number generation
- 3D card-flip animation
- Standardised card-image sizing
- Chinese / English interface
- Mobile app-style UI
- PWA support
- Add-to-home-screen support
- Offline HTML export
- Current 1–78 deck mapping

## Spread Modes

### One Card

A quick single-card draw.

```text
1 number → 1 card
```

### Three Cards

The original project mode.

```text
3 unique numbers → 3 cards
```

### Five Cards

A larger reading mode.

```text
5 unique numbers → 5 cards
```

The app automatically changes the input fields, random-number generation, layout and reveal animation based on the selected spread size.

## How the Random System Works

Numbers are **not permanently linked** to tarot cards.

Every reshuffle:

1. Randomises all 78 cards.
2. Assigns an upright or reversed orientation to each card.
3. Maps positions `1–78` to the new shuffled order.
4. Uses the selected positions to reveal cards.

Example:

```text
Shuffle A
17 → The Star

Shuffle B
17 → Seven of Swords
```

## Consistent Card Artwork

Version `0.5.0` standardises the visual frame used by every revealed card.

The app uses a fixed tarot-card aspect ratio and:

```css
object-fit: cover;
object-position: center;
transform: scale(1.018);
```

This keeps every revealed card visually full-size and consistent inside the same fixed frame. Images are never stretched; a very small edge crop may occur so scans with slightly different source dimensions do not appear smaller than others. Upright and reversed cards use identical frame dimensions.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Web Storage (`localStorage`)
- Web App Manifest
- Service Worker API
- Browser Fetch API
- CSS Grid / Flexbox
- CSS 3D transforms
- Responsive media queries

No front-end framework is currently used.

## Project Structure

```text
Tarot-Card-Picker/
├── index.html
├── manifest.webmanifest
├── sw.js
├── README.md
└── CHANGELOG.md
```

## Run Locally

```bash
git clone https://github.com/JonnaHerman/Tarot-Card-Picker.git
cd Tarot-Card-Picker
```

Open `index.html` directly, or use VS Code Live Server.

For PWA features, use an HTTP/HTTPS development server rather than `file://`.

## GitHub Pages

Typical deployment:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ / (root)
```

## Mobile / PWA

On mobile, the project uses an app-style interface with:

- Draw
- Deck
- Settings

When hosted through HTTPS, it can be added to a phone's home screen.

## Tarot Artwork

The project uses Rider–Waite–Smith tarot imagery originally illustrated by **Pamela Colman Smith**.

The tarot artwork is not my original artwork. The code, interaction design and interface are part of this personal front-end learning project.

## What I Practised

### JavaScript

- arrays and objects
- state-driven rendering
- dynamic input generation
- unique random number generation
- deck shuffling
- DOM manipulation
- browser storage
- asynchronous image loading

### CSS

- responsive design
- CSS Grid
- Flexbox
- CSS variables
- 3D transforms
- aspect-ratio-based media layout
- consistent image fitting
- adaptive 1 / 3 / 5 card layouts

### Web Platform

- PWA manifests
- service workers
- caching
- offline-oriented design
- mobile installation

### Git / GitHub

- commits and pushes
- README maintenance
- changelog maintenance
- GitHub Pages

## Development Timeline

```text
Basic HTML page
        ↓
Three-number tarot picker
        ↓
78-card random shuffle
        ↓
Rider–Waite–Smith artwork
        ↓
3D card flip
        ↓
Bilingual UI
        ↓
Mobile PWA
        ↓
1 / 3 / 5 card modes
        ↓
Consistent artwork sizing
        ↓
Future improvements
```

## Roadmap

- [ ] Reading history
- [ ] More spread types
- [ ] Spread-position meanings
- [ ] Optional interpretation text
- [ ] Custom app icons
- [ ] Accessibility improvements
- [ ] Automated tests
- [ ] Refactor JavaScript into modules
- [ ] Explore a WeChat Mini Program version

## Disclaimer

This project is intended for entertainment, personal reflection and front-end programming practice. It should not be treated as professional medical, legal, financial, psychological or other expert advice.

## Author

**Jonna** — Software Engineering student.

GitHub: `https://github.com/JonnaHerman`

Repository: `https://github.com/JonnaHerman/Tarot-Card-Picker`
