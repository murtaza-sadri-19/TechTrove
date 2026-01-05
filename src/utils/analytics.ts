import { track } from '@vercel/analytics';

// Initialize Google Analytics (add your GA4 ID)
export const initializeGoogleAnalytics = (gaId: string) => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
    
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      ((window as any).dataLayer as any[]).push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
};

// Custom event tracking functions for portfolio interactions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Track with Vercel Analytics
    track(eventName, properties);
    
    // Track with Google Analytics if available
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
  }
};

// Predefined tracking functions for common portfolio interactions
export const trackProjectView = (projectTitle: string) => {
  trackEvent('project_viewed', { project: projectTitle });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submitted');
};

export const trackResumeDownload = () => {
  trackEvent('resume_downloaded');
};

export const trackSectionView = (section: string) => {
  trackEvent('section_viewed', { section });
};

export const trackSkillInteraction = (skill: string) => {
  trackEvent('skill_interacted', { skill });
};

export const trackExperienceExpand = (company: string) => {
  trackEvent('experience_expanded', { company });
};

export const trackThemeToggle = (theme: 'light' | 'dark') => {
  trackEvent('theme_toggled', { theme });
};

export const trackNavigationClick = (destination: string) => {
  trackEvent('navigation_clicked', { destination });
};

export const trackSocialMediaClick = (platform: string) => {
  trackEvent('social_media_clicked', { platform });
};

export const trackExternalLink = (url: string, type: 'live' | 'code', projectTitle?: string) => {
  trackEvent('external_link_clicked', { url, type, project: projectTitle });
};