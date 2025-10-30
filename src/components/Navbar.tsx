import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-purple-700 text-white p-4 flex justify-between items-center shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
      <div className="text-2xl font-bold">
        <Link
          to="/"
          className="hover:text-purple-300 transition-colors duration-300"
        >
          MyBrand
        </Link>
      </div>
      <div className="flex gap-6">
        <Link to="/Home" className="hover:text-purple-300 transition-colors duration-300">
          Home
        </Link>
        <Link to="/Products" className="hover:text-purple-300 transition-colors duration-300">
          Products
        </Link>
       
         <Link to="/ProductCard" className="hover:text-purple-300 transition-colors duration-300">
          ProductCard
        </Link>
         <Link to="/ carts" className="hover:text-purple-300 transition-colors duration-300">
          carts
        </Link>
        
        
      </div>
    </nav>
  );
}

export default Navbar;
