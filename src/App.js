import React, { createContext, useContext, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./utils/useAuth.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/LoginPage.jsx";
import Register from "./pages/RegisterPage.jsx";
import Product from "./pages/Product.jsx";
import OrderPage from "./pages/Order.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import AddArticle from "./pages/AddArticlePage.jsx";
import AddProduct from "./pages/AddProductPage.jsx";
import ProductReview from "./pages/ProductReviewPage.jsx";
import LoginAdmin from "./pages/LoginPageAdmin.jsx";
import Article from "./pages/Article.jsx";
import ProductRecommendation from "./pages/ProductRecommendation.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import FormInputResi from "./pages/FormInputResi.jsx";
import Navbar from "./components/Nav.jsx";
import Cart from "./components/Cart.jsx";
import NavbarLG from "./components/NavbarLoginRgist.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();
  return (
    <AuthProvider>
      <>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <NavbarLG />
        ) : (
          <CartProvider>
            <Navbar />
            <div className="bg-slate-900 ">
              <Cart />
            </div>
          </CartProvider>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/recommendation" element={<ProductRecommendation />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin/add-article" element={<AddArticle />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/product-review/:id" element={<ProductReview />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/article" element={<Article />} />
          <Route path="/payment/:id" element={<PaymentPage />} />
          <Route path="/checkout/:id" element={<CheckoutPage />} />
          <Route path="/admin/input-resi" element={<FormInputResi />} />
        </Routes>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
