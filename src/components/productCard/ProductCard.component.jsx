import React from "react";
import Button from "../button/Button.component";
import {
  StyledContainerCard,
  StyledLabelCategory,
  StyledLabelName,
  StyledLabelPrice,
  StyledWrapperInformation,
  StyledImage,
} from "./ProductCard.styles";

// eslint-disable-next-line react/prop-types
function ProductCard({ name, category, price, image, onClick }) {
  return (
    <StyledContainerCard title="product-card">
      <StyledImage src={image} alt={name} />
      <StyledWrapperInformation>
        <StyledLabelName>{name}</StyledLabelName>
        <StyledLabelCategory>{category}</StyledLabelCategory>
        <StyledLabelPrice>$ {price}</StyledLabelPrice>
        <Button
          label="Add to Card"
          width="160px"
          height="25px"
          onClick={onClick}
        />
      </StyledWrapperInformation>
    </StyledContainerCard>
  );
}

export default ProductCard;
