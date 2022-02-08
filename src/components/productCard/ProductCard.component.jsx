import React from "react";
import {
  StyledContainerCard,
  StyledLabelCategory,
  StyledLabelName,
  StyledLabelPrice,
  StyledWrapperInformation,
  StyledImage,
} from "./ProductCard.styles";

// eslint-disable-next-line react/prop-types
function ProductCard({ name, category, price, image }) {
  return (
    <StyledContainerCard title="product-card">
      <StyledImage src={image} alt={name} />
      <StyledWrapperInformation>
        <StyledLabelName>{name}</StyledLabelName>
        <StyledLabelCategory>{category}</StyledLabelCategory>
        <StyledLabelPrice>$ {price}</StyledLabelPrice>
      </StyledWrapperInformation>
    </StyledContainerCard>
  );
}

export default ProductCard;
