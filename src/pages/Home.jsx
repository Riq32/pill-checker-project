import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 tracking-tight">
        Check before you combine.
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Explore publicly available medication information through a simple and easy-to-use interface.
      </p>
      
      <div className="w-full mb-8">
        <SearchBar />
      </div>

      <div className="flex gap-4 text-sm text-gray-500 items-center">
        <span className="font-medium">Popular:</span>
        <a href="/search?q=Paracetamol" className="hover:text-teal-600 underline transition-colors">Paracetamol</a>
        <a href="/search?q=Ibuprofen" className="hover:text-teal-600 underline transition-colors">Ibuprofen</a>
        <a href="/search?q=Amoxicillin" className="hover:text-teal-600 underline transition-colors">Amoxicillin</a>
      </div>
    </div>
  );
};

export default Home;