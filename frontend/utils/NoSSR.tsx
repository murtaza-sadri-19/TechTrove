'use client';
import { useEffect, useState } from 'react';

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * A utility component to prevent server-side rendering for specific components
 * that might cause hydration mismatches due to browser extensions or client-only APIs
 */
export default function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}