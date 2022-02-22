import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button.component";
import TableCart from "../../components/tableCart/TableCart.component";
import { storageCart } from "../../utils/storage";
import {
  Separator,
  StyledLabelEmpty,
  StyledWrapperButtons,
} from "./Cart.styles";

// eslint-disable-next-line react/prop-types
function CartPage() {
  const navigate = useNavigate();
  const productsCart = storageCart.get("products");

  const handleClearCart = () => {
    window.localStorage.clear();
  };

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };

  const handleRemoveProduct = (id) => {
    storageCart.remove(id);
    navigate("/cart");
  };

  return (
    <div>
      {productsCart.length > 0 ? (
        <>
          <TableCart
            tableInformation={productsCart}
            handleRemove={handleRemoveProduct}
          />
          <StyledWrapperButtons>
            <Button
              label="Clear cart"
              onClick={() => handleClearCart}
              bgColor="#E9ECEF"
              color="212529"
            />
            <Separator />
            <Button
              label="Proceed to checkoout"
              onClick={() => handleNavigate("/checkout")}
            />
          </StyledWrapperButtons>
        </>
      ) : (
        <StyledLabelEmpty>
          You dont have products added on your cart.
        </StyledLabelEmpty>
      )}
    </div>
  );
}

export default CartPage;
