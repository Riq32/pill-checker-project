import { Link } from 'react-router-dom';

const MedicineCard = ({ medicine }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow flex flex-col h-full">
      <h3 className="text-xl font-semibold text-navy-900 mb-1 capitalize">{medicine.brandName}</h3>
      <p className="text-gray-600 text-sm mb-4 capitalize">{medicine.genericName}</p>
      
      <div className="mt-auto space-y-2 mb-4 text-sm text-gray-700">
        <p><span className="font-medium text-gray-900">Manufacturer:</span> {medicine.manufacturer}</p>
        <p><span className="font-medium text-gray-900">Form:</span> {medicine.dosageForm}</p>
      </div>

      <Link 
        to={`/medicine/${medicine.id}`}
        state={{ medicineData: medicine }}
        className="text-teal-600 font-medium hover:text-teal-700 mt-2 inline-block transition-colors"
      >
        View Details &rarr;
      </Link>
    </div>
  );
};

export default MedicineCard;