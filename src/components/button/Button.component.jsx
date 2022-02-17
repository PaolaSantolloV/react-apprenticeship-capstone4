import React from "react";
import { StyledButton } from "./Button.styles";

// eslint-disable-next-line react/prop-types
function Button({ title, label, onClick, width, color, bgColor, height }) {
  return (
    <StyledButton
      title={title}
      onClick={onClick}
      width={width}
      color={color}
      bgColor={bgColor}
      height={height}
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
