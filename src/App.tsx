import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Products from "./components/Products";
import ProductCard from "./components/productCard"
import Carts from "./components/carts"



function App() {
 
 
  return (
    <div>
    <Router>
      <Navbar/>
      <div className="p-6 bg-purple-50 min-h-screen">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/productCard" element={<ProductCard/>} />
          <Route path="/Carts" element={<Carts />} />
        </Routes>
      </div>
    </Router>

    


   




    
    </div>
  );
}

export default App;
