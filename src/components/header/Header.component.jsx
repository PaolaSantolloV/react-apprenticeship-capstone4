import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import IconButton from "../iconButton/IconButton.component";
import SearchInput from "../searchInput/SearchInput.component";
import {
  StyledContainer,
  StyledContainerLeft,
  StyledContainerRigth,
  StyledLabel,
} from "./Header.styles";

// eslint-disable-next-line react/prop-types
function Header({ handleNavigateHome }) {
  return (
    <StyledContainer title="header">
      <StyledContainerLeft>
        <StyledLabel onClick={handleNavigateHome}>Furniture</StyledLabel>
      </StyledContainerLeft>
      <StyledContainerRigth>
        <SearchInput />
        <IconButton size="30px" title="shop-icon">
          <FiShoppingCart color="#212529" size="20px" />
        </IconButton>
      </StyledContainerRigth>
    </StyledContainer>
  );
}

export default Header;
