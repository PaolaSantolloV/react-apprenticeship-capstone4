import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading.component";
import Pagination from "../../components/pagination/Pagination.component";
import ProductCard from "../../components/productCard/ProductCard.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import { useGlobalContext } from "../../context/global/Global.provider";
import { StyledContainer, StyledWrapperProducts } from "./ProductList.styles";

// eslint-disable-next-line react/prop-types
function ProductListPage() {
  const navigate = useNavigate();
  const searchTerm = useLocation();
  const { categoriesResult } = useGlobalContext();
  const category = new URLSearchParams(searchTerm.search).get("category");
  const { productsResult } = useGlobalContext();
  const products =
    productsResult.isLoading === false ? productsResult.data.results : [];
  const [listFilterProducts, setListFilterProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [checked, setChecked] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    loading();
  }, []);

  useEffect(() => {
    let categoriesPath = [];
    if (categoriesResult.isLoading === false) {
      categoriesResult.data.results.map((categoryResult) => {
        if (category === categoryResult.slugs[0]) {
          categoriesPath.push(categoryResult.id);
        }
      });
    }
    setChecked(categoriesPath);
    filterProducts(categoriesPath);
  }, [categoriesResult]);

  function loading() {
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }

  const handleCheck = (event) => {
    const currentIndex = checked.indexOf(event.target.value);
    var newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(event.target.value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    filterProducts(newChecked);
  };

  const handleClearFilters = () => {
    setChecked([]);
    navigate("/products");
  };

  const filterProducts = (updatedList) => {
    const productsFiltered = [];
    products.map((product) => {
      let res = updatedList.find((filter) => {
        return filter === product.data.category.id;
      });
      if (res === product.data.category.id) {
        productsFiltered.push(product);
      }
    });
    setListFilterProducts(productsFiltered);
  };

  const handleOnClick = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };

  return (
    <StyledContainer>
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <Sidebar
            handleCheck={handleCheck}
            handleClearFilters={handleClearFilters}
            checked={checked}
          />
          <StyledWrapperProducts>
            {checked.length > 0 ? (
              listFilterProducts.length > 0 ? (
                listFilterProducts.map((product) => (
                  <ProductCard
                    key={product.data.sku}
                    name={product.data.name}
                    category={product.data.category.slug}
                    price={product.data.price}
                    image={product.data.images[0].image.url}
                    onClick={() => handleOnClick(product.id)}
                  />
                ))
              ) : (
                <h1>No matching products</h1>
              )
            ) : (
              currentItems.map((product) => (
                <ProductCard
                  key={product.data.sku}
                  name={product.data.name}
                  category={product.data.category.slug}
                  price={product.data.price}
                  image={product.data.images[0].image.url}
                  onClick={() => handleOnClick(product.id)}
                />
              ))
            )}
            {}
          </StyledWrapperProducts>
          <Pagination
            products={
              checked.length > 0
                ? listFilterProducts.length > 0
                  ? listFilterProducts
                  : []
                : products
            }
            setCurrentItems={setCurrentItems}
          />
        </>
      )}
    </StyledContainer>
  );
}

export default ProductListPage;
