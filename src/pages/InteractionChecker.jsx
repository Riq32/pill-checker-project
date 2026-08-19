import { useState } from 'react';
import { AlertCircle, Search } from 'lucide-react';
import { searchMedicines, checkInteractionMentions } from '../services/openfda';

const InteractionChecker = () => {
  const [queryA, setQueryA] = useState('');
  const [queryB, setQueryB] = useState('');
  
  const [drugA, setDrugA] = useState(null);
  const [drugB, setDrugB] = useState(null);
  const [interactionResults, setInteractionResults] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!queryA || !queryB) return;

    setLoading(true);
    setError(null);
    setInteractionResults(null);

    try {
      // Fetch both drugs simultaneously
      const [resA, resB] = await Promise.all([
        searchMedicines(queryA),
        searchMedicines(queryB)
      ]);

      if (!resA.length || !resB.length) {
        setError("Could not find label data for one or both medicines. Please check your spelling.");
        setLoading(false);
        return;
      }

      const foundDrugA = resA[0];
      const foundDrugB = resB[0];

      setDrugA(foundDrugA);
      setDrugB(foundDrugB);

      // Run our substring logic
      const results = checkInteractionMentions(foundDrugA, foundDrugB);
      setInteractionResults(results);

    } catch (err) {
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-4 tracking-tight">Interaction Checker</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Search for two medicines to view available interaction-related information from their official FDA drug labels.
        </p>
      </div>
      
      {/* Search Form (Glassmorphism) */}
      <form onSubmit={handleCheck} className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-indigo-900/5 border border-white/60 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          
          <div>
            <label className="block text-sm font-semibold text-indigo-900 mb-2">Medicine 1</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                value={queryA}
                onChange={(e) => setQueryA(e.target.value)}
                placeholder="e.g., Aspirin" 
                className="w-full pl-10 pr-4 py-3 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white" 
                required
              />
            </div>
          </div>

          <div className="hidden md:flex justify-center text-teal-600 font-black text-2xl pt-6">
            +
          </div>

          <div>
            <label className="block text-sm font-semibold text-indigo-900 mb-2">Medicine 2</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                value={queryB}
                onChange={(e) => setQueryB(e.target.value)}
                placeholder="e.g., Warfarin" 
                className="w-full pl-10 pr-4 py-3 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white" 
                required
              />
            </div>
          </div>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full md:w-auto md:min-w-[200px] mx-auto mt-8 block bg-indigo-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? 'Checking Labels...' : 'Check Interaction'}
        </button>
      </form>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-8 text-center">
          {error}
        </div>
      )}

      {/* Side-by-Side Results View */}
      {interactionResults && drugA && drugB && (
        <div className="animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-8 flex gap-3 shadow-sm">
            <AlertCircle className="text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-900">
              <strong>Not medical advice.</strong> Showing interaction mentions found directly in FDA label text. Absence of a mention does not guarantee safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-xl shadow-indigo-900/5">
            
            {/* Drug A Panel */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-950 border-b border-indigo-100 pb-2 capitalize">
                {drugA.openfda?.brand_name?.[0] || queryA} Label
              </h3>
              {interactionResults.mentionInA ? (
                <p className="text-gray-700 text-sm leading-relaxed italic bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                  {interactionResults.mentionInA}
                </p>
              ) : (
                <p className="text-gray-500 text-sm bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  No mention of {drugB.openfda?.brand_name?.[0] || queryB} found on this label.
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="h-full w-px bg-indigo-100"></div>
              <div className="bg-white border border-indigo-100 text-indigo-400 rounded-full p-2 my-4 text-xs font-bold shadow-sm">VS</div>
              <div className="h-full w-px bg-indigo-100"></div>
            </div>

            {/* Drug B Panel */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-950 border-b border-indigo-100 pb-2 capitalize">
                {drugB.openfda?.brand_name?.[0] || queryB} Label
              </h3>
              {interactionResults.mentionInB ? (
                <p className="text-gray-700 text-sm leading-relaxed italic bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                  {interactionResults.mentionInB}
                </p>
              ) : (
                <p className="text-gray-500 text-sm bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  No mention of {drugA.openfda?.brand_name?.[0] || queryA} found on this label.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractionChecker;