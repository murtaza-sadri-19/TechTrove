'use client';
import { useThemeToggle } from './useThemeToggle';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useThemeToggle();

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-muted animate-pulse">
        <div className="w-5 h-5 bg-muted-foreground/20 rounded"></div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {isDark ? (
          <Sun size={20} className="text-yellow-500 drop-shadow-lg" />
        ) : (
          <Moon size={20} className="text-blue-600 drop-shadow-lg" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isDark 
            ? 'bg-yellow-500/20 shadow-yellow-500/20' 
            : 'bg-blue-500/20 shadow-blue-500/20'
        }`}
        animate={{
          opacity: isDark ? 0.3 : 0.2,
          scale: isDark ? 1.2 : 1.1,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
}