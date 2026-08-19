import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-4 animate-in fade-in duration-500">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-950 dark:text-white tracking-tight mb-4">
        Check Medicine Interactions <span className="text-teal-600 dark:text-teal-400">Safely</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mb-8">
        Search FDA drug labels and quickly identify potential interactions or warnings before combining medications.
      </p>
      
      <div className="w-full max-w-3xl mb-12">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;