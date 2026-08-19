const BASE_URL = 'https://api.fda.gov/drug/label.json';

export const searchMedicine = async (query) => {
  if (!query) return [];
  try {
    // Clean the query and use wildcards for broader, more forgiving search results
    const safeQuery = encodeURIComponent(query.trim().toLowerCase());
    
    const response = await fetch(`${BASE_URL}?search=(openfda.brand_name:*${safeQuery}*+openfda.generic_name:*${safeQuery}*)&limit=12`);
    
    if (!response.ok) {
      if (response.status === 404) return []; // OpenFDA returns 404 when no results are found
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("OpenFDA Search Error:", error);
    throw error;
  }
};