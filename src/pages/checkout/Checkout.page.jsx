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
  const [isShowModalError, setIsShowModalError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cp: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = ({ fieldName, event }) => {
    setFormData({
      ...formData,
      [fieldName]: event.currentTarget.value,
    });
  };

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleCloseModalError = () => {
    setIsShowModalError(false);
  };

  const handleOrder = () => {
    console.log(formData);
    if (
      formData.firstName.length > 0 &&
      formData.lastName.length > 0 &&
      formData.cp.length > 0 &&
      formData.phone.length > 0 &&
      formData.email.length > 0
    ) {
      setIsShowModal(true);
      window.localStorage.clear();
      setTimeout(function () {
        setIsShowModal(false);
        navigate("/home");
      }, 2000);
    } else {
      setIsShowModalError(true);
      setTimeout(function () {
        setIsShowModal(false);
      }, 2000);
    }
  };

  return (
    <>
      <Modal show={isShowModal} handleClose={handleCloseModal}>
        <StyledLabelAdded>Order created</StyledLabelAdded>
      </Modal>
      <Modal show={isShowModalError} handleClose={handleCloseModalError}>
        <StyledLabelAdded>
          Please complete the information required.
        </StyledLabelAdded>
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
          <FormCustumerInformation
            handleChange={handleChange}
            formData={formData}
          />
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
