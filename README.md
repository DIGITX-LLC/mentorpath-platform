# MentorPath.ai - Bangladesh Platform

An AI education platform dedicated to empowering individuals in Bangladesh with AI knowledge and skills to unlock opportunities in the digital era.

## 🚀 Features

* **Bangladesh-Centric Content**: Tailored AI education for the Bangladeshi community
* **Bilingual Support**: Full support for English and Bengali (বাংলা) languages
* **Events System**: Virtual and in-person AI learning events across Bangladesh
* **Knowledge Hub**: Comprehensive videos, tutorials, and resources from AI basics to advanced content
* **Modern Dark Theme**: Eye-friendly dark interface with beautiful gradient cards
* **Responsive Design**: Seamlessly works on mobile, tablet, and desktop devices
* **Interactive Dashboard**: Personalized learning experience with saved content and event registrations

## 🛠️ Tech Stack

* **Framework**: Next.js 15 with App Router
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Fonts**: Noto Sans Bengali for proper Bengali script rendering

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Routes Structure

* `/` - Root redirects to Bangladesh platform
* `/bd` - Bangladesh homepage
* `/bd/events` - Events listing page
* `/bd/events/[slug]` - Individual event details
* `/bd/content` - Knowledge hub / content library
* `/bd/content/[slug]` - Individual content/resource page
* `/bd/dashboard` - User dashboard
* `/bd/terms` - Terms of Service
* `/bd/privacy` - Privacy Policy
* `/bd/code-of-conduct` - Community Code of Conduct

## 🎨 Branding

**Brand Name**: MentorPath.ai  
**Tagline**: Empowering Bangladesh with AI knowledge

**Color Palette**:
* Background: `#030205` (Dark)
* Accent Colors: Various dark gradients
  - Teal to Blue: `#064E5C → #1E3A8A`
  - Purple to Pink: `#2D1B69 → #4A1E5C → #6B1F47`
  - Purple to Red: `#4C1D95 → #7F1D53`
* Text: White with various opacity levels (`text-white`, `text-white/90`, `text-gray-300`)
* Borders: `border-white/10`, `border-white/20`, `border-white/30`

## 📁 Project Structure

```
mentorpath-platform/
├── app/
│   ├── bd/                      # Bangladesh platform
│   │   ├── components/          # Shared components
│   │   │   └── FaqSection.tsx
│   │   ├── code-of-conduct/
│   │   │   └── page.tsx
│   │   ├── content/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   ├── layout.tsx           # BD platform layout with navigation
│   │   └── page.tsx             # BD homepage
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Root page (redirects to /bd)
├── public/
│   └── assets/
│       ├── MentorPathLogo.svg
│       └── profile-avatar.svg
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── PROJECT_STRUCTURE.md
├── README.md
└── tsconfig.json
```

## 🌍 Language Support

The platform supports:
* **English** - Default language
* **Bengali (বাংলা)** - Full translation with proper font rendering using Noto Sans Bengali

Users can switch languages using the language selector in the top navigation bar.

## 📧 Contact

* **General Inquiries**: academy@mentorpath.ai
* **Privacy Questions**: privacy@mentorpath.ai
* **Code of Conduct Reports**: conduct@mentorpath.ai

## 📝 License

© 2025 DigitX LLC. All rights reserved.

## 🤝 Contributing

MentorPath.ai is dedicated to bringing AI education to Bangladesh. If you're interested in hosting events or contributing to the platform, please contact us at academy@mentorpath.ai.

## 🚀 Deployment

The platform is optimized for deployment on Vercel, Netlify, or any Node.js hosting platform that supports Next.js applications.

### Environment Variables

Create a `.env.local` file with any necessary environment variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 🎯 Mission

MentorPath.ai's mission is to democratize access to AI education across Bangladesh, empowering students, professionals, educators, and entrepreneurs to confidently integrate AI into their lives, work, and communities through comprehensive learning resources, hands-on training, and a supportive community.
