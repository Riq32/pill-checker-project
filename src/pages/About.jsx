import { ShieldCheck, Database, Search, FileText } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 animate-in fade-in duration-500">
      
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900/50 rounded-full mb-4">
          <ShieldCheck className="w-12 h-12 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-950 dark:text-white tracking-tight">
          Clarity before you combine.
        </h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
          PillChecker decodes complex FDA drug labels into a scannable, modern interface so you can find interaction warnings faster.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: <Search />, title: "The Problem", text: "Official drug labels are dense and difficult to read. Important warnings get lost in walls of clinical text." },
          { icon: <FileText />, title: "How It Works", text: "We fetch structured product labeling (SPL) directly from the FDA and organize it into clean, accessible cards." },
          { icon: <Database />, title: "Data Source", text: "Powered exclusively by the OpenFDA API, ensuring all text comes directly from manufacturer-submitted labels." }
        ].map((feature, idx) => (
          <div key={idx} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-xl shadow-indigo-900/5 rounded-2xl p-8 hover:-translate-y-1 transition-all">
            <div className="text-teal-600 dark:text-teal-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-indigo-950 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-slate-300 leading-relaxed">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center border-t border-neutral-200 dark:border-slate-800 pt-10 mb-16">
        <p className="text-sm font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-6">Data Infrastructure Powered By</p>
        <div className="flex gap-8 items-center opacity-70 grayscale">
          <div className="flex items-center gap-2 text-xl font-bold dark:text-slate-300"><Database /> openFDA</div>
          <div className="flex items-center gap-2 text-xl font-bold dark:text-slate-300"><FileText /> RxNorm</div>
        </div>
      </div>
    </div>
  );
};

export default About;