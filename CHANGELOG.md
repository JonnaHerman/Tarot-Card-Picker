# Changelog

All notable changes to **Lunar Arcana — Tarot Card Picker** are documented here.

## [Unreleased]

### Planned

- Reading history
- More tarot spread meanings
- Custom PWA app icons
- Accessibility improvements
- Automated tests
- WeChat Mini Program exploration

---

## [0.5.0] - 2026-10-10

### Added

- One-card draw mode
- Three-card spread mode
- Five-card spread mode
- Dynamic number inputs based on selected spread size
- Random generation of 1, 3 or 5 unique card positions
- Saved spread-size preference
- Bilingual labels for all spread sizes

### Changed

- Refined the dark mystical visual design
- Added a dedicated spread-size selector
- Improved desktop and mobile spacing
- Added adaptive five-card layouts
- Adjusted reveal timing for five-card readings

### Fixed

- Standardised every revealed tarot image to the same card frame
- Added a fixed tarot-card aspect ratio
- Normalised artwork rendering with a fixed frame and `object-fit: cover`
- Added a subtle uniform scale so scans with different source margins appear at the same visual size
- Prevented image stretching
- Ensured upright and reversed cards use identical dimensions
- Improved consistency between Major and Minor Arcana images

### Learning Focus

- Dynamic UI generation
- State-driven rendering
- Responsive layouts with variable item counts
- Aspect-ratio-based media layout
- Consistent image rendering

---

## [0.4.0] - 2026-10-08

### Added

- Chinese / English language switching
- Saved language preference
- Mobile mini-app interface
- Bottom navigation
- PWA manifest and service worker
- Add-to-home-screen support

---

## [0.3.0] - 2026-10-08

### Added

- Rider–Waite–Smith artwork
- Full 78-card image mapping
- 3D card-flip animation
- Offline HTML export

---

## [0.2.0] - 2026-10-08

### Added

- Full 78-card random deck
- Random upright / reversed orientation
- Three-number selection system
- Full current 1–78 mapping

### Changed

- Numbers became positions in the current shuffled deck instead of fixed card IDs

---

## [0.1.0] - 2026-10-08

### Added

- Initial HTML / CSS / JavaScript tarot picker
- Basic three-card interface
