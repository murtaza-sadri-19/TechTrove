import { track } from '@vercel/analytics';

// Custom event tracking functions for portfolio interactions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    track(eventName, properties);
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