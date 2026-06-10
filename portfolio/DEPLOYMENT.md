/_ Deployment Guide _/

# Vercel Deployment (Recommended)

## Prerequisites

- GitHub account
- Vercel account (free)

## Steps

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Search for your portfolio repository
4. Click "Import"

### 3. Set Environment Variables

In Vercel dashboard:

- PROJECT_SETTINGS → Environment Variables
- Add:
  - `EMAIL_USER`: your email
  - `EMAIL_PASSWORD`: your app password

### 4. Deploy

Click "Deploy" - your site will be live in seconds!

## Custom Domain

1. Go to PROJECT_SETTINGS → Domains
2. Add your custom domain
3. Follow DNS configuration steps
4. Wait for SSL certificate (usually < 5 minutes)

## Continuous Deployment

Every push to `main` branch automatically triggers a new deployment!

---

# Other Hosting Options

## Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy

## Railway

1. Connect GitHub
2. Select Next.js template
3. Add environment variables
4. Deploy

## AWS Amplify

1. Connect GitHub
2. Configure build settings
3. Add environment variables
4. Deploy

---

# Local Testing Before Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Open browser
open http://localhost:3000
```

# Monitoring

After deployment:

1. **Check Performance**
   - Use Lighthouse (DevTools → Lighthouse)
   - Target: 90+ score

2. **Monitor Errors**
   - Set up Sentry for error tracking (optional)
   - Check browser console

3. **Analytics**
   - Use Vercel Analytics
   - Track page views and performance

4. **SEO**
   - Submit sitemap to Google Search Console
   - Monitor search appearances

# Troubleshooting Deployment

## Build fails

- Check Node version
- Clear cache: `npm clean-install`
- Check for TypeScript errors: `npm run type-check`

## Email not working

- Verify credentials in .env
- Check Gmail App Passwords are generated
- Check email logs in Vercel

## Slow performance

- Check image optimization
- Reduce animation complexity
- Use Vercel Analytics to identify bottlenecks
