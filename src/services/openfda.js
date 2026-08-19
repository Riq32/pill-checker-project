const BASE_URL = 'https://api.fda.gov/drug/label.json';
const apiCache = new Map();

export const searchMedicines = async (query) => {
  if (!query) return [];
  const cacheKey = `search_${query.toLowerCase()}`;
  if (apiCache.has(cacheKey)) return apiCache.get(cacheKey);

  try {
    const safeQuery = encodeURIComponent(query.trim().toLowerCase());
    const response = await fetch(`${BASE_URL}?search=(openfda.brand_name:*${safeQuery}*+openfda.generic_name:*${safeQuery}*)&limit=10`);
    
    if (!response.ok) return response.status === 404 ? [] : [];
    const data = await response.json();
    apiCache.set(cacheKey, data.results || []);
    return data.results || [];
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const getMedicineDetails = async (id) => {
  const cacheKey = `details_${id}`;
  if (apiCache.has(cacheKey)) return apiCache.get(cacheKey);

  try {
    const response = await fetch(`${BASE_URL}?search=id:${id}&limit=1`);
    if (!response.ok) throw new Error('Details not found');
    const data = await response.json();
    apiCache.set(cacheKey, data.results[0]);
    return data.results[0];
  } catch (error) {
    throw error;
  }
};

export const checkInteractionMentions = (drugA, drugB) => {
  if (!drugA || !drugB) return null;

  const extractSnippet = (sourceText, searchTerm) => {
    if (!sourceText || !searchTerm) return null;
    const lowerSource = sourceText.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();
    const index = lowerSource.indexOf(lowerSearch);
    
    if (index === -1) return null;
    const start = Math.max(0, index - 75);
    const end = Math.min(sourceText.length, index + lowerSearch.length + 75);
    return `"...${sourceText.substring(start, end).trim()}..."`;
  };

  const getCombinedText = (drug) => {
    return [
      drug.drug_interactions?.[0] || '',
      drug.contraindications?.[0] || '',
      drug.warnings?.[0] || ''
    ].join(' ');
  };

  const textA = getCombinedText(drugA);
  const textB = getCombinedText(drugB);
  
  const nameB = drugB.openfda?.brand_name?.[0] || drugB.openfda?.generic_name?.[0];
  const nameA = drugA.openfda?.brand_name?.[0] || drugA.openfda?.generic_name?.[0];

  return {
    mentionInA: extractSnippet(textA, nameB),
    mentionInB: extractSnippet(textB, nameA)
  };
};