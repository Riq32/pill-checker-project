export const formatMedicineData = (apiResult) => {
  if (!apiResult) return null;
  const openfda = apiResult.openfda || {};
  
  return {
    id: apiResult.id || Math.random().toString(36).substring(2, 9),
    brandName: openfda.brand_name?.[0] || 'Unknown Brand',
    genericName: openfda.generic_name?.[0] || 'Unknown Generic',
    manufacturer: openfda.manufacturer_name?.[0] || 'Unknown Manufacturer',
    route: openfda.route?.[0] || 'Not specified',
    dosageForm: openfda.dosage_form?.[0] || 'Not specified',
    warnings: apiResult.warnings?.[0] || null,
    indications: apiResult.indications_and_usage?.[0] || null,
    activeIngredients: apiResult.active_ingredient?.[0] || null,
    interactions: apiResult.drug_interactions?.[0] || null
  };
};