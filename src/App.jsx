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
    <div className="min-h-screen flex flex-col">
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
  );
}

export default App;