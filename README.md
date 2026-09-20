# 🚀 Zakaria Merabet Ayache — Developer Portfolio

<div align="center">

  <p align="center">
    <strong>Modern, high-performance personal portfolio and product showcase built with React 19, TypeScript, and Vite.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.3-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/i18n-EN%20%7C%20AR%20(RTL)-brightgreen?style=for-the-badge" alt="Internationalization" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
  </p>

  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-pages-overview">Pages</a> •
    <a href="#-contact--socials">Contact</a>
  </p>
</div>

---

## 📌 Overview

This repository contains the source code for the personal portfolio of **Zakaria Merabet Ayache** — Full-Stack Developer specializing in **React**, **TypeScript**, and **Laravel**. 

It showcases services, custom web applications, enterprise management systems, case studies, and digital products with a sleek dark-mode aesthetic, interactive galleries, and full bilingual support (English & Arabic with dynamic RTL adaptation).

---

## ✨ Features

- 🌐 **Bilingual Support (English & Arabic)**
  - Seamless toggle between English (LTR) and Arabic (RTL).
  - Instant layout mirroring and localized font typography.
- 🎨 **Modern Dark Glassmorphism UI**
  - Crafted with tailored CSS tokens, subtle gradients, and glassmorphic card designs.
  - Fully responsive across mobile, tablet, and desktop screens.
- ⚡ **Smooth Animations & Micro-interactions**
  - Powered by `framer-motion` for fluid scroll reveals, fade-ups, and interactive hover states.
- 🖼️ **Interactive Project Showcase & Lightbox**
  - Project case studies with detailed metrics, problem-solution breakdowns, and full-screen image gallery powered by `yet-another-react-lightbox`.
- 📬 **Interactive Contact System**
  - Multi-channel contact points (WhatsApp, Phone, Email).
  - Contact form with client-side field validation and error handling.
- 📄 **Integrated Resume / CV Access**
  - Direct download links for up-to-date ATS-friendly CV in PDF format.

---

## 🛠️ Tech Stack

### **Core & Framework**
- **[React 19](https://react.dev/)** — Modern component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Strict type safety and maintainability
- **[Vite](https://vitejs.dev/)** — Next-generation frontend build tooling & ultra-fast HMR

### **Routing & State**
- **[React Router DOM v7](https://reactrouter.com/)** — Declarative client-side routing with automatic scroll-to-top
- **Custom Language Context** — Lightweight centralized internationalization state

### **Styling & UI Components**
- **Modular Vanilla CSS** — High-performance custom styling without heavy utility overhead
- **[Lucide React](https://lucide.dev/)** — Clean, modern SVG iconography
- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready animations
- **[Yet Another React Lightbox](https://yet-another-react-lightbox.com/)** — Responsive image modal & gallery viewer

---

## 📂 Project Structure

```text
portfolio-ts/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── img/                  # Project screenshots and portfolio assets
├── src/
│   ├── assets/               # Static assets & CV files
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx        # Navigation header with language switcher
│   │   ├── Navbar.css
│   │   ├── Footer.tsx        # Global footer with social links
│   │   └── Footer.css
│   ├── context/
│   │   └── LanguageContext.tsx # i18n Context provider (EN / AR)
│   ├── local/                # Translation dictionaries & content data
│   │   ├── en.tsx            # English text & project details
│   │   ├── ar.tsx            # Arabic text & RTL content
│   │   └── translation.ts    # Locale type definitions
│   ├── pages/                # Main application views
│   │   ├── Home.tsx          # Landing page, value proposition & stats
│   │   ├── Services.tsx      # Web development & consulting services
│   │   ├── Products.tsx      # Featured SaaS & on-demand apps
│   │   ├── Workt.tsx         # Portfolio case studies & live projects
│   │   ├── About.tsx         # Bio, technical skills & background
│   │   └── Contact.tsx       # Contact form & communication channels
│   ├── app.tsx               # App layout & route definitions
│   ├── index.css             # Global styles, CSS variables & typography
│   └── main.tsx              # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### **Prerequisites**
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** / **pnpm**

### **1. Clone the repository**
```bash
git clone https://github.com/zakaria-merabet/portfolio.git
cd portfolio-ts
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Start development server**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### **4. Build for production**
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### **5. Preview production build**
```bash
npm run preview
```

---

## 📖 Pages Overview

| Page | Description |
| :--- | :--- |
| **Home (`/`)** | Hero introduction, trust metrics, highlighted services, product teaser, and quick CTA. |
| **Services (`/services`)** | In-depth breakdown of development services (Business Websites, Web Apps, Management Systems). |
| **Products (`/products`)** | Showcases ready-to-deploy platforms (e.g. On-demand Registration App). |
| **Work (`/work`)** | Case studies with problem/solution descriptions, tech stacks, metrics, and image previews. |
| **About (`/about`)** | Personal background, technical philosophy, and categorized skillset. |
| **Contact (`/contact`)** | Multiple contact channels (WhatsApp, Phone, Email) and an interactive contact form. |

---

## 📬 Contact & Socials

**Zakaria Merabet Ayache** — Full-Stack Developer

- 💼 **LinkedIn:** [@zakaria-merabet-ayache](https://www.linkedin.com/in/zakaria-merabet-ayache/)
- 🐙 **GitHub:** [@zakaria-merabet](https://github.com/zakaria-merabet)
- ✉️ **Email:** [zakariamerabetayache@gmail.com](mailto:zakariamerabetayache@gmail.com)
- 📱 **WhatsApp:** [+213 666 928 006](https://wa.me/213666928006)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
