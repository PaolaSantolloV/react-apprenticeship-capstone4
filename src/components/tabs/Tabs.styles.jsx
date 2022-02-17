import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const StyledContainerTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledContainerDescription = styled.div`
  display: ${(props) => props.display};
`;

export const StyledContainerDetails = styled.div`
  display: ${(props) => props.display};
`;

export const StyledLabelDescription = styled.p`
  font-family: "Mulish";
  font-size: small;
  font-weight: 200;
  color: #212529;
  text-align: justify;
`;

export const StyledLabelTitles = styled.h2`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 400;
  color: #8a5a44;
  margin: 0;
  cursor: pointer;
`;

export const StyledWrapperTitle = styled.div`
  border-bottom: ${(props) => props.border};
  opacity: 0.5;
`;
