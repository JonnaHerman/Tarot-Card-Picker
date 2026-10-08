# Tarot Card Picker

A small front-end project I built as a personal learning project while practising HTML, CSS and JavaScript.

The idea is simple: the website shuffles a full 78-card tarot deck, and the user chooses three numbers from 1–78. Each number represents a position in the shuffled deck, so the same number can give a different card after every reshuffle.

## Features

- Full 78-card tarot deck
- Random deck shuffling
- Three-number card selection
- Random upright / reversed orientation
- 3D card flip animation
- Rider–Waite–Smith card artwork
- Responsive dark-themed interface
- Option to generate an offline version with the card images embedded

## How it works

Each time the page is refreshed or the **Reshuffle** button is clicked:

1. All 78 cards are shuffled into a new random order.
2. Upright / reversed orientation is randomly assigned.
3. Numbers 1–78 represent positions in that new deck.
4. The user enters three numbers and reveals the corresponding cards.

This means the number itself is not permanently linked to a specific tarot card.

## What I practised

This project helped me practise:

- HTML page structure
- CSS layout and responsive design
- CSS 3D transforms and animations
- JavaScript arrays and objects
- Randomisation and shuffling logic
- DOM manipulation
- Event listeners
- Working with external image assets
- Building a small interactive web application without a framework

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript

No front-end framework is used.

## Project Structure

```text
Tarot-Card-Picker/
└── index.html
```

The project is currently kept as a single-file web app so it is easy to open, test and modify while I am learning.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/JonnaHerman/Tarot-Card-Picker.git
```

Then open:

```text
index.html
```

in a web browser.

You can also use VS Code with the **Live Server** extension if you prefer.

## Tarot Artwork

This project uses Rider–Waite–Smith tarot imagery originally illustrated by **Pamela Colman Smith** for the Rider–Waite tarot deck.

The tarot artwork is not my original artwork. It is included/referenced here as part of a personal educational front-end project.

## Current Status

This is an ongoing learning project. I plan to keep improving the UI, interaction and code structure as I learn more front-end development.

## Possible Future Improvements

- Separate HTML, CSS and JavaScript into individual files
- Add different tarot spreads
- Add card interpretation text
- Improve accessibility
- Add local storage for reading history
- Refactor the code into reusable components
- Add automated tests for the shuffle and card-selection logic

## Author

**Jonna**

Software Engineering student learning front-end development through small personal projects.
