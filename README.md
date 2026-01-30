# ProDev Consulting Limited Website

A production-ready, visually premium website for ProDev Consulting Limited—a Nigeria-based consulting firm providing professional services for development programs across public and private sectors.

## Overview

This website is built with **Next.js (App Router) + TypeScript + TailwindCSS + Framer Motion** to deliver excellent performance, accessibility, SEO, and conversion-focused design.

### Key Features

- **Fortune 500-grade design**: Clean, modern, credible, and trust-heavy aesthetic
- **Comprehensive Information Architecture**: Home, Services, Sectors, Case Studies, Insights, About, Contact
- **Interactive Elements**: Sticky header, smooth animations, filtering systems, accordion FAQs
- **SEO-Optimized**: Meta tags, Open Graph, JSON-LD schema, sitemap.xml, robots.txt
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- **Forms**: Proposal intake form with validation, honeypot spam protection

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Tailwind
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Output**: Static export for hosting

## Project Structure

```
prodev-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles
│   ├── services/          # Services hub + detail pages
│   ├── sectors/           # Sectors hub + detail pages
│   ├── case-studies/      # Case studies hub + detail pages
│   ├── insights/          # Blog/insights hub + detail pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with proposal form
│   └── policies/          # Privacy, Terms, Cookies, Compliance
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ServiceDetailTemplate.tsx
│   ├── SectorDetailTemplate.tsx
│   ├── CaseStudyTemplate.tsx
│   └── InsightTemplate.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── content/               # Content files (for future CMS)
├── public/               # Static assets
│   ├── images/           # Image assets
│   ├── sitemap.xml       # SEO sitemap
│   └── robots.txt        # SEO robots
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd prodev-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `dist/` directory ready for deployment.

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed with a preview URL

### Other Static Hosts

The `dist/` folder contains the static export and can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages

## Editing Content

### Services

Service content is located in:
- `app/services/page.tsx` - Services hub listing
- `app/services/[service-name]/page.tsx` - Individual service pages

### Sectors

Sector content is located in:
- `app/sectors/page.tsx` - Sectors hub listing
- `app/sectors/[sector-name]/page.tsx` - Individual sector pages

### Case Studies

Case studies are defined in:
- `app/case-studies/page.tsx` - Case studies hub with filtering
- `app/case-studies/[case-study-name]/page.tsx` - Individual case study pages

### Insights/Blog

Blog posts are defined in:
- `app/insights/page.tsx` - Insights hub with search/filter
- `app/insights/[article-slug]/page.tsx` - Individual article pages

## Brand Guidelines

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary-600` | `#0284c7` | Primary buttons, links |
| `primary-700` | `#0369a1` | Hover states |
| `primary-50` | `#f0f9ff` | Light backgrounds |
| `neutral-900` | `#171717` | Primary text |
| `neutral-600` | `#525252` | Secondary text |
| `neutral-50` | `#fafafa` | Backgrounds |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Semibold, tight letter-spacing
- **Body**: Regular, comfortable line-height

### Spacing

- Section padding: `py-16` to `py-24` (responsive)
- Container max-width: `max-w-7xl` (1280px)
- Card padding: `p-6` to `p-8`

## SEO Configuration

### Meta Tags

Site-wide metadata is configured in `app/layout.tsx`. Page-specific metadata is set in each page's `metadata` export.

### Sitemap

Update `public/sitemap.xml` when adding new pages. The current sitemap includes all main pages with appropriate priorities.

### Analytics

Add your Google Analytics or other tracking code to the layout or create a separate component for tracking.

## Forms

### Proposal Form

The proposal form includes:
- Organization and contact information
- Project type and sector selection
- Timeline and budget range
- File upload placeholder (requires backend integration)
- Honeypot spam protection
- Client-side validation

To enable form submission:
1. Add a server action or API route
2. Connect to email service (SendGrid, Resend, etc.) or database
3. Update the `handleSubmit` function in `app/contact/page.tsx`

## Performance Optimization

- Images: Use Next.js Image component (configured for static export)
- Fonts: Self-host or use `next/font` for optimization
- Animations: Use `will-change` and `transform` for GPU acceleration
- Lazy loading: Implemented via Intersection Observer in Framer Motion

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast compliant with WCAG 2.1 AA

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

© 2024 ProDev Consulting Limited. All rights reserved.

## Support

For technical support or questions about this website, contact:
- Email: info@prodevconsulting.ng

---

**Note**: This website uses placeholder content for sample data. Replace with actual client information, case studies, team bios, and metrics before production deployment.
