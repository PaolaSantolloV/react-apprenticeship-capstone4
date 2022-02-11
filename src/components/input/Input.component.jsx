/* eslint-disable react/prop-types */
import React from "react";
import {
  StyledContainer,
  StyledInput,
  StyledLabel,
  StyledLabelRequired,
  StyledWrapperLabel,
} from "./Input.styles";

function Input({
  title,
  placeholder,
  label,
  width,
  widthContainer,
  required,
  onChange,
  type,
}) {
  return (
    <StyledContainer width={widthContainer} title={title}>
      <StyledWrapperLabel>
        <StyledLabel>{label}</StyledLabel>
        {required === true && <StyledLabelRequired>*</StyledLabelRequired>}
      </StyledWrapperLabel>

      <StyledInput
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        type={type}
      />
    </StyledContainer>
  );
}

Input.defaultProps = {
  type: "text",
  width: "100%",
};

export default Input;
