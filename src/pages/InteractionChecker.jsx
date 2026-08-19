const InteractionChecker = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold text-navy-900 mb-4">Interaction Checker</h1>
      <p className="text-gray-600 mb-8">
        Search for two medicines to view available interaction-related information from their drug labels.
      </p>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 text-left">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Medicine 1</label>
            <input type="text" placeholder="e.g., Aspirin" className="w-full p-3 border border-neutral-300 rounded-md focus:ring-1 focus:ring-navy-800 focus:border-navy-800" />
          </div>
          <div className="flex justify-center text-gray-400 font-bold text-xl">+</div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Medicine 2</label>
            <input type="text" placeholder="e.g., Warfarin" className="w-full p-3 border border-neutral-300 rounded-md focus:ring-1 focus:ring-navy-800 focus:border-navy-800" />
          </div>
          <button className="w-full bg-navy-800 text-white p-4 rounded-md font-semibold hover:bg-navy-900 transition-colors mt-4">
            Check Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractionChecker;