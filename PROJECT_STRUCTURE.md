# MentorPath.ai Project Structure

## 📁 Directory Structure

```
mentorpath-platform/
├── app/
│   ├── bd/                          # Bangladesh region pages
│   │   ├── code-of-conduct/         # Code of conduct page
│   │   ├── content/                 # Knowledge hub
│   │   │   ├── [slug]/              # Individual content detail pages
│   │   │   └── page.tsx             # Content listing page
│   │   ├── dashboard/               # User dashboard
│   │   ├── events/                  # Events section
│   │   │   ├── [slug]/              # Individual event detail pages
│   │   │   └── page.tsx             # Events listing page
│   │   ├── privacy/                 # Privacy policy
│   │   ├── terms/                   # Terms of service
│   │   ├── layout.tsx               # BD layout with sidebar & language switcher
│   │   └── page.tsx                 # BD homepage
│   ├── component/
│   │   └── academy/
│   │       └── FaqSection.tsx       # Reusable FAQ component
│   ├── layout.tsx                   # Root layout with fonts
│   ├── page.tsx                     # Root page (redirects to /bd)
│   └── globals.css                  # Global styles
├── public/
│   └── assets/
│       ├── MentorPathLogo.svg       # Logo with X icon + MentorPath.ai text
│       └── profile-avatar.svg       # Default profile avatar
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts               # Tailwind configuration
├── next.config.ts                   # Next.js configuration
└── README.md                        # Project documentation

## 🔧 Configuration Files

- **package.json**: Includes Next.js 15, React 19, Framer Motion, Lucide React
- **tailwind.config.ts**: Custom color schemes and dark theme
- **next.config.ts**: Next.js 15 configuration
- **tsconfig.json**: TypeScript strict mode enabled

## 🌍 Features by Page

### Homepage (`/bd`)
- Hero section with CTA button
- Value propositions (3 cards)
- Featured events section (gradient cards)
- Featured content section (gradient cards)
- About MentorPath.ai section
- FAQ section
- Footer with links

### Events Page (`/bd/events`)
- Filter by status (Upcoming/Past) and category
- Gradient event cards with:
  - Sparkles icon
  - Status badges
  - Host information
  - Date/time in BST
- Load more functionality

### Content Page (`/bd/content`)
- Filter by type (Videos, Resources, Tutorials, Guides)
- Sort by (Latest, Most Viewed, Trending)
- Gradient content cards with:
  - Play or BookOpen icons
  - Type and trending badges
  - View counts
  - Duration for videos

### Dashboard
- User statistics
- Registered events
- Saved content
- Community memberships

## 🎨 Design System

### Colors
- Background: `#030205`
- Card gradients (6 variations):
  1. Teal to Blue: `#064E5C → #1E3A8A`
  2. Purple to Pink (3-stop): `#2D1B69 → #4A1E5C → #6B1F47`
  3. Purple to Pink: `#4C1D95 → #7F1D53`
  4. Blue to Purple: `#1E3A8A → #4C1D95`
  5. Teal to Purple: `#064E5C → #4C1D95`
  6. Pink to Orange: `#7F1D53 → #92400E`

### Typography
- English: Default font stack
- Bengali: Noto Sans Bengali (400, 500, 600, 700)

### CTA Buttons
- Style: Transparent background, white text, 2px white border (50% opacity)
- Hover: 10% white background
- Border radius: Full (pill shape)

## 🔄 Routes

- `/` → Redirects to `/bd`
- `/bd` → Bangladesh homepage
- `/bd/events` → Events listing
- `/bd/events/[slug]` → Event details
- `/bd/content` → Knowledge hub
- `/bd/content/[slug]` → Content details
- `/bd/dashboard` → User dashboard
- `/bd/terms` → Terms of Service
- `/bd/privacy` → Privacy Policy
- `/bd/code-of-conduct` → Code of Conduct

## 🌐 Internationalization

- **English**: Default language
- **Bengali**: Full translation support
- Language switcher in top header
- Persistent language selection
- Bengali font automatically applied when Bengali is selected

## 📝 Content Strategy

All content is Bangladesh-centric:
- Event locations: Dhaka, Chittagong, etc.
- Event times: BST (Bangladesh Standard Time)
- Host names: Bengali names
- Content descriptions: Focused on Bangladesh's tech ecosystem
- About section: Mentions Bangladesh specifically

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open browser: `http://localhost:3000`
4. Auto-redirects to: `http://localhost:3000/bd`

## 📦 Dependencies

- next: ^15.4.1
- react: ^19.0.0
- react-dom: ^19.0.0
- framer-motion: Latest
- lucide-react: Latest
- tailwindcss: Latest
- typescript: Latest


