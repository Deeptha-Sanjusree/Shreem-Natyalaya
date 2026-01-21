# Shreem Natyalaya - Project Summary

## Overview
A professional classical arts academy website built with Angular 21, Tailwind CSS v4, and Server-Side Rendering (SSR).

## Tech Stack
- **Angular**: v21.0.0 (Standalone components)
- **Tailwind CSS**: v4 (next) with @tailwindcss/postcss
- **SSR**: @angular/ssr with @angular/platform-server
- **TypeScript**: v5.9.2
- **Node.js**: Express server for SSR

## Features Implemented

### 1. Pages
- **Home** (`/`) - Hero section, intro, courses highlight, CTA
- **About Guru** (`/about-guru`) - Founder story, teaching philosophy
- **Guru Parampara** (`/guru-parampara`) - Classical lineage explanation
- **Courses** (`/courses`) - Bharatanatyam, Veena, Slokam, Keyboard
- **Contact** (`/contact`) - Contact form (UI only), WhatsApp CTA

### 2. Components
- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Site links, contact info, copyright

### 3. Design
- **Color Palette**:
  - Maroon (#6f2626 to #fdf4f4) - Primary accent
  - Gold (#422006 to #fefce8) - Secondary accent
  - Cream (#383128 to #fdfcfa) - Base background
- **Typography**:
  - Serif: Lora (headings)
  - Sans: Inter (body text)
- **Style**: Classical Indian elegance, calm, premium feel

### 4. SEO & SSR
- Server-side rendering enabled
- Client hydration configured
- Meta tags per route (title, description)
- Semantic HTML structure
- Open Graph and Twitter cards in index.html

### 5. Routing
- Lazy-loaded route components
- Wildcard route redirects to home
- SSR-safe navigation

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   └── footer/
│   ├── pages/
│   │   ├── home/
│   │   ├── about-guru/
│   │   ├── guru-parampara/
│   │   ├── courses/
│   │   └── contact/
│   ├── app.ts
│   ├── app.html
│   ├── app.config.ts
│   ├── app.config.server.ts
│   └── app.routes.ts
├── main.ts
├── main.server.ts
├── index.html
└── styles.css
server.ts
angular.json
package.json
postcss.config.js
tsconfig.json
tsconfig.app.json
tsconfig.server.json
```

## Scripts
```bash
npm start          # Development server
npm run build      # Production build with SSR
npm run serve:ssr  # Serve SSR build
```

## Development Server
The app runs on `http://localhost:4200` (or dynamic port) with:
- Hot module replacement
- SSR in development mode
- Tailwind CSS JIT compilation

## Build Output
- **Browser bundle**: `dist/shreem-natyalaya/browser/`
- **Server bundle**: `dist/shreem-natyalaya/server/`
- Optimized for production with code splitting

## Key Configuration

### Angular SSR
- Entry point: `server.ts`
- Uses `AngularNodeAppEngine` from `@angular/ssr/node`
- Express middleware for static files and SSR

### Tailwind CSS v4
- PostCSS plugin: `@tailwindcss/postcss`
- Custom theme defined in `styles.css` using `@theme` directive
- No separate config file needed

### TypeScript
- Strict mode enabled
- Separate configs for app and server
- ES2022 target

## Notes
- No backend integration (contact form is UI only)
- No social media links (as requested)
- No copied assets or layouts
- Prerendering disabled (can be enabled for static routes)
- All components use modern Angular syntax (@if, @for, signals)

## Future Enhancements
- Enable prerendering for static routes
- Add backend API for contact form
- Implement analytics
- Add image optimization
- Create sitemap.xml
- Add structured data for SEO
