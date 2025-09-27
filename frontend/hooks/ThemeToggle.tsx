// components/ThemeToggle.tsx
'use client';
import { useTheme } from './useThemeToggle.tsx';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
        <Sun size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-blue-600" />}
    </button>
  );
}