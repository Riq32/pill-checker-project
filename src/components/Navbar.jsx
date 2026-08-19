import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-navy-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">
          PillChecker
        </Link>
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
          <Link to="/check" className="hover:text-teal-500 transition-colors">Check</Link>
          <Link to="/about" className="hover:text-teal-500 transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;