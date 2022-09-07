import './App.css';
import Headernav from './Components/Headernav';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Usercart from './Components/Usercart';
import {CartProvider} from "react-use-cart"
function App() {
  return (
    <>
    <CartProvider>
    <Headernav/>
    </CartProvider>
    <Router>
        <div className="container">
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Usercart" element={<Usercart />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
