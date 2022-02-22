/* eslint-disable react/prop-types */
import React from "react";
import { StyledButton } from "./Button.styles";

function Button({
  title,
  label,
  onClick,
  width,
  color,
  bgColor,
  height,
  disabled,
}) {
  return (
    <StyledButton
      title={title}
      onClick={onClick}
      width={width}
      color={color}
      bgColor={bgColor}
      height={height}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "#ffffff",
  bgColor: "#212529",
  width: "200px",
  height: "40px",
};
export default Button;
