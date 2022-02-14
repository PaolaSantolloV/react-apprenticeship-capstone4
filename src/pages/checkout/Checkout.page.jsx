import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCustumerInformation from "../../components/form/FormCustumerInformation.component";
import TableCheckout from "../../components/tableCheckout/TableCheckout.component";
import Button from "../../components/button/Button.component";
import {
  StyledReturns,
  StyledWrapperLeft,
  StyledWrapperReturns,
  StyledWrapperRight,
  StyledWrapper,
  StyledWrapperButtons,
  StyledLabelAdded,
} from "./Checkout.styles";
import Modal from "../../components/modal/Modal.component";

// eslint-disable-next-line react/prop-types
function CheckoutPage() {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleOrder = () => {
    setIsShowModal(true);
    window.localStorage.clear();
    setTimeout(function () {
      setIsShowModal(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <>
      <Modal show={isShowModal} handleClose={handleCloseModal}>
        <StyledLabelAdded>Order created</StyledLabelAdded>
      </Modal>
      <StyledWrapperReturns>
        <StyledReturns onClick={() => handleNavigate("/home")}>
          Home /
        </StyledReturns>
        <StyledReturns onClick={() => handleNavigate("/cart")}>
          My shopping cart /
        </StyledReturns>
        <StyledReturns> Information</StyledReturns>
      </StyledWrapperReturns>
      <StyledWrapper>
        <StyledWrapperLeft>
          <FormCustumerInformation />
        </StyledWrapperLeft>
        <StyledWrapperRight>
          <TableCheckout />
        </StyledWrapperRight>
      </StyledWrapper>
      <StyledWrapperButtons>
        <Button
          label="Go back to cart"
          onClick={() => handleNavigate("/cart")}
        />
        <Button label="Place order" onClick={() => handleOrder()} />
      </StyledWrapperButtons>
    </>
  );
}

export default CheckoutPage;
