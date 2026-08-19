import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto shadow-sm">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a medicine (e.g., Paracetamol)..."
        className="flex-grow p-4 rounded-l-lg border border-neutral-300 bg-white focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 text-lg"
        required
      />
      <button 
        type="submit"
        className="bg-navy-800 text-white px-8 py-4 rounded-r-lg font-semibold hover:bg-navy-900 transition-colors cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;