import { Link } from 'react-router-dom';
import { Pill, Syringe, Droplets, Box } from 'lucide-react';

const FormIcon = ({ form = '' }) => {
  const f = form.toLowerCase();
  if (f.includes('tablet') || f.includes('capsule') || f.includes('pill')) return <Pill className="w-12 h-12 text-teal-500" />;
  if (f.includes('injection') || f.includes('syringe')) return <Syringe className="w-12 h-12 text-teal-500" />;
  if (f.includes('liquid') || f.includes('solution') || f.includes('syrup')) return <Droplets className="w-12 h-12 text-teal-500" />;
  return <Box className="w-12 h-12 text-teal-500" />;
};

const MedicineCard = ({ medicine }) => {
  const brandName = medicine.openfda?.brand_name?.[0] || 'Unknown Brand';
  const genericName = medicine.openfda?.generic_name?.[0] || 'Unknown Generic';
  const form = medicine.openfda?.dosage_form?.[0] || 'Not specified';

  return (
    <div className="bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-indigo-900/5 rounded-2xl p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4 border-b border-indigo-100/50 pb-4">
        <div className="p-3 bg-teal-50 rounded-xl">
          <FormIcon form={form} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-indigo-950 capitalize line-clamp-1">{brandName}</h3>
          <p className="text-sm text-indigo-600 capitalize line-clamp-1">{genericName}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-6 flex-grow"><span className="font-semibold text-gray-900">Form:</span> {form}</p>

      <Link 
        to={`/medicine/${medicine.id}`}
        state={{ medicineData: medicine }}
        className="w-full text-center bg-indigo-50 text-indigo-700 font-semibold py-2.5 rounded-xl hover:bg-indigo-600 hover:text-white transition-colors duration-200"
      >
        View Label
      </Link>
    </div>
  );
};

export default MedicineCard;