import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-navy-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group">
          <svg className="w-8 h-8 text-teal-400 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span className="text-2xl font-black tracking-tight text-white">
            Pill<span className="text-teal-400">Checker</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 font-medium">
          <Link to="/" className="text-neutral-300 hover:text-teal-400 hover:-translate-y-0.5 transition-all duration-300">Home</Link>
          <Link to="/check" className="text-neutral-300 hover:text-teal-400 hover:-translate-y-0.5 transition-all duration-300">Check</Link>
          <Link to="/about" className="text-neutral-300 hover:text-teal-400 hover:-translate-y-0.5 transition-all duration-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;