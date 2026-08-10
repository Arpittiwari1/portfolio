# Personal Engineering Portfolio — Arpit Tiwari

Production-quality personal portfolio website built for **Arpit Tiwari**, Software Engineer focused on Backend Engineering, Full-Stack Development, AI Applications, API Integrations, and Workflow Automation.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React & Custom Technical SVGs
- **Theme**: Dark-first slate/zinc technical palette

## Quick Start & Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Updating Content**:
   All editable content, skills, case studies, experience details, social links, and bio text are centralized in:
   [src/data/portfolioData.ts](file:///d:/Dev%20Personal/projects/src/data/portfolioData.ts)

   Modify this single file to update your portfolio details without altering component logic.

4. **Verify TypeScript & Production Build**:
   ```bash
   npx tsc --noEmit
   npm run lint
   npm run build
   ```

## Deployment Options
This repository is pre-configured for static export & edge hosting on:
- Vercel (`vercel deploy`)
- Cloudflare Pages (`npm run build`)
- Render / Railway / Netlify
