# Analytics Setup Guide

## Current Setup

Your portfolio now has **dual analytics** tracking:
1. **Vercel Analytics** - Built-in, automatically tracks Core Web Vitals
2. **Google Analytics 4 (GA4)** - Tracks custom events and user behavior

## Installation Status

✅ **Vercel Analytics**
- Package: `@vercel/analytics` (already installed)
- Initialization: Added `<Analytics />` component in `main.jsx`
- Status: Automatically enabled on Vercel deployment

✅ **Google Analytics 4**
- Package: No package needed (loads script dynamically)
- Configuration: Via environment variable `VITE_GA4_ID`
- Status: Ready to configure

## Setup Steps

### 1. Set Up Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new Property (or use existing)
3. Select Web as platform
4. Add your portfolio URL: `https://tech-trove-murtaza-sadriwala.vercel.app`
5. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Create a `.env.local` file in project root:
```
VITE_GA4_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

### 3. Deploy to Vercel

When deployed, both analytics will be active:
- Vercel Analytics: Automatic (built into Vercel hosting)
- Google Analytics: Via environment variable

## Tracked Events

The following portfolio interactions are tracked:

### Page Views
- `section_viewed` - When user scrolls to sections (About, Experience, Tech, Works, Contact)
- `page_loaded` - When page first loads

### User Interactions
- `project_viewed` - When project card is viewed
- `contact_form_submitted` - When contact form is submitted
- `resume_downloaded` - When resume is downloaded
- `skill_interacted` - When user hovers over/clicks skills
- `experience_expanded` - When work experience details expand
- `theme_toggled` - When light/dark theme is switched
- `navigation_clicked` - When navigation links are clicked
- `social_media_clicked` - When social media links are clicked
- `external_link_clicked` - When project links (live/code) are clicked

## Viewing Analytics

### Vercel Analytics
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to "Analytics" tab
4. View Core Web Vitals, page performance, and regional data

### Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Navigate to:
   - **Realtime** - Live user activity
   - **Reports** → **Engagement** - Events and user behavior
   - **Reports** → **Acquisition** - Traffic sources
   - **Explore** - Create custom reports

## Custom Event Tracking

To track additional events in your code:

```typescript
import { trackEvent } from './utils/analytics';

// Simple event
trackEvent('custom_event');

// Event with properties
trackEvent('project_viewed', { 
  project: 'AI ML Project',
  category: 'machine-learning'
});
```

## Predefined Tracking Functions

```typescript
import { 
  trackProjectView,
  trackContactFormSubmit,
  trackResumeDownload,
  trackSectionView,
  trackSkillInteraction,
  trackExperienceExpand,
  trackThemeToggle,
  trackNavigationClick,
  trackSocialMediaClick,
  trackExternalLink
} from './utils/analytics';

// Usage examples:
trackProjectView('AI Project');
trackContactFormSubmit();
trackSectionView('experience');
trackExternalLink('https://github.com/...', 'code', 'AI Project');
```

## Performance Tracking

Both analytics tools track:
- **Page Load Time** - How fast pages load
- **Core Web Vitals** - Google's key performance metrics
- **User Engagement** - Time on site, scrolls, clicks
- **Traffic Sources** - Where visitors come from
- **Device/Browser Info** - Device types, browsers, OS

## Privacy Considerations

✅ **GDPR Compliant** - Both services respect user privacy
- No personal data collected without consent
- Vercel Analytics anonymizes IP by default
- Google Analytics has privacy controls in settings

To add consent management:
1. Install cookie consent library (e.g., `js-cookie`)
2. Only initialize analytics after user consent
3. Add privacy policy to your site

## Troubleshooting

**Vercel Analytics not showing data:**
- Must be deployed to Vercel (not localhost)
- Wait 24 hours for initial data to appear

**Google Analytics not tracking events:**
- Verify `VITE_GA4_ID` is set correctly
- Check browser console for errors
- Ensure GA property is properly configured
- Wait a few minutes for data to appear in GA4

**Events not appearing in GA4:**
- Go to GA4 → DebugView to see real-time event tracking
- Verify event names match (case-sensitive)

## Next Steps

1. ✅ Set your GA4 Measurement ID in `.env.local`
2. ✅ Deploy to Vercel
3. ✅ Wait 24 hours for initial data
4. ✅ Monitor analytics regularly
5. ✅ Use insights to improve portfolio

## Resources

- [Vercel Analytics Docs](https://vercel.com/analytics)
- [Google Analytics 4 Help](https://support.google.com/analytics)
- [Analytics Best Practices](https://analytics.google.com/analytics/learn/)

---

**Last Updated**: January 5, 2026
