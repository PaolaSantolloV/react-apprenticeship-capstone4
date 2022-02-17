import React from "react";
import { useNavigate } from "react-router-dom";
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
function Header() {
  const navigate = useNavigate();

  return (
    <StyledContainer title="header">
      <StyledContainerLeft>
        <StyledLabel onClick={() => navigate("/home")}>Furniture</StyledLabel>
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
