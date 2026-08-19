import { Link, NavLink } from 'react-router-dom';
import { Pill } from 'lucide-react';

const Navbar = () => {
  const linkBase = "rounded-full px-6 py-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2";
  
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-neutral-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1">
          <Pill className="w-8 h-8 text-teal-600 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-black tracking-tight text-indigo-950">
            Pill<span className="text-teal-600">Checker</span>
          </span>
        </Link>

        <div className="flex gap-2">
          {['Home', 'Check', 'About'].map((item) => (
            <NavLink 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) => 
                `${linkBase} ${isActive 
                  ? 'bg-teal-600 text-white shadow-md' 
                  : 'text-indigo-900 hover:bg-teal-50 hover:text-teal-900 hover:scale-105'}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;