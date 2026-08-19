const BASE_URL = 'https://api.fda.gov/drug/label.json';

export const searchMedicine = async (query) => {
  if (!query) return [];
  try {
    const response = await fetch(`${BASE_URL}?search=(openfda.brand_name:"${query}"+openfda.generic_name:"${query}")&limit=12`);
    if (!response.ok) {
      if (response.status === 404) return []; // OpenFDA returns 404 for no results
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("OpenFDA Search Error:", error);
    throw error;
  }
};