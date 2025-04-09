import React from 'react';

function RecentSearches({ searches, onSelect }) {
  if (searches.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
            className="bg-blue-200 hover:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 text-blue-800 dark:text-blue-100 px-3 py-1 rounded transition-colors"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
