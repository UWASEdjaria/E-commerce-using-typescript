import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductList from "./components/ProductList";


function App() {
  return (
    
    <Router>
     
      <Navbar />
      <div className="p-6 bg-purple-50 min-h-screen">
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/ProductList" element={<ProductList />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
