import React from "react";
import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";
import {
  StyledContainer,
  StyledContainerCaption,
  StyledContainerGrid,
  StyledGridIconsSocialMedia,
  StyledGridLogo,
  StyledGridPages,
  StyledGridSocialMedia,
  StyledLabel,
  StyledLabelLogo,
} from "./Footer.styles";

// eslint-disable-next-line react/prop-types
function Footer() {
  return (
    <StyledContainer title="footer">
      <StyledContainerGrid>
        <StyledGridLogo>
          <StyledLabelLogo>Furniture</StyledLabelLogo>
        </StyledGridLogo>
        <StyledGridPages>
          <StyledLabel>About us</StyledLabel>
          <StyledLabel>Shipping</StyledLabel>
        </StyledGridPages>
        <StyledGridSocialMedia>
          <StyledLabel>Social media</StyledLabel>
          <StyledGridIconsSocialMedia>
            <FiInstagram color="#ffffff" size="15px" />
            <FiYoutube color="#ffffff" size="15px" />
            <FiFacebook color="#ffffff" size="15px" />
          </StyledGridIconsSocialMedia>
        </StyledGridSocialMedia>
      </StyledContainerGrid>
      <StyledContainerCaption>
        <StyledLabel>
          Ecommerce created during Wizeline Academy React Bootcamp
        </StyledLabel>
      </StyledContainerCaption>
    </StyledContainer>
  );
}

export default Footer;
