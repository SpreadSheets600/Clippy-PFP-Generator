# Clippy PFP Generator

Generate a nostalgic, meme-ready Clippy profile picture right in your browser by layering transparent PNG parts (backgrounds, body shapes, heads, eyes, mouths, hands, decorations). Everything renders client‑side onto a 512×512 canvas—no server, no tracking beyond basic analytics, and no image uploads needed.

## About

This project is a lightweight static web app that lets you compose a custom "Clippy" style avatar. It grew out of the recent wave of people adopting paperclip-themed profile pictures. The goal: make remixing fast, intuitive, and privacy‑respecting.

Key characteristics:

- 100% front-end (just open `index.html`)
- Layer ordering is fixed for consistency
- Each non-body layer is optional (you can create minimalist variants)
- Export produces a transparent PNG
- Theme toggle (light/dark) stored locally
- Fully works offline after first load (assets are static)

Not affiliated with Microsoft. All assets are fan-made for fun / parody purposes.

## Features

- Randomize button to quickly explore combinations
- Reset to base template
- Download as PNG (timestamped filename)
- Keyboard shortcuts: R (randomize), C (clear)
- Responsive layout (canvas + controls adapt to viewport)
- Accessible focus styles and semantic labeling of parts

## Live Usage

1. Open the site (or just double‑click `index.html` locally).
2. Use the tabs to switch part categories.
3. Click thumbnails to select / deselect (for non-body categories you can choose "None").
4. Press Randomize to explore.
5. Press Download to save the current composite PNG.

## Project Structure

```text
assets/                # PNG layer folders
 bg/                  # Background tiles
 body/                # Core required body layer
 head/                # Head variants
 eyes/                # Eye expressions
 mouth/               # Mouth expressions
 hand/                # Hand / gesture overlays
 deco/                # Decorative overlays (sparkles, etc.)
generate-manifest.js   # Node script to build manifest.json list of PNGs
manifest.json          # Generated mapping { folder: [files...] }
index.html             # Single-page application (HTML + inline JS)
```

## Asset Manifest

At runtime the app fetches `manifest.json` to know which PNG files exist per folder. If you add or remove PNGs, regenerate the manifest.

### Regenerate Manifest

Requires Node.js (>=14). From the project root:

```bash
node generate-manifest.js
```

This will overwrite `manifest.json` with a fresh list.

## Adding New Parts

1. Drop a new `.png` into the appropriate subfolder under `assets/`.
2. Run the manifest generation script.
3. Reload the page—new part appears automatically.

Guidelines:

- Use 512×512 or proportional transparent PNGs aligned to the same coordinate system so layers stack cleanly.
- Keep filenames simple: `eyes_12.png`, etc.
- Avoid spaces; use underscores.

## Development Notes

No build step is required (Tailwind CDN). If you prefer a build pipeline later, you could extract the inline script and adopt a proper Tailwind config / purge.

Potential future improvements (PRs welcome if repo is public later):

- Seeded randomization for shareable combos
- URL hash/state encoding for direct sharing
- Color tint / variation sliders
- Drag-to-reorder experimental layers
- Service Worker for explicit offline caching
- Lightweight analytics opt-out toggle

## Accessibility

The interface uses buttons with `aria-label`s for thumbnails and maintains visible focus rings. Further enhancements planned:

- Add `aria-live` status updates when a layer changes
- Provide a text export of the current selection

## Privacy

All compositing happens locally in the browser. Downloaded images never leave your machine. Only Google Analytics (if kept) tracks aggregate usage.

## License

Specify your chosen license here (e.g., MIT) and any attribution requirements for assets.

```
MIT License (example)
Copyright (c) YEAR YOUR NAME
```

Replace with actual terms before publishing.

## Disclaimer

"Clippy" is an iconic assistant concept originally from Microsoft Office. This project is a fan-made, non-commercial homage.

## Quick Start (TL;DR)

1. Clone or download.
2. (Optional) Run `node generate-manifest.js` if assets changed.
3. Open `index.html` in a modern browser.
4. Randomize, tweak, download.

Enjoy building your paperclip persona! ✨
