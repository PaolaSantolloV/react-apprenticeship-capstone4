import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 200px;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-left: 200px;
  padding-right: 200px;
  justify-content: space-between;

  @media (max-width: 450px) {
    padding-top: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 1080px) {
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const StyledContainerGrid = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledGridLogo = styled.div`
  width: 70%;
  @media (max-width: 1080px) {
    width: 50%;
  }
`;

export const StyledGridPages = styled.div`
  width: 15%;
  @media (max-width: 1080px) {
    width: 25%;
  }
`;
export const StyledGridSocialMedia = styled.div`
  width: 15%;
  @media (max-width: 1080px) {
    width: 25%;
  }
`;

export const StyledGridIconsSocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin-left: -6px;

  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const StyledContainerCaption = styled.div`
  text-align: center;
`;

export const StyledLabel = styled.h4`
  font-family: "Mulish";
  font-weight: 100;
  font-size: small;
  color: #ffffff;
`;

export const StyledLabelLogo = styled.h1`
  font-family: "Mulish";
  font-weight: bold;
  font-size: large;
  color: #ffffff;
`;
