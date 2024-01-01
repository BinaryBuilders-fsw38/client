import Home from "./pages/Home.jsx";
import Login from "./pages/LoginPage.jsx";
import Register from "./pages/RegisterPage.jsx";
import Product from "./pages/Product.jsx";
import OrderPage from "./pages/Order.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import AddArticle from "./pages/AddArticlePage.jsx";
import AddProduct from "./pages/AddProductPage.jsx";
import ProductReview from "./pages/ProductReviewPage.jsx"
import LoginAdmin from "./pages/LoginPageAdmin.jsx";
import Article from "./pages/Article.jsx";

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
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
        <Route path="/admin/add-article" element={<AddArticle />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/product-review" element={<ProductReview />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
