# Lunar Arcana — Tarot Card Picker

A small interactive tarot web app built as a personal front-end learning project.

The app shuffles a complete 78-card Rider–Waite–Smith tarot deck, lets the user choose three numbers from `1–78`, and reveals the cards at those positions with random upright/reversed orientations.

The project started as a simple single-page experiment and has gradually been expanded with card-flip animations, a bilingual interface, a mobile mini-app layout, PWA support, and an offline export option.

---

## Preview

### Desktop
- Three-card reading layout
- Random deck shuffling
- Animated card reveal
- Current 1–78 deck mapping
- Chinese / English interface

### Mobile
- App-style top bar
- Bottom navigation
- Separate **Draw / Deck / Settings** views
- Mobile-friendly card layout
- Add-to-home-screen support through PWA features

> Screenshots will be added as the UI continues to develop.

---

## Features

### Tarot logic

- Full 78-card tarot deck
- 22 Major Arcana cards
- 56 Minor Arcana cards
- Random deck order on every reshuffle
- Random upright / reversed orientation
- Three-number selection system
- Numbers represent positions in the **current shuffled deck**
- The same number can produce a different card after reshuffling

### Card interaction

- 3D card-flip animation
- Cards remain hidden before revealing
- Three cards reveal one after another
- Cards can be manually flipped again after being revealed
- Reversed cards are visually rotated

### Language support

The interface currently supports:

- 中文
- English

Language preference is stored locally in the browser so the selected language is remembered on the same device.

### Mobile interface
On smaller screens, the website changes into a mobile app-style layout with:

- Sticky app bar
- Bottom navigation
- Draw page
- Deck page
- Settings page
- Touch-friendly controls
- Mobile safe-area support

### PWA support
The project includes:

- `manifest.webmanifest`
- `sw.js`
- Standalone display mode
- Service worker caching
- Add-to-home-screen support
- GitHub Pages compatibility

When hosted through HTTPS, for example with GitHub Pages, the project can be added to a phone's home screen and opened more like a standalone application.

### Offline version
The app also includes an option to generate a standalone HTML file with the tarot card images embedded directly into the file.

This is useful when I want to:

- Keep a portable copy
- Open the app without relying on the image host
- Use the tarot picker without an internet connection after export

---

## How the card system works
The number entered by the user is **not permanently assigned to one tarot card**.

For example:

```text
Shuffle A
17 → The Star

Shuffle B
17 → Seven of Swords

Shuffle C
17 → The Empress
```

Every time the deck is reshuffled:

1. The full 78-card deck is copied.
2. The card order is randomly shuffled.
3. Every card receives a random upright/reversed orientation.
4. Positions `1–78` are assigned to the newly shuffled deck.
5. The user enters three positions.
6. The corresponding cards are revealed.

This means the three numbers act as positions in a newly shuffled deck rather than fixed tarot IDs.

---

## Tech Stack
This project intentionally uses simple front-end technologies so I can understand the underlying logic without relying on a framework.

- HTML5
- CSS3
- Vanilla JavaScript
- Web Storage (`localStorage`)
- Web App Manifest
- Service Worker API
- Browser Fetch API
- CSS 3D transforms
- Responsive design / media queries

No front-end framework is currently used.

---

## Project Structure
```text
Tarot-Card-Picker/
├── index.html
├── manifest.webmanifest
├── sw.js
└── README.md
```

### `index.html`

Contains the main application:

- UI
- tarot card data
- language system
- deck randomisation
- card selection
- card flip animation
- mobile navigation
- offline export logic

### `manifest.webmanifest`
Defines PWA metadata such as:

- app name
- display mode
- theme colour
- start URL
- mobile orientation

### `sw.js`

Handles basic service worker caching for:

- application shell files
- previously loaded card images
- offline reuse where available

---

## Running the project locally

### Option 1 — Open the HTML file
Clone the repository:

```bash
git clone https://github.com/JonnaHerman/Tarot-Card-Picker.git
```

Open the project directory:

```bash
cd Tarot-Card-Picker
```

Then open:

```text
index.html
```

in a browser.

Some browser features, especially service workers and PWA installation, require the project to be served over HTTP/HTTPS rather than opened directly with `file://`.

---

### Option 2 — VS Code + Live Server
A simple development workflow is:

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

This is useful for testing the mobile layout and service worker behaviour locally.

---

## Deploying with GitHub Pages
This project can be hosted directly from the GitHub repository.

Typical setup:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose:

```text
Deploy from a branch
```

5. Select:

```text
Branch: main
Folder: / (root)
```

6. Save the configuration.

After GitHub Pages finishes deploying, the project can be opened from a public HTTPS URL.

Because GitHub Pages uses HTTPS, PWA features such as service workers and home-screen installation can work there.

---

## Mobile installation

### Android / Chrome
When the PWA is available for installation:

1. Open the GitHub Pages version in Chrome.
2. Open the browser menu.
3. Choose **Install app** or **Add to Home screen**.

The installed version can then launch with a more app-like interface.

### iPhone / iPad
Using Safari:

1. Open the GitHub Pages version.
2. Tap **Share**.
3. Select **Add to Home Screen**.
4. Confirm the app name.

