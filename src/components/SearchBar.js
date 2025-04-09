import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center bg-white shadow-lg rounded-full overflow-hidden"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 w-64 sm:w-80 md:w-96 outline-none text-gray-700 rounded-l-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-r-full flex items-center justify-center hover:bg-blue-600 transition-colors"
        >
          <FaSearch size={20} />
        </button>
      </motion.div>
    </motion.form>
  );
}

export default SearchBar;
