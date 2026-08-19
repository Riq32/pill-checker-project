import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 rounded-3xl overflow-hidden relative shadow-lg mt-4"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(23, 37, 84, 0.85), rgba(20, 184, 166, 0.85)), url("https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 w-full max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
          Check before you combine.
        </h1>
        <p className="text-xl text-neutral-100 mb-10 drop-shadow">
          Explore publicly available medication information through a simple and easy-to-use interface.
        </p>
        
        <div className="w-full mb-8 shadow-2xl rounded-lg">
          <SearchBar />
        </div>

        <div className="flex gap-4 text-sm text-neutral-200 justify-center items-center font-medium">
          <span>Popular:</span>
          <a href="/search?q=Paracetamol" className="hover:text-white hover:underline transition-all">Paracetamol</a>
          <a href="/search?q=Ibuprofen" className="hover:text-white hover:underline transition-all">Ibuprofen</a>
          <a href="/search?q=Amoxicillin" className="hover:text-white hover:underline transition-all">Amoxicillin</a>
        </div>
      </div>
    </div>
  );
};

export default Home;