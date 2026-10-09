# Matic Global Solutions Inc - Corporate Website

A production-ready, fully responsive multi-page corporate website for an AI-first IT and consulting firm. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

### 1. Installation
Clone the repository, navigate to the folder, and run:
```bash
npm install
```

### 2. Environment Variables
No specific environment variables are strictly required to run the site initially, but for production contact form functionality, you would add SMTP or Resend API keys.
Create a `.env.local` file at the root:
```env
# Example only
# RESEND_API_KEY=re_123456789
```
*Note: Currently, the contact form uses a simulated in-memory `mailer.ts` that mocks a successful delivery.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production
```bash
npm run build
npm run start
```

### 5. Deploy to Vercel
1. Push this repository to GitHub/GitLab/Bitbucket.
2. Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import the repository.
4. Leave framework preset as "Next.js".
5. Add any necessary environment variables.
6. Click **Deploy**.

---

## How to Re-Brand this Website

The site uses a single source of truth for branding data and design tokens.

### Changing Text, Name, and Services
Open `src/config/site.ts`. Here you can easily change:
- `name` (Brand Name)
- `shortName` (e.g. MATIC)
- `tagline` (e.g. GLOBAL SOLUTIONS INC)
- `contactEmail` and `contactPhone`
- `socialLinks`
- `services` (Changing these updates the navigation dropdown, the footer, and the contact form select dropdown automatically!)

### Changing Colors and Typography
Open `src/app/globals.css`. Under the `:root` pseudo-class in the `@layer base` section, you will find all the CSS variables:
- `--primary`: Main brand color
- `--primary-dark`: Hover state
- `--bg`: Section background color
- etc.
Simply change the hex codes here. The entire site (buttons, text, header, footer) will update. Typography is driven by Google Fonts imported at the top of the same file.

### Changing the Logo
The logo is a React component located at `src/components/ui/Logo.tsx`. To replace it with an image:
1. Put your `logo.png` or `logo.svg` in the `public` folder.
2. Edit `Logo.tsx` to return an `<img>` tag or Next.js `<Image>` component pointing to `/logo.svg`.

### Changing Images
See `public/images/README.md` for a list of image slots used across the site.

---

## Assumptions Made
1. **Contact Form / Chat API**: Since no real backend or LLM was provided, the `/api/contact` endpoint and `lib/chat.ts` implement a simulated success flow (rate limited in memory). They are structured properly so you can drop in `Resend` or `OpenAI` easily.
2. **Icons**: Using `lucide-react` for a clean, consistent, and lightweight icon set instead of custom SVGs.
3. **Images**: Direct Unsplash URLs are used as placeholders to ensure high quality visual presentation out of the box without bloating the repo size.
4. **Motion**: Replaced heavy framer-motion usage with native Tailwind CSS transitions and simple CSS animations (`animate-in fade-in slide-in`) for better performance, adhering to the "subtle only" requirement.
