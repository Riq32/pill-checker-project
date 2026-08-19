const BASE_URL = 'https://api.fda.gov/drug/label.json';
const ENFORCEMENT_URL = 'https://api.fda.gov/drug/enforcement.json';
const apiCache = new Map();

export const searchMedicines = async (query) => {
  if (!query) return [];
  const safeQuery = encodeURIComponent(query.trim().toLowerCase());
  
  try {
    const response = await fetch(`${BASE_URL}?search=openfda.brand_name:"${safeQuery}"+openfda.generic_name:"${safeQuery}"&limit=50`);
    if (!response.ok) return [];
    
    const data = await response.json();
    const rawResults = data.results || [];

    const cleanedResults = rawResults.map(item => {
      const openfda = item.openfda || {};
      const brand = openfda.brand_name?.[0];
      const generic = openfda.generic_name?.[0];
      
      return {
        ...item,
        primaryName: brand || generic || 'Unknown',
        isBrand: !!brand,
        genericName: generic || 'Not specified',
        dosageForm: openfda.dosage_form?.[0] || 'Unknown Form',
        manufacturer: openfda.manufacturer_name?.[0] || 'Unknown Manufacturer'
      };
    });

    const validResults = cleanedResults.filter(med => med.primaryName !== 'Unknown');

    const seen = new Set();
    const deduplicated = validResults.filter(med => {
      const uniqueKey = `${med.genericName.toLowerCase()}-${med.dosageForm.toLowerCase()}`;
      if (seen.has(uniqueKey)) return false;
      seen.add(uniqueKey);
      return true;
    });

    const sorted = deduplicated.sort((a, b) => (a.isBrand === b.isBrand ? 0 : a.isBrand ? -1 : 1));
    return sorted.slice(0, 15);

  } catch (error) {
    console.error("OpenFDA Search Error:", error);
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

export const checkRecallStatus = async (drugName) => {
  if (!drugName) return null;
  try {
    const query = encodeURIComponent(drugName.toLowerCase());
    const res = await fetch(`${ENFORCEMENT_URL}?search=product_description:"${query}"+AND+status:"Ongoing"&limit=1`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.results?.[0] || null;
  } catch {
    return null; 
  }
};