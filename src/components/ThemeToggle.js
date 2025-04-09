import React from 'react';

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded transition-colors"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
