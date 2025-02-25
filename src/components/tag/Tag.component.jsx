import React from "react";
import { StyledContainer, StyledLabel } from "./Tag.styles";

// eslint-disable-next-line react/prop-types
function Tag({ label }) {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
    </StyledContainer>
  );
}
export default Tag;
