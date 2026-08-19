import { useLocation, Link } from 'react-router-dom';

const MedicineDetails = () => {
  const location = useLocation();
  const medicine = location.state?.medicineData;

  if (!medicine) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-600 mb-4">No medicine data available.</p>
        <Link to="/" className="text-teal-600 hover:underline font-medium">&larr; Return to search</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => window.history.back()} 
        className="text-gray-500 hover:text-teal-600 mb-6 inline-block font-medium cursor-pointer"
      >
        &larr; Back to results
      </button>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 mb-8">
        <h1 className="text-4xl font-bold text-navy-900 capitalize mb-2">{medicine.brandName}</h1>
        <p className="text-xl text-gray-600 capitalize mb-8">{medicine.genericName}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 bg-neutral-50 p-6 rounded-md border border-neutral-100">
          <p><span className="font-semibold text-gray-800 block mb-1">Manufacturer</span> {medicine.manufacturer}</p>
          <p><span className="font-semibold text-gray-800 block mb-1">Route</span> {medicine.route}</p>
          <p><span className="font-semibold text-gray-800 block mb-1">Dosage Form</span> {medicine.dosageForm}</p>
        </div>
      </div>

      <div className="space-y-6">
        {medicine.activeIngredients && (
          <section className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-bold text-navy-800 mb-3 border-b border-neutral-100 pb-2">Active Ingredients</h3>
            <p className="text-gray-700 leading-relaxed">{medicine.activeIngredients}</p>
          </section>
        )}

        {medicine.indications && (
          <section className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-bold text-navy-800 mb-3 border-b border-neutral-100 pb-2">Indications & Usage</h3>
            <p className="text-gray-700 leading-relaxed">{medicine.indications}</p>
          </section>
        )}

        {medicine.warnings && (
          <section className="bg-amber-50 p-6 rounded-lg border border-amber-200 shadow-sm">
            <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2 border-b border-amber-200/50 pb-2">
              <span className="text-xl">⚠️</span> Warnings
            </h3>
            <p className="text-amber-800 leading-relaxed whitespace-pre-line">{medicine.warnings}</p>
          </section>
        )}

        {medicine.interactions && (
          <section className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <h3 className="text-lg font-bold text-navy-800 mb-3 border-b border-neutral-100 pb-2">Interaction Information</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{medicine.interactions}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default MedicineDetails;