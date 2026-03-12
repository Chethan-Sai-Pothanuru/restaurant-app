# 🍽️ La Maison — Fine Dining Restaurant App

> A fully responsive, elegant restaurant website built with pure HTML, CSS, and JavaScript. No frameworks. No installs. Just open and run.

---

## ✨ Live Demo

🌐 **[View Live Site](https://yourusername.github.io/restaurant-app)**
> *(Replace `yourusername` with your actual GitHub username after deploying)*

---

## 📸 Preview

| Section | Description |
|---|---|
| 🏠 Hero | Full-screen cinematic landing with animated zoom |
| 👨‍🍳 About | Chef story, awards, and restaurant stats |
| 🍴 Menu | Interactive tabs — Starters, Mains, Desserts, Drinks |
| 🖼️ Gallery | Photo grid with hover effects |
| 📅 Reservations | Booking form with date validation & success state |
| 📍 Contact | Location, hours, and contact info |

---

## 🗂️ Project Structure

```
restaurant-app/
├── index.html       → Main page (structure & content)
├── style.css        → All styling, animations & responsive design
├── app.js           → Menu tabs, form handling, scroll effects
└── README.md        → This file
```

---

## 🚀 How to Run Locally

### Option 1 — Open Directly in Browser
1. Download or clone this repository
2. Open the `index.html` file in any web browser
3. The app runs instantly — no server needed!

### Option 2 — Use VS Code Live Server *(Recommended)*
1. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension *(by Ritwick Dey)*
3. Click **"Go Live"** in the bottom-right corner
4. Your browser opens at `http://127.0.0.1:5500` with live reload

---

## 🌐 How to Deploy (GitHub Pages — Free)

1. Push all files to a GitHub repository
2. Go to **Settings → Pages**
3. Set **Branch** to `main` → Click **Save**
4. Your site goes live at:
   ```
   https://yourusername.github.io/restaurant-app
   ```

---

## 📋 Features

- ✅ **Fully Responsive** — works on mobile, tablet, and desktop
- ✅ **Sticky Navbar** — transforms on scroll, hamburger menu on mobile
- ✅ **Animated Hero** — cinematic zoom effect on page load
- ✅ **Interactive Menu** — 4 tab categories with 16 dishes
- ✅ **Reservation Form** — with date validation and confirmation state
- ✅ **Scroll Animations** — elements fade in as you scroll
- ✅ **Photo Gallery** — masonry-style grid with hover zoom
- ✅ **Zero Dependencies** — no npm, no frameworks, no build tools
- ✅ **Google Fonts** — Cormorant Garamond + Jost typography

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Dark | `#1A1410` | Backgrounds, text |
| Cream | `#F5F0E8` | Page background |
| Gold | `#C9A96E` | Accents, highlights |
| Muted | `#6B5E4E` | Secondary text |

**Fonts:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (display) + [Jost](https://fonts.google.com/specimen/Jost) (body)

---

## 🛠️ Customisation Guide

### Change the Restaurant Name
Open `index.html` and find:
```html
<div class="nav-logo">La Maison</div>
```
Replace `La Maison` with your restaurant name.

### Change Menu Items
Open `app.js` and find the `menuData` object. Each item looks like this:
```javascript
{
  name: "Foie Gras Torchon",
  desc: "Duck liver with brioche, Sauternes jelly and micro herbs.",
  price: "$34",
  tag: "Chef's Selection",
  isNew: false,
  img: "https://your-image-url.com/photo.jpg"
}
```
Edit the values to match your actual menu.

### Change Colours
Open `style.css` and find the `:root` block at the top:
```css
:root {
  --cream:   #F5F0E8;
  --dark:    #1A1410;
  --gold:    #C9A96E;
  --muted:   #6B5E4E;
}
```
Replace the hex colour codes with your brand colours.

### Change Opening Hours
Open `index.html` and search for `6:00 PM – 10:00 PM`. Update the times in both the **Reservations** section and the **Contact** section.

---

## 📱 Browser Support

| Browser | Supported |
|---|---|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |
| Internet Explorer | ❌ |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 About

Built with ♡ as a fine dining restaurant showcase.  
Designed for elegance, simplicity, and ease of customisation.

---

*⭐ If you found this useful, consider giving it a star on GitHub!*
