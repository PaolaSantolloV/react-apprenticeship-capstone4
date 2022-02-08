import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading.component";
import Pagination from "../../components/pagination/Pagination.component";
import ProductCard from "../../components/productCard/ProductCard.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import feauturedProducts from "../../utils/mocks/featured-products.json";
import { StyledContainer, StyledWrapperProducts } from "./ProductList.styles";

// eslint-disable-next-line react/prop-types
function ProductListPage() {
  const products =
    feauturedProducts.results.length > 0 ? feauturedProducts.results : [];
  const [listFilterProducts, setListFilterProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    loading();
  }, []);

  function loading() {
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    filterProducts(updatedList);
  };

  const filterProducts = (updatedList) => {
    const productsFiltered = [];
    products.map((product) => {
      let res = updatedList.find((filter) => {
        return filter == product.data.category.id;
      });
      if (res === product.data.category.id) {
        productsFiltered.push(product);
      }
    });
    setListFilterProducts(productsFiltered);
  };

  return (
    <StyledContainer>
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <Sidebar handleCheck={handleCheck} />
          <StyledWrapperProducts>
            {checked.length > 0 ? (
              listFilterProducts.lenght > 0 ? (
                listFilterProducts.map((product) => (
                  <ProductCard
                    key={product.data.sku}
                    name={product.data.name}
                    category={product.data.category.slug}
                    price={product.data.price}
                    image={product.data.images[0].image.url}
                  />
                ))
              ) : (
                <h1>No matching products</h1>
              )
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product.data.sku}
                  name={product.data.name}
                  category={product.data.category.slug}
                  price={product.data.price}
                  image={product.data.images[0].image.url}
                />
              ))
            )}
            {}
          </StyledWrapperProducts>
          <Pagination />
        </>
      )}
    </StyledContainer>
  );
}

export default ProductListPage;
