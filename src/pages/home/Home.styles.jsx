import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: -webkit-inline-box;
  flex-flow: row wrap;
  display: inline-flex;
  justify-content: center;
`;

export const StyledWrapperCategories = styled.div`
  padding: 20px;
  background-color: #d8e2dc;
  border-radius: 3px;
  margin-bottom: 100px;
`;

export const StyledTitle = styled.h1`
  font-family: "Mulish";
  font-size: xx-large;
  font-weight: 400;
  color: #212529;
  text-align: center;
  margin: revert;
`;

export const StyledTitleInformaton = styled.h1`
  font-family: "Mulish";
  font-size: xx-large;
  font-weight: 400;
  color: #8a5a44;
  margin: revert;
  padding-left: 10px;
`;

export const StyledDescription = styled.p`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 300;
  color: #8a5a44;
  margin: revert;
`;

export const StyledWrapperDescription = styled.div`
  margin: 20px;
`;

export const StyledWrapperInformation = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledWrapperTitle = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const StyledIcon = styled.div`
  opacity: 0.75;
`;

export const StyledContainerProducts = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

export const StyledContainerAllProducts = styled.div`
  background-color: #ffe5d9;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledImageAllProducts = styled.img`
  width: 58%;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  @media (max-width: 600px) {
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-right-radius: 3px;
  }
`;

export const StyledWrapperInformationAllProducts = styled.div`
  padding: 20px;
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
  text-align: end;
  align-items: end;
`;

export const StyledLabelInformationAllProducts = styled.p`
  font-size: medium;
  font-weight: 200;
  color: #212529;
  font-family: "Mulish";
`;
