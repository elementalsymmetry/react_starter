import React, { useEffect } from 'react';

function ThemeToggle() {
  // Initialize theme based on system preference if not stored in localStorage
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ?? systemPreference);

  // Effect to apply theme class to body and save to localStorage
  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center p-4">
      <label htmlFor="theme-toggle" className="inline-flex relative items-center cursor-pointer ml-2 mr-2">
        <input type="checkbox" id="theme-toggle" className="sr-only peer" checked={theme === 'dark'} onChange={toggleTheme} />
        <div className="w-8 h-4 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-all duration-300"></div>
        <div className="dot absolute left-0 top-0 bg-white w-4 h-4 rounded-full shadow-md transform peer-checked:translate-x-full peer-checked:bg-blue-600 transition-all duration-300"></div>
      </label>
    </div>
  );
}

export default ThemeToggle;
