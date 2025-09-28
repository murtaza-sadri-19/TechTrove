import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Check if we have real Firebase configuration (not placeholder values)
const isValidConfig = (config: typeof firebaseConfig): boolean => {
  const { apiKey, projectId, authDomain } = config;
  
  // Check if values exist and are not placeholder strings
  const hasValidApiKey = apiKey && 
                        apiKey.length > 10 && 
                        !apiKey.includes('your_') && 
                        !apiKey.includes('_here');
  
  const hasValidProjectId = projectId && 
                           !projectId.includes('your_') && 
                           !projectId.includes('_here');
  
  const hasValidAuthDomain = authDomain && 
                            !authDomain.includes('your_') && 
                            !authDomain.includes('_here');
  
  return !!(hasValidApiKey && hasValidProjectId && hasValidAuthDomain);
};

const shouldInitialize = isValidConfig(firebaseConfig);

// Debug logging
if (process.env.NODE_ENV === 'development') {
  console.log('Firebase Config Status:', {
    hasApiKey: !!firebaseConfig.apiKey,
    hasProjectId: !!firebaseConfig.projectId,
    isValidConfig: shouldInitialize,
    apiKeyType: firebaseConfig.apiKey?.includes('your_') ? 'placeholder' : 'potential real key'
  });
  
  if (!shouldInitialize) {
    console.log('🔥 Firebase is using placeholder configuration. Features requiring Firebase will be mocked.');
    console.log('ℹ️  To enable Firebase, update your .env file with real Firebase credentials.');
  }
}

let app: any = null;
let auth: any = null;
let db: any = null;
let storage: any = null;
let analytics: any = null;

if (shouldInitialize) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
    // Fall through to mock objects
    app = null;
    auth = null;
    db = null;
    storage = null;
    analytics = null;
  }
}

if (!shouldInitialize || !auth) {
  // Create comprehensive mock objects for development
  auth = {
    currentUser: null,
    onAuthStateChanged: (callback: any) => {
      // Immediately call with null user for consistent behavior
      if (typeof callback === 'function') {
        setTimeout(() => callback(null), 0);
      }
      return () => {}; // Unsubscribe function
    },
    signInWithEmailAndPassword: () => Promise.reject(new Error('Firebase not configured - using placeholder credentials')),
    signOut: () => Promise.reject(new Error('Firebase not configured - using placeholder credentials')),
    signInWithPopup: () => Promise.reject(new Error('Firebase not configured - using placeholder credentials')),
    createUserWithEmailAndPassword: () => Promise.reject(new Error('Firebase not configured - using placeholder credentials')),
  };
  
  db = {
    collection: () => ({
      doc: () => ({
        get: () => Promise.reject(new Error('Firestore not configured - using placeholder credentials')),
        set: () => Promise.reject(new Error('Firestore not configured - using placeholder credentials')),
        update: () => Promise.reject(new Error('Firestore not configured - using placeholder credentials')),
        delete: () => Promise.reject(new Error('Firestore not configured - using placeholder credentials')),
      }),
      add: () => Promise.reject(new Error('Firestore not configured - using placeholder credentials')),
      get: () => Promise.reject(new Error('Firestore not configured - using placeholder credentials')),
    }),
  };
  
  storage = {
    ref: () => ({
      put: () => Promise.reject(new Error('Firebase Storage not configured - using placeholder credentials')),
      getDownloadURL: () => Promise.reject(new Error('Firebase Storage not configured - using placeholder credentials')),
    }),
  };
  
  analytics = null;
  app = null;
}

// Utility function to check if Firebase is properly configured
export const isFirebaseConfigured = (): boolean => shouldInitialize;

// Utility function to get configuration status
export const getFirebaseConfigStatus = () => ({
  isConfigured: shouldInitialize,
  hasPlaceholderValues: !shouldInitialize && !!firebaseConfig.apiKey,
  missingEnvironmentVariables: !firebaseConfig.apiKey || !firebaseConfig.projectId,
});

export { auth, db, storage, analytics };
export default app;