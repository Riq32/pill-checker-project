import { Link, NavLink } from 'react-router-dom';
import { Pill, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const linkBase = "rounded-full px-6 py-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900";
  
  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-neutral-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1">
          <Pill className="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-black tracking-tight text-indigo-950 dark:text-white transition-colors">
            Pill<span className="text-teal-600 dark:text-teal-400">Checker</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            {['Home', 'Check', 'About'].map((item) => (
              <NavLink 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `${linkBase} ${isActive 
                    ? 'bg-teal-600 text-white shadow-md' 
                    : 'text-indigo-900 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-900 dark:hover:text-teal-300 hover:scale-105'}`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full bg-neutral-100 dark:bg-slate-800 text-indigo-900 dark:text-yellow-400 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;