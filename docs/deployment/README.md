# Deployment Guide

This guide covers deployment options and processes for TechTrove.

## Deployment Options

### 1. Firebase Hosting (Recommended)

Firebase Hosting provides fast, secure hosting for your web app.

#### Setup
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Deploy
```bash
npm run deploy
# or
./scripts/deploy/firebase.sh
```

#### Configuration
Firebase hosting is configured in `firebase.json`:
```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 2. Vercel (Alternative)

Vercel provides excellent Next.js support with zero configuration.

#### Setup
```bash
npm install -g vercel
vercel login
```

#### Deploy
```bash
vercel --prod
```

#### Configuration
Create `vercel.json` for custom configuration:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build"
}
```

### 3. Netlify

#### Setup
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

#### Environment Variables
Add environment variables in Netlify dashboard:
- All `NEXT_PUBLIC_*` variables
- API keys and secrets

## Environment Configuration

### Production Environment Variables
Ensure these are set in your production environment:

```env
# App Configuration
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com


# ... other Firebase config

# AI Services
OPENAI_API_KEY=your_openai_key
HUGGINGFACE_API_KEY=your_huggingface_key
PINECONE_API_KEY=your_pinecone_key
```

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
```

## Performance Optimization

### Build Optimization
- Enable compression in hosting provider
- Set up CDN for static assets
- Configure caching headers
- Optimize images and fonts

### Monitoring
- Set up Google Analytics
- Configure error tracking (Sentry)
- Monitor Core Web Vitals
- Set up uptime monitoring

## Security Considerations

### Production Checklist
- [ ] All API keys are environment variables
- [ ] Firebase security rules are properly configured
- [ ] HTTPS is enforced
- [ ] Security headers are set
- [ ] Rate limiting is implemented
- [ ] Input validation is in place

### Environment Security
- Never commit secrets to version control
- Use environment-specific configurations
- Regularly rotate API keys
- Monitor for security vulnerabilities

## Rollback Strategy

### Quick Rollback
```bash
# Firebase
firebase hosting:rollback

# Vercel
vercel --prod --force
```

### Manual Rollback
1. Identify last known good commit
2. Create hotfix branch from that commit
3. Deploy hotfix
4. Fix issues in develop branch

## Domain Configuration

### Custom Domain Setup
1. Add domain to hosting provider
2. Configure DNS records
3. Set up SSL certificate
4. Update environment variables

### DNS Records
```
Type: A
Name: @
Value: [Hosting Provider IP]

Type: CNAME
Name: www
Value: your-domain.com
```

## Troubleshooting

### Common Deployment Issues
1. **Build Failures**: Check TypeScript errors and dependencies
2. **Environment Variables**: Verify all required variables are set
3. **API Errors**: Check API key permissions and quotas
4. **Routing Issues**: Verify Next.js configuration and rewrites

### Monitoring and Logs
- Check hosting provider logs
- Monitor error rates and performance
- Set up alerts for critical issues
- Review user feedback and analytics