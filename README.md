# ProDev Consulting

A modern, responsive website for ProDev Consulting - a development consulting firm providing professional services for development programs across Nigeria and Africa.

![ProDev Consulting](https://img.shields.io/badge/Built%20with-Next.js%2014-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-cyan?style=flat&logo=tailwindcss)

## 🌐 Live Website

**Coming Soon** - Deployed on Vercel/Netlify

## 📋 Overview

ProDev Consulting offers expertise in:
- **Program Design & Technical Advisory** - Strategic planning and evidence-based advisory
- **Project Management Support** - Implementation oversight and resource optimization  
- **MEL/MERL Services** - Monitoring, evaluation, and learning systems
- **Digital Transformation** - Technology solutions for development programs
- **Capacity Building & Training** - Skills development and institutional strengthening

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/JumareKenz/prodev.git
cd prodev

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
# Create production build
npm run build

# The output will be in the `dist` folder
```

## 📁 Project Structure

```
app/
├── page.tsx                    # Home page
├── about/page.tsx              # About us
├── contact/page.tsx            # Contact form
├── services/                   # Services hub + detail pages
│   ├── page.tsx
│   ├── program-design/
│   ├── project-management/
│   ├── monitoring-evaluation/
│   ├── digital-transformation/
│   └── capacity-building/
├── sectors/                    # Sectors hub + detail pages
│   ├── page.tsx
│   ├── health/
│   ├── education/
│   ├── governance/
│   ├── climate/
│   └── livelihoods/
├── case-studies/               # Case studies hub + detail pages
│   ├── page.tsx
│   ├── health-systems-initiative/
│   ├── education-workforce/
│   └── climate-resilience/
├── insights/                   # Insights/blog hub + articles
│   ├── page.tsx
│   └── [6 article pages]/
└── policies/                   # Legal pages
    ├── privacy/
    ├── terms/
    ├── cookies/
    └── compliance/

components/
├── ui/                         # shadcn/ui components
├── ServiceDetailTemplate.tsx   # Service page template
├── SectorDetailTemplate.tsx    # Sector page template
├── CaseStudyTemplate.tsx       # Case study template
├── InsightTemplate.tsx         # Article template
└── [layout components]/

content/                        # Content data
├── case-studies/
├── insights/
└── [markdown content]/

public/                         # Static assets
```

## 🎨 Design System

### Colors
- **Primary:** Electric Blue (#2563EB) to Cyan gradient
- **Secondary:** Violet (#7C3AED) to Purple
- **Accent:** Teal (#14B8A6) to Emerald
- **Neutral:** Slate gray scale

### Typography
- **Display:** Bold, modern sans-serif
- **Body:** Clean, readable sans-serif
- **Accent:** Gradient text effects

### Features
- ✨ Glassmorphism cards with backdrop blur
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- 🌙 Dark sections with vibrant gradients
- ♿ Accessible components

## 📝 Content Management

### Case Studies
Add new case studies by creating a folder in `app/case-studies/[slug]/page.tsx` using the `CaseStudyTemplate` component.

### Insights/Articles
Add new articles by creating a folder in `app/insights/[slug]/page.tsx` using the `InsightTemplate` component.

### Services & Sectors
Extend services or sectors by:
1. Adding the page in `app/services/[slug]/page.tsx` or `app/sectors/[slug]/page.tsx`
2. Using the respective template component
3. Adding the entry to the hub page data array

## 🚀 Deployment

### Static Export
This project is configured for static export:

```js
// next.config.mjs
const nextConfig = {
  output: 'export',
  distDir: 'dist',
}
```

Deploy the `dist` folder to:
- **Vercel:** `vercel --prod`
- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Push `dist` to `gh-pages` branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

Proprietary - © 2025 ProDev Consulting. All rights reserved.

## 📞 Contact

**ProDev Consulting**  
📍 Abuja, Nigeria  
📧 info@prodevconsulting.ng  
🌐 www.prodevconsulting.ng

---

Built with ❤️ by [Jumare Kenz](https://github.com/JumareKenz)
