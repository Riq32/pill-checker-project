import { ShieldAlert } from 'lucide-react';

const Disclaimer = () => (
  <footer className="w-full mt-auto py-8 px-4">
    <div className="max-w-5xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-red-200 dark:border-red-900/50 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
      <ShieldAlert className="w-6 h-6 text-red-600 dark:text-red-500 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-bold text-red-900 dark:text-red-400 mb-2 uppercase tracking-wider text-sm">Regulatory & Safety Notice</h4>
        <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed">
          PillChecker is an informational tool querying FDA Structured Product Labeling (SPL) data. It is not a diagnostic tool and does not provide clinical decision support. Interaction mentions rely entirely on string matches within manufacturer-provided fields. Do not alter medication regimens based on this interface. Always consult a licensed healthcare professional for medical advice.
        </p>
      </div>
    </div>
  </footer>
);

export default Disclaimer;