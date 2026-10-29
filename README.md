# Portfolio: Arpit Tiwari

Personal portfolio for **Arpit Tiwari**, a full-stack developer working with React, TypeScript, FastAPI, Node.js, and AI integrations.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **AI section**: Ollama Cloud (streamed through `/api/ask`)
- **Theme**: Dark slate palette with a single cyan accent

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

## Ask AI setup
The "Ask about me" section calls Ollama Cloud from `src/app/api/ask/route.ts`. Create `.env.local`:

```
OLLAMA_API_KEY=your_key
# optional, defaults to gpt-oss:120b
OLLAMA_MODEL=gpt-oss:120b
```
