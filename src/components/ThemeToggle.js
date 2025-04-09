import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-md transition-colors focus:outline-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </motion.div>
      <span className="ml-2 font-medium">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </motion.button>
  );
}

export default ThemeToggle;
