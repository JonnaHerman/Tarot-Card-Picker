# Changelog

All notable changes to **Lunar Arcana — Tarot Card Picker** will be documented in this file.

This project is also used as a personal front-end learning record, so the changelog keeps track of both product features and technical improvements.

The format is inspired by [Keep a Changelog](https://keepachangelog.com/), but kept simple for a personal learning project.

---

## [Unreleased]

### Planned
- Add screenshots and preview images to the README
- Add custom PWA app icons
- Improve accessibility and keyboard navigation
- Add local reading history
- Add more tarot spreads
- Add optional card interpretation text
- Improve offline caching
- Separate HTML, CSS and JavaScript into individual files
- Refactor tarot card data into reusable modules
- Add automated tests for shuffle and card-selection logic
- Explore a dedicated WeChat Mini Program version

---

## [0.4.0] - 2026-10-08

### Added
- Chinese / English language switching
- Saved language preference using `localStorage`
- Mobile mini-app-style interface
- Mobile top app bar
- Bottom navigation with:
  - Draw
  - Deck
  - Settings
- Separate mobile deck view
- Separate mobile settings view
- PWA manifest
- Service worker
- Add-to-home-screen support
- Mobile safe-area handling
- PWA installation guidance for Android and iOS

### Changed
- Redesigned mobile layout to behave more like a small standalone app
- Improved touch targets and mobile controls
- Updated responsive card sizing
- Moved language, installation and offline tools into a dedicated settings experience
- Updated project structure from a single HTML file to:

```text
Tarot-Card-Picker/
├── index.html
├── manifest.webmanifest
├── sw.js
└── README.md
```

### Learning Focus
- Progressive Web Apps
- Service workers
- Web app manifests
- Browser installation behaviour
- Mobile responsive navigation
- `localStorage`
- UI state management

---

## [0.3.0] - 2026-10-08

### Added
- Rider–Waite–Smith tarot artwork
- Full 78-card image mapping
- Major Arcana image mapping
- Minor Arcana image mapping
- Upright and reversed visual orientation
- 3D card-flip animation
- Sequential three-card reveal
- Manual card re-flipping
- Dark mystical visual theme
- Optional offline HTML export

### Changed
- Replaced placeholder / generated tarot illustrations with Rider–Waite–Smith artwork
- Improved card presentation and visual hierarchy
- Redesigned the interface with:
  - dark purple / black background
  - gold accent colours
  - card-back design
  - animated card reveal
- Changed card image loading to use external Rider–Waite–Smith image sources
- Added fallback image-source logic

### Fixed
- Removed the earlier placeholder tarot artwork that did not accurately represent the Rider–Waite–Smith deck
- Improved handling for card image loading failures

### Learning Focus
- Working with image assets
- CSS 3D transforms
- Flip animations
- Asynchronous image loading
- Browser Fetch API
- Offline-oriented design

---

## [0.2.0] - 2026-10-08

### Added
- Full 78-card tarot deck data
- Random reshuffling of all 78 cards
- Random upright / reversed orientation
- Three-number selection system
- Current shuffle ID
- Full 1–78 mapping view
- Random three-number generator

### Changed
- Numbers no longer permanently map to fixed tarot cards
- Each number now represents a position in the **current shuffled deck**
- Refreshing the page or reshuffling creates a new mapping

### Example
Before:
```text
17 → always the same card
```

After:
```text
Shuffle A
17 → The Star

Shuffle B
17 → Seven of Swords

Shuffle C
17 → The Empress
```

### Learning Focus
- JavaScript arrays
- Objects
- Randomisation
- Fisher–Yates-style shuffle logic
- Application state
- DOM updates

---

## [0.1.0] - 2026-10-08

### Added
- Initial tarot card picker
- Basic HTML interface
- Three numeric inputs
- Three-card result display
- Initial 78-card tarot data structure
- Basic dark theme

### Project Goal
The original goal was to create a simple tarot tool where three numbers could be entered to return three tarot cards.

This version became the starting point for a longer-term front-end learning project.

### Learning Focus
- HTML structure
- CSS basics
- JavaScript basics
- Event listeners
- DOM manipulation

---

# Development Timeline
The project has evolved roughly like this:

```text
Basic HTML page
        ↓
Three-number tarot picker
        ↓
78-card random shuffle system
        ↓
Random upright / reversed cards
        ↓
Rider–Waite–Smith artwork
        ↓
3D card-flip animation
        ↓
Responsive desktop interface
        ↓
Chinese / English support
        ↓
Mobile mini-app interface
        ↓
PWA and offline support
        ↓
Future improvements
```

---

# Versioning
For this personal project, version numbers follow a simple pattern:

```text
MAJOR.MINOR.PATCH
```

For example:

```text
0.4.0
```

means:
- `0` — the project is still in active learning/development
- `4` — the fourth meaningful feature milestone
- `0` — no smaller patch release has been recorded yet

Examples of future versions:

```text
0.4.1  Small bug fix
0.5.0  New feature such as reading history
1.0.0  First stable version
```

---

# Notes
This changelog records meaningful milestones rather than every individual Git commit.

Git commit history should still be used for smaller implementation details, bug fixes and development experiments.

A useful rule for this project is:

```text
README.md
→ What the project is now

CHANGELOG.md
→ How the project has changed

Git history
→ Exactly how the code changed
```
