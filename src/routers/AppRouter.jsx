import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout.component";
import CartPage from "../pages/cart/Cart.page";
import CheckoutPage from "../pages/checkout/Checkout.page";
import HomePage from "../pages/home/Home.page";
import ProductDetailPage from "../pages/productDetail/ProductDetail.page";
import ProductListPage from "../pages/productList/ProductList.page";
import SearchPage from "../pages/search/Search.page";
import { storageCart } from "../utils/storage";

function AppRouter() {
  const productsCart = storageCart.get("products");

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route
            exact
            path="/checkout"
            element={
              productsCart.length > 0 ? (
                <CheckoutPage />
              ) : (
                <Navigate replace to="/cart" />
              )
            }
          />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetailPage />}
          />
          <Route exact path="/products" element={<ProductListPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
