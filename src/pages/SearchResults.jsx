import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMedicineSearch } from '../hooks/useMedicineSearch';
import SearchBar from '../components/SearchBar';
import MedicineCard from '../components/MedicineCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { results, loading, error, executeSearch } = useMedicineSearch();

  useEffect(() => {
    if (query) {
      executeSearch(query);
    }
  }, [query, executeSearch]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <SearchBar initialQuery={query || ''} />
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-navy-900">
        Search results for "{query}"
      </h2>

      {loading && (
        <div className="flex items-center justify-center p-12 text-gray-500 text-lg">
          <p>Searching medicine information...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 text-red-600 p-6 rounded-lg border border-red-200">
          {error}
        </div>
      )}

      {!loading && !error && results.length === 0 && query && (
        <div className="bg-white p-12 text-center rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-gray-600 text-lg">No medicines found for "{query}". Try checking the spelling or use a different search term.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;