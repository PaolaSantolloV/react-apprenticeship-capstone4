import styled from "styled-components";

export const StyledContainer = styled.div`
  box-shadow: 0px 0px 30px -4px #fae1dd;
  border-radius: 3px;
  padding: 15px;
  @media (max-width: 650px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const StyledLabelOrder = styled.h1`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 500;
  color: #212529;
`;

export const StyledLinesTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledRow = styled.tr`
  border-bottom: 1px solid #e9ecef;
`;

export const StyledLabelName = styled.h2`
  font-family: "Mulish";
  font-size: smaller;
  font-weight: 400;
  color: #212529;
  text-align: justify;
  margin-bottom: 3px;
`;

export const StyledLabelTotal = styled.h2`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 500;
  color: #212529;
  text-align: end;
`;

export const StyledLabelQuantity = styled.h2`
  font-family: "Mulish";
  font-size: smaller;
  font-weight: 200;
  color: #6c757d;
  text-align: justify;
  padding-left: 8px;
`;

export const StyledLabel = styled.h2`
  font-family: "Mulish";
  font-size: small;
  font-weight: 200;
  color: #6c757d;
  text-align: justify;
  margin: 0;
`;

export const StyledLabelPrice = styled.h2`
  font-family: "Mulish";
  font-size: smaller;
  font-weight: 400;
  color: #212529;
  text-align: justify;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 3px;
  margin-right: 15px;
`;

export const StyledWrapperPrice = styled.div`
  display: flex;
  flex-direction: row;
`;
