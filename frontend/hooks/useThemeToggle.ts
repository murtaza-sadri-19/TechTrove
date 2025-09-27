'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      // If theme is 'system', toggle based on resolved theme
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }
  };

  // Return safe values to prevent hydration issues
  if (!mounted) {
    return {
      theme: 'light',
      toggleTheme: () => {},
      isDark: false,
      isLight: true,
      mounted: false,
    };
  }

  return {
    theme,
    toggleTheme,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
    mounted,
  };
}