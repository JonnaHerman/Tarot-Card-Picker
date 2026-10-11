# Lunar Arcana — Tarot App

Version **0.6.0** restructures the project from a tarot picker into a mobile-first tarot app.

## Highlights

- phone-sized app UI on desktop
- full-screen UI on phones
- 8 languages
- spread library
- position meanings for every spread
- Daily Card
- Past / Present / Future
- You / Them / Relationship
- Five-Card Guidance
- Romance Opportunities / 桃花牌阵
- Career Five-Card Spread
- optional question field
- random or manual 1–78 positions
- 3D card reveal
- position × card interpretation
- local reading history
- 78-card library
- PWA support
- offline export

## Logic

```text
Home
↓
Choose theme / spread
↓
Read position meanings
↓
Optional question
↓
Shuffle 78 cards
↓
Choose unique numbers
↓
Reveal cards
↓
Read card + orientation + position
↓
Save locally
```

## Important note

Tarot spreads are not universally standardised. Lunar Arcana uses clearly defined app templates, so the same spread always uses the same position meanings inside this project.

## Project structure

```text
Lunar-Arcana/
├── index.html
├── manifest.webmanifest
├── sw.js
├── README.md
├── CHANGELOG.md
└── assets/
    ├── icon-192.png
    └── icon-512.png
```

## Development timeline

```text
v0.1 Basic picker
v0.2 78-card shuffle
v0.3 RWS artwork + 3D flip
v0.4 Mobile PWA + bilingual UI
v0.5 1 / 3 / 5 card modes
v0.6 Mobile Tarot App + spread positions + 8 languages
```

## Disclaimer

For entertainment, personal reflection and front-end learning only.
