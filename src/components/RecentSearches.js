import React from 'react';
import { motion } from 'framer-motion';
import { FaSearchLocation } from 'react-icons/fa';

function RecentSearches({ searches, onSelect }) {
  if (searches.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaSearchLocation className="text-blue-500" />
        Recent Searches
      </h3>
      <div className="flex flex-wrap gap-3">
        {searches.map((city, index) => (
          <motion.button
            key={index}
            onClick={() => onSelect(city)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
          >
            {city}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
