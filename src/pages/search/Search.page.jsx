import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../utils/hooks/useSearch";
import Loading from "../../components/loading/Loading.component";
import ProductCard from "../../components/productCard/ProductCard.component";
import { StyledWrapperProducts } from "./Search.styles";
import Pagination from "../../components/pagination/Pagination.component";

// eslint-disable-next-line react/prop-types
function SearchPage() {
  const navigate = useNavigate();
  const searchTerm = useLocation();
  const search = new URLSearchParams(searchTerm.search).get("q");
  const [currentItems, setCurrentItems] = useState([]);

  const data = useSearch(search);
  const searchResult = data.isLoading === false ? data.data.results : [];

  const handleOnClick = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };

  return (
    <div title="search-page">
      {data.isLoading === true ? (
        <Loading />
      ) : searchResult.length > 0 ? (
        <StyledWrapperProducts>
          {currentItems.map((result) => (
            <ProductCard
              key={result.data.sku}
              name={result.data.name}
              category={result.data.category.slug}
              price={result.data.price}
              image={result.data.images[0].image.url}
              onClick={() => handleOnClick(result.id)}
            />
          ))}
          <Pagination
            products={searchResult}
            setCurrentItems={setCurrentItems}
          />
        </StyledWrapperProducts>
      ) : (
        <h1>We can not find products matching with the search.</h1>
      )}
    </div>
  );
}

export default SearchPage;
