# Priyanshu Roy - Personal Developer Website

Premium personal developer portfolio showcasing backend engineering expertise. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design** - Clean, premium aesthetic inspired by Vercel, Stripe, and Linear
- **Fully Animated** - Smooth animations and interactions using Framer Motion and GSAP
- **Responsive** - Beautiful on desktop, tablet, and mobile
- **Performance Optimized** - 95+ Lighthouse score
- **SEO Ready** - Optimized metadata and Open Graph
- **Dark Theme** - Eye-friendly dark mode with gradient accents
- **Type Safe** - Full TypeScript support
- **Production Ready** - Clean, scalable architecture

## 📋 Sections

1. **Hero** - Animated introduction with typing effect
2. **About** - Professional summary and key metrics
3. **Experience** - Timeline with achievements and metrics
4. **Projects** - Featured projects with filters and details
5. **Skills** - Organized skill categories with badges
6. **GitHub** - Repository showcase and language stats
7. **Education** - Academic background and certifications
8. **Achievements** - Key statistics and milestones
9. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Database/Email**: Nodemailer
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

1. **Clone and install dependencies**

   ```bash
   cd portfolio
   npm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure email settings in `.env.local`:
   - `EMAIL_USER` - Your Gmail address
   - `EMAIL_PASSWORD` - Gmail App Password

3. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

```bash
vercel deploy
```

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse**: 95+
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run type-check # TypeScript type checking
npm run format    # Format code with Prettier
```

### Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   ├── sitemap.ts       # SEO sitemap
│   │   ├── robots.ts        # robots.txt
│   │   └── api/
│   │       └── contact/     # Contact form API
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── content.ts       # Professional content
│   │   └── navigation.ts    # Navigation links
│   ├── hooks/
│   │   ├── useScroll.ts     # Scroll hooks
│   │   └── useTheme.ts      # Theme hooks
│   └── utils/
│       ├── helpers.ts       # Helper functions
│       └── animations.ts    # Animation variants
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: '#0099ff',
  secondary: '#7c3aed',
  accent: '#06b6d4',
}
```

### Content

Edit `src/data/content.ts` with your personal information:

- Professional summary
- Experience
- Projects
- Skills
- Education

### Animations

Modify animation variants in `src/utils/animations.ts`

## 📝 Content Guidelines

- Use **strong action verbs**
- Focus on **impact and metrics**
- Avoid generic descriptions
- Tell your **story**
- Highlight **measurable achievements**

## 🔐 Security

- No sensitive data in code
- Environment variables for secrets
- CORS properly configured
- Input validation on forms

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Priyanshu Roy**

- GitHub: [@priyanshuroy](https://github.com/priyanshuroy)
- LinkedIn: [@roypriyanshu](https://linkedin.com/in/roypriyanshu)
- Email: roy1.priyanshu@gmail.com

---

Built with ❤️ using Next.js, React, TypeScript & Tailwind CSS
