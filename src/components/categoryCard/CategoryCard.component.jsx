import React from "react";
import {
  StyledContainer,
  StyledImage,
  StyledLabel,
} from "./CategoryCard.styles";

// eslint-disable-next-line react/prop-types
function CategoryCard({ name, image }) {
  return (
    <StyledContainer title="category-card">
      <StyledImage title="image-category-card" src={image} alt={name} />
      <StyledLabel title="title-category-card">{name}</StyledLabel>
    </StyledContainer>
  );
}

export default CategoryCard;
