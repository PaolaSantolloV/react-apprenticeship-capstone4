/* eslint-disable react/prop-types */
import React from "react";
import Input from "../input/Input.component";
import {
  StyledLabel,
  StyledTextarea,
  StyledWrapper,
} from "./FormCustumerInformation.styles";

function FormCustumerInformation({ handleChange, formData }) {
  return (
    <>
      <StyledWrapper>
        <Input
          label="First Name"
          title="first-name-input"
          required
          placeholder=""
          widthContainer="48%"
          value={formData.firstName}
          onChange={(event) => handleChange({ fieldName: "firstName", event })}
        />
        <Input
          label="Last Name"
          title="last-name-input"
          required
          placeholder=""
          widthContainer="48%"
          value={formData.lastName}
          onChange={(event) => handleChange({ fieldName: "lastName", event })}
        />
      </StyledWrapper>
      <StyledWrapper>
        <Input
          label="Address"
          title="address-input"
          placeholder=""
          widthContainer="48%"
          value={formData.address}
          onChange={(event) => handleChange({ fieldName: "address", event })}
        />
        <Input
          label="Postal Code"
          title="cp-input"
          required
          placeholder=""
          widthContainer="48%"
          value={formData.cp}
          onChange={(event) => handleChange({ fieldName: "cp", event })}
        />
      </StyledWrapper>
      <StyledWrapper>
        <Input
          label="Email"
          title="email-input"
          required
          placeholder="name@example.com"
          widthContainer="48%"
          value={formData.email}
          onChange={(event) => handleChange({ fieldName: "email", event })}
        />
        <Input
          label="Phone"
          title="phone-input"
          required
          placeholder=""
          widthContainer="48%"
          value={formData.phone}
          onChange={(event) => handleChange({ fieldName: "phone", event })}
        />
      </StyledWrapper>

      <StyledLabel> Notes</StyledLabel>
      <StyledTextarea
        title="note-input"
        name="note"
        rows="6"
        value={formData.notes}
        onChange={(event) => handleChange({ fieldName: "notes", event })}
      />
    </>
  );
}

export default FormCustumerInformation;
