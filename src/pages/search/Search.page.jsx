import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "../../utils/hooks/useSearch";
import Loading from "../../components/loading/Loading.component";
import ProductCard from "../../components/productCard/ProductCard.component";
import { StyledLabelEmpty, StyledWrapperProducts } from "./Search.styles";

// eslint-disable-next-line react/prop-types
function SearchPage() {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const data = useSearch(searchTerm);
  const searchResult = data.isLoading === false ? data.data.results : [];
  console.log(searchResult);

  const handleOnClick = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };

  return (
    <div title="search-page">
      {data.isLoading === true ? (
        <Loading />
      ) : searchResult.length > 0 ? (
        <StyledWrapperProducts>
          {searchResult.map((result) => (
            <ProductCard
              key={result.data.sku}
              name={result.data.name}
              category={result.data.category.slug}
              price={result.data.price}
              image={result.data.images[0].image.url}
              onClick={() => handleOnClick(result.id)}
            />
          ))}
        </StyledWrapperProducts>
      ) : (
        <StyledLabelEmpty>
          We can not find products matching with the search.
        </StyledLabelEmpty>
      )}
    </div>
  );
}

export default SearchPage;
