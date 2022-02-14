import React from "react";
import Input from "../input/Input.component";
import {
  StyledLabel,
  StyledTextarea,
  StyledWrapper,
} from "./FormCustumerInformation.styles";

// eslint-disable-next-line react/prop-types
function FormCustumerInformation() {
  return (
    <>
      <StyledWrapper>
        <Input
          label="First Name"
          title="first-name-input"
          required
          placeholder=""
          widthContainer="48%"
        />
        <Input
          label="Last Name"
          title="last-name-input"
          required
          placeholder=""
          widthContainer="48%"
        />
      </StyledWrapper>
      <StyledWrapper>
        <Input
          label="Address"
          title="address-input"
          placeholder=""
          widthContainer="48%"
        />
        <Input
          label="Postal Code"
          title="cp-input"
          required
          placeholder=""
          widthContainer="48%"
        />
      </StyledWrapper>
      <StyledWrapper>
        <Input
          label="Email"
          title="email-input"
          required
          placeholder="name@example.com"
          widthContainer="48%"
        />
        <Input
          label="Phone"
          title="phone-input"
          required
          placeholder=""
          widthContainer="48%"
        />
      </StyledWrapper>

      <StyledLabel> Notes</StyledLabel>
      <StyledTextarea title="note-input" name="note" rows="6" />
    </>
  );
}

export default FormCustumerInformation;
