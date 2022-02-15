import React from "react";
import { useNavigate } from "react-router-dom";
import { RiHandHeartFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import CategoryCard from "../../components/categoryCard/CategoryCard.component";
import ProductCard from "../../components/productCard/ProductCard.component";
import {
  StyledDescription,
  StyledIcon,
  StyledTitle,
  StyledTitleInformaton,
  StyledWrapper,
  StyledWrapperCategories,
  StyledWrapperDescription,
  StyledWrapperInformation,
  StyledWrapperTitle,
  StyledImageAllProducts,
  StyledContainerAllProducts,
  StyledWrapperInformationAllProducts,
  StyledLabelInformationAllProducts,
  StyledContainerProducts,
} from "./Home.styles";
import Slider from "../../components/slider/Slider.component";
import Button from "../../components/button/Button.component";
import { useGlobalContext } from "../../context/global/Global.provider";
import Loading from "../../components/loading/Loading.component";

// eslint-disable-next-line react/prop-types
function HomePage() {
  const navigate = useNavigate();
  const { categoriesResult, feauturedResult } = useGlobalContext();
  const products =
    feauturedResult.isLoading === false ? feauturedResult.data.results : [];
  const categories =
    categoriesResult.isLoading === false ? categoriesResult.data.results : [];

  const handleOnClick = (idProduct) => {
    navigate(`/product/${idProduct}`);
  };

  const handleClickCategory = (slug) => {
    navigate(`/products?category=${slug}`);
  };

  return (
    <div title="home-page">
      <div>
        <Slider />
      </div>
      <StyledWrapperInformation>
        <StyledWrapperDescription>
          <StyledWrapperTitle>
            <StyledIcon>
              <FaShippingFast color="#cb997e" size="50px" />
            </StyledIcon>
            <StyledTitleInformaton>Free Shipping</StyledTitleInformaton>
          </StyledWrapperTitle>
          <StyledDescription>
            Orders over $500 qualify for free Standard Shipping.With free
            shipping, your order is delivered five to eight days after all your
            items are available to ship, including pre-order items.
          </StyledDescription>
        </StyledWrapperDescription>
        <StyledWrapperDescription>
          <StyledWrapperTitle>
            <StyledIcon>
              <RiHandHeartFill color="#cb997e" size="50px" />
            </StyledIcon>
            <StyledTitleInformaton>Hand crafted</StyledTitleInformaton>
          </StyledWrapperTitle>
          <StyledDescription>
            The catalog has options that talk about exemplary craftsmanship,
            durability, style, and rich status. If you are a lover of handcraft
            furniture online, you’d be thrilled to shop the collection from the
            online store.
          </StyledDescription>
        </StyledWrapperDescription>
      </StyledWrapperInformation>
      <StyledWrapperCategories>
        <StyledTitle>Categories</StyledTitle>
        <StyledWrapper>
          {categoriesResult.isLoading === true ? (
            <Loading />
          ) : (
            categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.data.name}
                image={category.data.main_image.url}
                onClick={() => handleClickCategory(category.slugs[0])}
              />
            ))
          )}
        </StyledWrapper>
      </StyledWrapperCategories>
      <StyledContainerProducts>
        <StyledTitle>Feautured products</StyledTitle>
        <StyledWrapper>
          {feauturedResult.isLoading === true ? (
            <Loading />
          ) : (
            products.map((product) => (
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
        </StyledWrapper>
      </StyledContainerProducts>
      <StyledContainerAllProducts>
        <StyledImageAllProducts src="./all-products.jpeg" alt="sofa-woman" />
        <StyledWrapperInformationAllProducts>
          <StyledLabelInformationAllProducts>
            All the furniture products you are looking for are available here,
            enjoy the experience of various furniture.
          </StyledLabelInformationAllProducts>
          <Button
            title="button-all-products"
            label="View All Products"
            onClick={() => navigate("/products")}
          />
        </StyledWrapperInformationAllProducts>
      </StyledContainerAllProducts>
    </div>
  );
}

export default HomePage;
