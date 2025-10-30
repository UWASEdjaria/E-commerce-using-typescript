import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-700  text-white p-4 flex justify-between items-center drop-shadow-lg rounded-lg transition-all duration-300 hover:scale-105  bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900">
    
      <div className="text-2xl font-bold">
        <Link
          to="/"
          className="hover:text-purple-300 transition-colors duration-300"
        >
          MyBrand
        </Link>
      </div>

  
      <div className="flex gap-6">
        <Link
          to="/Header"
          className="hover:text-purple-300 transition-colors duration-300"
        >
          Header
        </Link>
        <Link
          to="/ProductList"
          className="hover:text-purple-300 transition-colors duration-300"
        >
          Product List
        </Link>

    
      </div>
      
    </nav>
  );
}

export default Navbar;
