import React, { useState } from "react";
import Layout from "./components/layout/Layout.component";
import HomePage from "./pages/home/Home.page";
import ProductListPage from "./pages/productList/ProductList.page";

function App() {
  const [isHomePage, setIsHomePage] = useState(false);

  const handleNavigateHome = () => {
    setIsHomePage(true);
  };

  const handleNavigateProductList = () => {
    setIsHomePage(false);
  };

  return (
    <Layout handleNavigateHome={handleNavigateHome}>
      {isHomePage === true ? (
        <HomePage handleNavigateProductList={handleNavigateProductList} />
      ) : (
        <ProductListPage />
      )}
    </Layout>
  );
}

export default App;
