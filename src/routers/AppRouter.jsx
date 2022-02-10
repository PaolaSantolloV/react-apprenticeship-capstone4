import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout.component";
import HomePage from "../pages/home/Home.page";
import ProductDetailPage from "../pages/productDetail/ProductDetail.page";
import ProductListPage from "../pages/productList/ProductList.page";
import SearchPage from "../pages/search/Search.page";

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/search/:searchTerm" element={<SearchPage />} />
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
