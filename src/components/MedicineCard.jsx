import { Link } from 'react-router-dom';

const getMedicineImage = (form) => {
  const f = (form || '').toLowerCase();
  if (f.includes('tablet') || f.includes('capsule') || f.includes('pill')) {
    return 'https://images.unsplash.com/photo-1584308666744-24d5e4745bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (f.includes('liquid') || f.includes('syrup') || f.includes('solution') || f.includes('suspension')) {
    return 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (f.includes('cream') || f.includes('ointment') || f.includes('gel')) {
    return 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  if (f.includes('injection') || f.includes('syringe')) {
    return 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  }
  // Generic medical fallback
  return 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
};

const MedicineCard = ({ medicine }) => {
  const imageUrl = getMedicineImage(medicine.dosageForm);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
      
      {/* Dynamic Image Header */}
      <div 
        className="h-48 w-full bg-cover bg-center border-b border-neutral-100 group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="p-6 flex flex-col flex-grow relative bg-white">
        <h3 className="text-xl font-bold text-navy-900 mb-1 capitalize truncate" title={medicine.brandName}>
          {medicine.brandName}
        </h3>
        <p className="text-gray-500 text-sm mb-4 capitalize truncate" title={medicine.genericName}>
          {medicine.genericName}
        </p>
        
        <div className="mt-auto space-y-2 mb-6 text-sm text-gray-700 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
          <p className="truncate" title={medicine.manufacturer}>
            <span className="font-semibold text-gray-900">Maker:</span> {medicine.manufacturer}
          </p>
          <p className="truncate" title={medicine.dosageForm}>
            <span className="font-semibold text-gray-900">Form:</span> {medicine.dosageForm}
          </p>
        </div>

        <Link 
          to={`/medicine/${medicine.id}`}
          state={{ medicineData: medicine }}
          className="inline-flex items-center justify-center w-full bg-teal-50 text-teal-700 font-semibold py-3 rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-300"
        >
          View Label Details &rarr;
        </Link>
      </div>
    </div>
  );
};

export default MedicineCard;