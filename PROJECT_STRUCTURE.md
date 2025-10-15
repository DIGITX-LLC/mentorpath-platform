# MentorPath.ai - Project Structure

This document outlines the complete structure of the MentorPath.ai Bangladesh platform.

## Directory Structure

```
mentorpath-platform/
├── app/                         # Next.js App Router directory
│   ├── bd/                      # Bangladesh platform routes
│   │   ├── components/          # Shared components for BD platform
│   │   │   └── FaqSection.tsx   # FAQ accordion component
│   │   ├── code-of-conduct/     # Code of Conduct page
│   │   │   └── page.tsx
│   │   ├── content/             # Knowledge Hub / Content section
│   │   │   ├── [slug]/          # Dynamic content detail pages
│   │   │   │   └── page.tsx     # Individual content/resource page
│   │   │   └── page.tsx         # Content listing page
│   │   ├── dashboard/           # User Dashboard
│   │   │   └── page.tsx         # Dashboard with saved content & events
│   │   ├── events/              # Events section
│   │   │   ├── [slug]/          # Dynamic event detail pages
│   │   │   │   └── page.tsx     # Individual event page
│   │   │   └── page.tsx         # Events listing page
│   │   ├── privacy/             # Privacy Policy page
│   │   │   └── page.tsx
│   │   ├── terms/               # Terms of Service page
│   │   │   └── page.tsx
│   │   ├── layout.tsx           # BD platform layout (sidebar nav, header)
│   │   └── page.tsx             # BD homepage (landing page)
│   ├── globals.css              # Global CSS styles
│   ├── layout.tsx               # Root layout (font config, metadata)
│   └── page.tsx                 # Root redirect page (→ /bd)
├── public/                      # Static assets
│   └── assets/                  # Images and SVG files
│       ├── MentorPathLogo.svg   # Main logo
│       └── profile-avatar.svg   # Default profile avatar
├── .gitignore                   # Git ignore rules
├── next.config.ts               # Next.js configuration
├── next-env.d.ts                # Next.js TypeScript declarations
├── package.json                 # NPM dependencies and scripts
├── package-lock.json            # NPM lock file
├── postcss.config.mjs           # PostCSS configuration
├── PROJECT_STRUCTURE.md         # This file
├── README.md                    # Project documentation
└── tsconfig.json                # TypeScript configuration
```

## Key Files Explained

### Root Level

- **`app/layout.tsx`**: Root layout that sets up fonts (Noto Sans Bengali), metadata, and wraps the entire application
- **`app/page.tsx`**: Root homepage that automatically redirects users to `/bd`
- **`app/globals.css`**: Global Tailwind CSS styles and custom CSS variables

### BD Platform (`app/bd/`)

- **`layout.tsx`**: Main layout for the Bangladesh platform including:
  - Fixed left sidebar navigation
  - Fixed top header with search bar
  - Language switcher (English/Bengali)
  - Sign In button
  - Responsive mobile menu

- **`page.tsx`**: Homepage featuring:
  - Hero section
  - Value propositions
  - Featured events (gradient cards)
  - Featured content (gradient cards)
  - About section
  - FAQ section
  - Footer

### Events (`app/bd/events/`)

- **`page.tsx`**: Events listing with:
  - Filter buttons (All, Upcoming, Past)
  - Gradient event cards
  - Event metadata (date, time, host, category)
  
- **`[slug]/page.tsx`**: Individual event detail page with:
  - Full event information
  - Registration functionality
  - Related events

### Content (`app/bd/content/`)

- **`page.tsx`**: Content library with:
  - Type filters (All, Videos, Resources, Tutorials)
  - Sort options
  - Gradient content cards
  
- **`[slug]/page.tsx`**: Individual content page with:
  - Full content/article view
  - Markdown rendering
  - Related content recommendations

### Dashboard (`app/bd/dashboard/`)

- **`page.tsx`**: User dashboard showing:
  - Registered events
  - Saved content
  - Quick actions

### Legal Pages

- **`code-of-conduct/page.tsx`**: Community guidelines
- **`privacy/page.tsx`**: Privacy policy
- **`terms/page.tsx`**: Terms of service

### Components (`app/bd/components/`)

- **`FaqSection.tsx`**: Reusable FAQ accordion component with:
  - Expandable/collapsible questions
  - Smooth animations using Framer Motion
  - MentorPath.ai-specific FAQs

## Styling System

### Color Palette

```css
/* Background Colors */
--bg-dark: #030205
--bg-secondary: #0a0a0a

/* Text Colors */
--text-white: white
--text-gray: rgb(209, 213, 219)
--text-dark-gray: rgb(156, 163, 175)

/* Accent Colors (Gradients) */
/* Purple gradient: #2D1B69 → #4A1E5C → #6B1F47 */
/* Blue gradient: #064E5C → #1E3A8A */
/* Purple-red gradient: #4C1D95 → #7F1D53 */

/* Border Colors */
--border-light: rgba(255, 255, 255, 0.1)
--border-medium: rgba(255, 255, 255, 0.2)
--border-strong: rgba(255, 255, 255, 0.3)
```

### Typography

- **Primary Font**: System fonts (sans-serif)
- **Bengali Font**: Noto Sans Bengali (loaded from Google Fonts)
- **Font Weights**: 400, 500, 600, 700

## Routing

### Static Routes

- `/` - Root (redirects to `/bd`)
- `/bd` - Bangladesh homepage
- `/bd/events` - Events listing
- `/bd/content` - Content library
- `/bd/dashboard` - User dashboard
- `/bd/terms` - Terms of Service
- `/bd/privacy` - Privacy Policy
- `/bd/code-of-conduct` - Code of Conduct

### Dynamic Routes

- `/bd/events/[slug]` - Individual event pages
- `/bd/content/[slug]` - Individual content pages

## Language Support

The platform supports bilingual content:
- **English** (default)
- **Bengali/Bangla** (বাংলা)

Language switching is managed via React Context (`LanguageContext`) in `app/bd/layout.tsx`.

## Responsive Breakpoints

Following Tailwind CSS defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Data Management

Currently, the platform uses static data arrays within components. Future implementations may integrate with:
- CMS (Contentful, Sanity, etc.)
- Database (PostgreSQL, MongoDB)
- API endpoints

## External Links

- Registration: `https://mentorpath.ai/register`
- Login: `https://mentorpath.ai/login`
- Contact Email: `academy@mentorpath.ai`

## Development

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Future Enhancements

Potential areas for expansion:
- User authentication system
- Real-time event registration
- Content management system integration
- Community forums and discussions
- Certification system
- More language support (Hindi, Urdu, etc.)
- Mobile app (React Native)

---

**© 2025 DigitX LLC. All rights reserved.**
