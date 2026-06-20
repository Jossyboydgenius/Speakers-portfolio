# Helena Amoah - Professional Speakers Portfolio

A high-end, premium portfolio website designed for **Helena Amoah**, a Communications Specialist, SDG Ambassador, and Youth Advocate. Built in 2026, the website represents state-of-the-art web design aesthetics, incorporating elegant typography, glassmorphism panel styles, and smooth scroll animations.

---

## 🎨 Design System & Aesthetics

1. **Elegant Typography**:
   - **Headings**: Styled in **Georgia** (Serif) with editorial italic flourishes for names and section headers.
   - **UI & Body Text**: Styled in **Outfit** (Sans-Serif) for a geometric, modern, and highly legible layout.
2. **Glassmorphism Theme**:
   - Deep premium dark background (`#090A0C`).
   - Cards, timeline panels, and headers use semi-transparent backdrops (`bg-white/[0.01]`) wrapped in ultra-thin borders (`border border-white/5`), removing outdated neumorphic shadows.
   - Accents highlighted in soft gold/bronze (`#be8c6c`).
3. **Subtle Radial Glows**:
   - Includes custom blurred backdrops behind key media assets to add depth.

---

## ✨ Features & Animations

- **Scroll Progress Indicator**: A sleek gold-accented progress bar tracking reading position at the top of the screen.
- **Scroll Reveal animations (Framer Motion)**: All grid cards, timeline rows, and headings slide up and fade in dynamically as they enter the viewport.
- **Micro-interactions**: Subtle zoom and shadow offsets on hover for Features and Projects cards.
- **Dynamic Typewriter**: Hero heading features an elegant typewriter effect showcasing key professional roles (MC, SDG Ambassador, Podcaster, etc.).
- **Interactive Resume Selector**: Sleek pill-shaped tabs to filter by Education, Experience, Achievements, and Volunteering.
- **Mobile Navigation Drawer**: Smooth slide-in glass drawer utilizing Framer Motion's `AnimatePresence`.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://reactjs.org/) (initialized with `create-react-app`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Slider**: [React Slick](https://react-slick.neostack.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Running the Project Locally

### 1. Installation
Clone the repository, navigate into the directory, and install dependencies:
```bash
npm install
```

### 2. Run Development Server
Run the local dev server (accessible at `http://localhost:3000`):
```bash
npm run dev
# or
npm start
```

### 3. Production Build
Compile and bundle optimized static assets in the `build/` folder:
```bash
npm run build
```

---

## 📁 File Structure

```text
├── public/                 # Static assets and index.html template
├── src/
│   ├── assets/             # Images, logos, and indexes
│   ├── components/         # Reusable layouts and pages
│   │   ├── banner/         # Banner components (LeftBanner, RightBanner)
│   │   ├── contact/        # Contact components (Contact, ContactLeft)
│   │   ├── features/       # Features grid components (Card, Features)
│   │   ├── footer/         # Footer components (Footer, FooterBottom)
│   │   ├── layouts/        # Layout elements (Title)
│   │   ├── navbar/         # Navigation components (Navbar)
│   │   ├── projects/       # Projects components (Projects, ProjectsCard)
│   │   ├── resume/         # Timeline pages (Education, Experience, Achievement, Volunteering)
│   │   └── testimonial/    # Slide carousel component (Testimonial)
│   ├── constants/          # Configuration values
│   ├── index.css           # Tailwind custom overrides & base layers
│   └── App.js              # Application entry point
├── package.json            # Scripts & dependencies
└── tailwind.config.js      # Custom theme setup
```
