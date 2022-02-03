import React from "react";
import { StyledContainer, StyledLabel } from "./CategoryCard.styles";

// eslint-disable-next-line react/prop-types
function CategoryCard({ name, image }) {
  return (
    <StyledContainer title="category-card">
      <img title="image-category-card" src={image} alt={name} width="180" />
      <StyledLabel title="title-category-card">{name}</StyledLabel>
    </StyledContainer>
  );
}

export default CategoryCard;
