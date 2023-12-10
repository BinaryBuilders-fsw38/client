import Home from "./pages/Home.jsx";
import Login from "./pages/LoginPage.jsx";
import Register from "./pages/RegisterPage.jsx";
import Product from "./pages/Product.jsx";
import OrderPage from "./pages/Order.jsx";
import Wishlist from "./pages/Wishlist.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
