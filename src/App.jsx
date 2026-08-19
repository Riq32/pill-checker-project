import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Disclaimer from './components/Disclaimer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import MedicineDetails from './pages/MedicineDetails';
import InteractionChecker from './pages/InteractionChecker';
import About from './pages/About';

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col bg-fixed bg-cover bg-center transition-colors duration-500"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
    >
      <div className="absolute inset-0 bg-neutral-50/90 dark:bg-slate-950/90 backdrop-blur-[2px] transition-colors duration-500 z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/medicine/:id" element={<MedicineDetails />} />
            <Route path="/check" element={<InteractionChecker />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Disclaimer />
      </div>
    </div>
  );
}

export default App;