---

## Current UI navigation

### Draw
Used for the main reading.

The user can:

- enter three numbers
- generate three random numbers
- reveal three cards
- reshuffle the deck

### Deck
Displays the current mapping of:

```text
1 → card
2 → card
3 → card
...
78 → card
```

This mapping changes completely after reshuffling.

### Settings
Currently contains:

- language selection
- PWA installation guidance
- offline export
- project information

---

## Randomisation
The project uses browser-side randomisation.

Where available, it uses:

```javascript
crypto.getRandomValues()
```

instead of relying only on:

```javascript
Math.random()
```

The shuffled deck is produced using a Fisher–Yates-style shuffle.

This project is for entertainment and front-end learning purposes and is not intended to provide cryptographically verifiable randomness.

---

## Rider–Waite–Smith artwork
The tarot imagery used by this project is based on the Rider–Waite–Smith tarot deck, illustrated by **Pamela Colman Smith** and originally published in 1909.

The card artwork is not my original artwork.

This repository is primarily a programming and UI learning project. Card-image sourcing and attribution should remain clearly separated from the code and interface work.

If the image source used by the project changes in the future, its attribution and licence information should also be updated here.

---

## Privacy
The project does not currently require:

- user accounts
- login
- database storage
- analytics
- personal profile information

The selected language is stored locally using `localStorage`.

The standard web version may request tarot card images from external image sources. The exported offline version embeds the images directly into the generated HTML file.

---

## Accessibility notes
Current accessibility work includes:

- responsive text and layouts
- touch-friendly controls
- visible button states
- semantic buttons and form inputs
- reduced-motion support for users who prefer less animation

Areas that can still be improved:

- full keyboard navigation testing
- more detailed ARIA labels
- better screen-reader descriptions for tarot artwork
- contrast testing
- focus-state consistency
- optional reduced-animation mode inside settings

---

## What I practised
This project has been useful for practising several front-end concepts.

### JavaScript
- arrays and objects
- application state
- randomisation
- Fisher–Yates-style shuffling
- DOM updates
- event listeners
- local storage
- asynchronous image downloading
- browser APIs
- conditional UI rendering

### CSS
- responsive layouts
- mobile-first adaptation
- Grid
- Flexbox
- CSS variables
- 3D transforms
- transitions
- glass-style panels
- fixed mobile navigation
- safe-area handling
- media queries

### Web platform
- PWA manifests
- service workers
- caching
- mobile installation
- browser storage
- offline-oriented design

### Git / GitHub
This project is also being used to practise:

- local Git repositories
- commits
- branches
- pushing to GitHub
- maintaining a README
- GitHub Pages deployment
- keeping a visible learning history through commits

---

## Development workflow
My current workflow is:

```text
VS Code
   ↓
Edit / test the project
   ↓
git status
   ↓
git add .
   ↓
git commit -m "Describe the update"
   ↓
git push
   ↓
GitHub repository / GitHub Pages
```

Example:

```bash
git add .
git commit -m "Add bilingual support and mobile PWA interface"
git push
```

---

## Roadmap
Possible future improvements:
- [ ] Add screenshots to this README
- [ ] Create a custom app icon
- [ ] Add more tarot spreads
- [ ] Add Past / Present / Future spread labels
- [ ] Add optional card interpretation text
- [ ] Save reading history locally
- [ ] Add a favourites system
- [ ] Add dark/light or theme options
- [ ] Improve accessibility
- [ ] Separate HTML, CSS and JavaScript into individual files
- [ ] Refactor card data into its own module
- [ ] Add automated tests for shuffle logic
- [ ] Add card-search / card-library view
- [ ] Improve offline caching
- [ ] Explore a real WeChat Mini Program version
- [ ] Explore packaging the PWA as a native mobile app

---
## Known limitations
- PWA installation depends on browser/platform support.
- Service workers require HTTP/HTTPS and do not fully work when the HTML file is opened directly through `file://`.
- Online card images depend on external image availability unless the offline version is generated.
- The project is currently a single-page front-end application with no backend.
- Tarot interpretations are intentionally lightweight at this stage.

---

## Project purpose
This repository is mainly a **learning record**.

The goal is not only to finish one tarot website, but to keep improving the same project while learning new front-end concepts.

Instead of replacing the project every time I learn something new, I want the Git history to show how the project develops over time:
basic HTML page
        ↓
random tarot logic
        ↓
card artwork
        ↓
3D interactions
        ↓
responsive interface
        ↓
bilingual UI
        ↓
mobile app-style navigation
        ↓
PWA / offline support
        ↓
future improvements

That progression is one of the main reasons I am keeping the project on GitHub.

---

## Disclaimer
This tarot application is intended for:
- entertainment
- personal reflection
- front-end programming practice

It should not be treated as professional medical, legal, financial, psychological or other expert advice.

---

## Author: Jonna(Qianxiu) Ge
Software Engineering student.
This is one of my personal projects for practising front-end development, Git/GitHub workflow, responsive design and browser APIs.

GitHub: https://github.com/JonnaHerman
Repository: https://github.com/JonnaHerman/Tarot-Card-Picker

