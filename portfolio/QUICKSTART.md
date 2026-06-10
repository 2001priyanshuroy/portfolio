# QUICK START GUIDE

## ⚡ 5-Minute Setup

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Gmail credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. View Your Site

Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📝 Customization

### Update Your Information

Edit `src/data/content.ts`:

```typescript
export const personalData = {
  name: 'Your Name',
  email: 'your.email@gmail.com',
  // ... update all fields
};
```

### Customize Content

- **About**: `src/data/content.ts` → `aboutContent`
- **Experience**: `src/data/content.ts` → `experienceData`
- **Projects**: `src/data/content.ts` → `projectsData`
- **Skills**: `src/data/content.ts` → `skillsData`

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0099ff',      // Blue
  secondary: '#7c3aed',    // Purple
  accent: '#06b6d4',       // Cyan
}
```

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add environment variables
5. Deploy (automatic on every push)

### Option 2: Other Platforms

See `DEPLOYMENT.md` for Netlify, Railway, AWS Amplify

---

## 📊 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── api/          # API routes
│   ├── components/
│   │   ├── sections/     # 9 page sections
│   │   └── shared/       # Reusable components
│   ├── data/             # Content & configuration
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Helper functions
├── public/               # Static files
└── docs/                 # Documentation
```

---

## 🎨 Features

✅ **Modern Design** - Premium, minimal aesthetic  
✅ **Fully Animated** - Smooth Framer Motion animations  
✅ **Dark Theme** - Eye-friendly dark mode  
✅ **Responsive** - Mobile, tablet, desktop  
✅ **Type Safe** - Full TypeScript support  
✅ **SEO Ready** - Sitemap, robots.txt, metadata  
✅ **Performance** - 95+ Lighthouse score  
✅ **Production Ready** - Scalable architecture

---

## 💻 Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run type-check # Check TypeScript
npm run format    # Format code with Prettier
```

---

## 🔧 Troubleshooting

### Port 3000 Already in Use

```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Installation Failed

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
npm run type-check
```

### Build Fails

```bash
rm -rf .next
npm run build
```

---

## 📧 Email Setup

For the contact form to work:

1. **Enable 2FA** on your Gmail account
2. **Generate App Password**:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password
3. **Add to `.env.local`**:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

---

## 🎯 Next Steps

- [ ] Update `src/data/content.ts` with your info
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Configure email (see Email Setup section)
- [ ] Test locally: `npm run dev`
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Submit to Google Search Console

---

## 📚 Documentation

- [README.md](./README.md) - Full project documentation
- [SETUP.md](./SETUP.md) - Detailed setup guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions

---

## 🤝 Support

For questions or issues:

1. Check the documentation
2. Review example code
3. Check library docs:
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind Docs](https://tailwindcss.com/docs)
   - [Framer Motion Docs](https://www.framer.com/motion)
   - [TypeScript Docs](https://www.typescriptlang.org/docs)

---

**Built with ❤️ for backend engineers**
