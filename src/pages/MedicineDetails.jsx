import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MedicineDetails = () => {
  const location = useLocation();
  const medicine = location.state?.medicineData;

  if (!medicine) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 dark:text-slate-300 mb-4">No medicine data found.</p>
        <Link to="/" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <Link to={-1} className="inline-flex items-center gap-2 text-indigo-900 dark:text-teal-400 mb-6 hover:underline font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to results
      </Link>

      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-slate-800 mb-8">
        <h1 className="text-4xl font-bold text-indigo-950 dark:text-white capitalize mb-2">{medicine.brandName}</h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 capitalize mb-6">{medicine.genericName}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-500 dark:text-slate-400 block mb-1">Manufacturer</span>
            <span className="text-indigo-950 dark:text-white">{medicine.manufacturer}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-500 dark:text-slate-400 block mb-1">Dosage Form / Route</span>
            <span className="text-indigo-950 dark:text-white">{medicine.dosageForm} • {medicine.route}</span>
          </div>
        </div>
      </div>

      {medicine.warnings && (
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-slate-800 mb-6">
          <h2 className="text-xl font-bold text-indigo-950 dark:text-white mb-3">Warnings</h2>
          <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line">{medicine.warnings}</p>
        </div>
      )}

      {medicine.interactions && (
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-slate-800 mb-6">
          <h2 className="text-xl font-bold text-indigo-950 dark:text-white mb-3">Drug Interactions</h2>
          <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm whitespace-pre-line">{medicine.interactions}</p>
        </div>
      )}
    </div>
  );
};

export default MedicineDetails;