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

// Additional analytics for performance and user engagement
export const trackPageLoad = (pageName: string, loadTime: number) => {
  trackEvent('page_loaded', { page: pageName, loadTime });
};

export const trackFormInteraction = (formName: string, field: string, action: 'focused' | 'filled' | 'error') => {
  trackEvent('form_interaction', { form: formName, field, action });
};

export const trackScrollDepth = (percentage: number, section: string) => {
  trackEvent('scroll_depth', { depth: percentage, section });
};

export const trackError = (errorType: string, errorMessage: string, context?: string) => {
  trackEvent('error_occurred', { type: errorType, message: errorMessage, context });
};

export const trackFilterApplied = (filterType: string, filterValue: string) => {
  trackEvent('filter_applied', { filterType, filterValue });
};

export const trackSearchQuery = (query: string, resultsCount?: number) => {
  trackEvent('search_performed', { query, resultsCount });
};

export const trackVideoInteraction = (videoTitle: string, action: 'play' | 'pause' | 'complete') => {
  trackEvent('video_interaction', { video: videoTitle, action });
};

export const trackModalOpen = (modalName: string) => {
  trackEvent('modal_opened', { modal: modalName });
};

export const trackModalClose = (modalName: string, actionTaken?: string) => {
  trackEvent('modal_closed', { modal: modalName, action: actionTaken });
};

export const trackFileDownload = (fileName: string, fileType: string) => {
  trackEvent('file_downloaded', { fileName, fileType });
};

export const trackCopyToClipboard = (contentType: string) => {
  trackEvent('copy_to_clipboard', { contentType });
};

export const trackHoverInteraction = (elementName: string, duration?: number) => {
  trackEvent('element_hovered', { element: elementName, duration });
};

export const trackSessionStart = (referrer?: string) => {
  trackEvent('session_started', { referrer: referrer || document.referrer });
};

export const trackSessionEnd = (duration: number) => {
  trackEvent('session_ended', { duration });
};

export const trackUserPreference = (preferenceType: string, value: string | boolean | number) => {
  trackEvent('user_preference_changed', { preferenceType, value });
};

export const trackAPICall = (endpoint: string, method: string, statusCode?: number, duration?: number) => {
  trackEvent('api_call', { endpoint, method, statusCode, duration });
};

export const trackFeatureUsage = (featureName: string, usageData?: Record<string, any>) => {
  trackEvent('feature_used', { feature: featureName, ...usageData });
};

export const trackConversionFunnel = (funnelStep: string, completed: boolean) => {
  trackEvent('conversion_funnel_step', { step: funnelStep, completed });
};