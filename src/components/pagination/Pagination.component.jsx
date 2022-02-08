import React from "react";
import { StyledContainer, StyledItem } from "./Pagination.styles";

// eslint-disable-next-line react/prop-types
function Pagination() {
  return (
    <StyledContainer title="pagination">
      <StyledItem href="#">&laquo;</StyledItem>
      <StyledItem href="#">1</StyledItem>
      <StyledItem href="#">2</StyledItem>
      <StyledItem href="#">3</StyledItem>
      <StyledItem href="#">4</StyledItem>
      <StyledItem href="#">5</StyledItem>
      <StyledItem href="#">6</StyledItem>
      <StyledItem href="#">&raquo;</StyledItem>
    </StyledContainer>
  );
}

export default Pagination;
