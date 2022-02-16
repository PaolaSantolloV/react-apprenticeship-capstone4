/* eslint-disable react/prop-types */
import React from "react";
import { StyledButton } from "./IconButton.styles.jsx";

function IconButton({ title, children, size, onClick }) {
  return (
    <StyledButton size={size} title={title} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

IconButton.defaultProps = {
  title: "button",
  size: "20px",
};
export default IconButton;
