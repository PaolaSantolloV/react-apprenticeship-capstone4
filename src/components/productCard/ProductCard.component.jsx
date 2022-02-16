import React from "react";
import {
  StyledContainerCard,
  StyledLabelCategory,
  StyledLabelName,
  StyledLabelPrice,
  StyledWrapperInformation,
} from "./ProductCard.styles";

// eslint-disable-next-line react/prop-types
function ProductCard({ name, category, price, image }) {
  return (
    <StyledContainerCard title="product-card">
      <img src={image} alt={name} width="180" />
      <StyledWrapperInformation>
        <StyledLabelName>{name}</StyledLabelName>
        <StyledLabelCategory>{category}</StyledLabelCategory>
        <StyledLabelPrice>$ {price}</StyledLabelPrice>
      </StyledWrapperInformation>
    </StyledContainerCard>
  );
}

export default ProductCard;
