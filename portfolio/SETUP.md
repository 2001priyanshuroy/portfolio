# Getting Started

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Configuration

### Email Setup (for contact form)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Add to `.env.local`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### Customization

- **Content**: Edit `src/data/content.ts`
- **Colors**: Edit `tailwind.config.ts`
- **Animations**: Edit `src/utils/animations.ts`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import at https://vercel.com/new
3. Set environment variables
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Render
- AWS Amplify

## Performance Tips

- Use Image component for images
- Lazy load sections with `whileInView`
- Keep animations performant with transform and opacity
- Minimize bundle size with code splitting

## Troubleshooting

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Type Errors

- Run type check: `npm run type-check`
- Check `tsconfig.json` paths

### Animation Issues

- Check browser DevTools Performance tab
- Reduce animation complexity
- Use `will-change` CSS property sparingly

## Need Help?

See [README.md](./README.md) for more information or check the documentation for each library:

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org/docs)
