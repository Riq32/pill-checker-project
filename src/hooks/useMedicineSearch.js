import { useState, useCallback } from 'react';
import { searchMedicine } from '../services/openfda';
import { formatMedicineData } from '../utils/formatMedicineData';

export const useMedicineSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeSearch = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    try {
      const rawResults = await searchMedicine(query);
      const formatted = rawResults.map(formatMedicineData);
      setResults(formatted);
    } catch (err) {
      setError('Unable to retrieve medicine information. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, executeSearch };
};