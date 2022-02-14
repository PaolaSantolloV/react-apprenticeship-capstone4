import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import IconButton from "../iconButton/IconButton.component";
import SearchInput from "../searchInput/SearchInput.component";
import {
  StyledContainer,
  StyledContainerLeft,
  StyledContainerRigth,
  StyledLabel,
  StyledLabelCountItem,
  StyledWrapperCount,
} from "./Header.styles";
import { storageCart } from "../../utils/storage";

// eslint-disable-next-line react/prop-types
function Header() {
  const navigate = useNavigate();
  const productsCart = storageCart.get("products");
  const [items, setItems] = useState(0);

  const handleNavigateCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    let countItems = 0;
    if (productsCart === null) {
      setItems(0);
    } else if (productsCart.length > 0) {
      productsCart.map((product) => {
        countItems = countItems + product.stockOnCart;
      });
    }
    setItems(countItems);
  }, []);

  return (
    <StyledContainer title="header">
      <StyledContainerLeft>
        <StyledLabel onClick={() => navigate("/home")}>Furniture</StyledLabel>
      </StyledContainerLeft>
      <StyledContainerRigth>
        <SearchInput />
        <IconButton
          size="30px"
          width="50px"
          title="shop-icon"
          onClick={handleNavigateCart}
        >
          <FiShoppingCart color="#212529" size="20px" />
          {items > 0 && (
            <StyledWrapperCount>
              <StyledLabelCountItem>{items}</StyledLabelCountItem>
            </StyledWrapperCount>
          )}
        </IconButton>
      </StyledContainerRigth>
    </StyledContainer>
  );
}

export default Header;
