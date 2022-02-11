import React from "react";
import FormCustumerInformation from "../../components/form/FormCustumerInformation.component";
import { StyledWrapper } from "../../components/form/FormCustumerInformation.styles";
import {
  StyledReturns,
  StyledWrapperLeft,
  StyledWrapperReturns,
  StyledWrapperRight,
} from "./Checkout.styles";

// eslint-disable-next-line react/prop-types
function CheckoutPage() {
  return (
    <>
      <StyledWrapperReturns>
        <StyledReturns> Home /</StyledReturns>
        <StyledReturns> My shopping cart /</StyledReturns>
        <StyledReturns> Information</StyledReturns>
      </StyledWrapperReturns>
      <StyledWrapper>
        <StyledWrapperLeft>
          <FormCustumerInformation />
        </StyledWrapperLeft>
        <StyledWrapperRight>
          <h1>Your order</h1>
          <div>
            <h1>your order table</h1>
          </div>
        </StyledWrapperRight>
      </StyledWrapper>
    </>
  );
}

export default CheckoutPage;
