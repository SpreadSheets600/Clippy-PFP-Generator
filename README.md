# Clippy PFP Generator 🖼️📎

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/Demo-Live-blue)](https://Utkarsh-username.github.io/Clippy-PFP-Generator/)

Generate nostalgic, meme-ready Clippy profile pictures right in your browser by layering transparent PNG parts (backgrounds, body shapes, heads, eyes, mouths, hands, decorations). Everything renders client-side onto a 512×512 canvas—no server, no tracking beyond basic analytics, and no image uploads needed.

## ✨ About

This project is a lightweight static web app that lets you compose a custom "Clippy" style avatar. It grew out of the recent wave of people adopting paperclip-themed profile pictures. The goal: make remixing fast, intuitive, and privacy-respecting.

Key characteristics:

- **100% front-end**: Just open `index.html`
- **Layer ordering**: Fixed for consistency
- **Optional layers**: Each non-body layer is optional (create minimalist variants)
- **Export**: Produces a transparent PNG
- **Theme toggle**: Light/dark mode stored locally
- **Offline-ready**: Works offline after first load (static assets)

Not affiliated with Microsoft. All assets are fan-made for fun/parody purposes.

## 🚀 Features

- 🎲 **Randomize button** to quickly explore combinations
- 🔄 **Reset** to base template
- 💾 **Download** as PNG (timestamped filename)
- ⌨️ **Keyboard shortcuts**: `R` (randomize), `C` (clear)
- 📱 **Responsive layout** (canvas + controls adapt to viewport)
- ♿ **Accessible** focus styles and semantic labeling of parts

## 📖 Usage

1. Open the site (or double-click `index.html` locally).
2. Use the tabs to switch part categories.
3. Click thumbnails to select/deselect (for non-body categories, choose "None").
4. Press **Randomize** to explore.
5. Press **Download** to save the current composite PNG.

### Live Demo

Check out the [live demo](https://Utkarsh-username.github.io/Clippy-PFP-Generator/) to try it out!

## 📁 Project Structure

```text
assets/                # PNG layer folders
├── bg/               # Background tiles
├── body/             # Core required body layer
├── head/             # Head variants
├── eyes/             # Eye expressions
├── mouth/            # Mouth expressions
├── hand/             # Hand/gesture overlays
└── deco/             # Decorative overlays (sparkles, etc.)
generate-manifest.js   # Node script to build manifest.json list of PNGs
manifest.json          # Generated mapping { folder: [files...] }
index.html             # Single-page application (HTML + inline JS)
README.md              # This file
```

## 🛠️ Asset Manifest

At runtime, the app fetches `manifest.json` to know which PNG files exist per folder. If you add or remove PNGs, regenerate the manifest.

### Regenerating Manifest

Requires Node.js (>=14). From the project root:

```bash
node generate-manifest.js
```

This will overwrite `manifest.json` with a fresh list.

## ➕ Adding New Parts

1. Drop a new `.png` into the appropriate subfolder under `assets/`.
2. Run the manifest generation script.
3. Reload the page—new part appears automatically.

**Guidelines:**

- Use 512×512 or proportional transparent PNGs aligned to the same coordinate system so layers stack cleanly.
- Keep filenames simple: `eyes_12.png`, etc.
- Avoid spaces; use underscores.

## 🛠️ Development

No build step is required (Tailwind CDN). If you prefer a build pipeline later, you could extract the inline script and adopt a proper Tailwind config/purge.

### Potential Improvements (PRs Welcome!)

- 🌱 Seeded randomization for shareable combos
- 🔗 URL hash/state encoding for direct sharing
- 🎨 Color tint/variation sliders
- 🖱️ Drag-to-reorder experimental layers
- ⚙️ Service Worker for explicit offline caching
- 📊 Lightweight analytics opt-out toggle

## ♿ Accessibility

The interface uses buttons with `aria-label`s for thumbnails and maintains visible focus rings. Further enhancements planned:

- Add `aria-live` status updates when a layer changes
- Provide a text export of the current selection

## 🔒 Privacy

All compositing happens locally in the browser. Downloaded images never leave your machine. Only Google Analytics (if kept) tracks aggregate usage.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Issues

If you find bugs or have feature requests, please [open an issue](https://github.com/Utkarsh-username/Clippy-PFP-Generator/issues).

## ⚠️ Disclaimer

"Clippy" is an iconic assistant concept originally from Microsoft Office. This project is a fan-made, non-commercial homage.

## 🚀 Quick Start (TL;DR)

1. Clone or download: `git clone https://github.com/Utkarsh-username/Clippy-PFP-Generator.git`
2. (Optional) Run `node generate-manifest.js` if assets changed.
3. Open `index.html` in a modern browser.
4. Randomize, tweak, download.

Enjoy building your paperclip persona! ✨📎
