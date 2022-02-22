import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const StyledLinesTable = styled.table`
  border-collapse: collapse;
`;

export const StyledTitle = styled.th`
  font-family: "Mulish";
  font-size: small;
  font-weight: 400;
  color: #212529;
  text-align: justify;
  border: 1px solid rgb(138, 90, 68, 0.5);
  padding: 10px;
`;

export const StyledWrapperPrice = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLabelName = styled.h2`
  font-family: "Mulish";
  font-size: smaller;
  font-weight: 400;
  color: #212529;
  text-align: justify;
  margin-bottom: 3px;
`;

export const StyledLabelPrice = styled.h2`
  font-family: "Mulish";
  font-size: smaller;
  font-weight: 400;
  color: #212529;
  text-align: justify;
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

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 3px;
  margin-right: 15px;
`;

export const Divider = styled.hr`
  border-color: #fec5bb;
  border-top: 0;
`;

export const StyledLabelOrder = styled.h1`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 500;
  color: #212529;
`;

export const StyledContainerOrder = styled.div`
  box-shadow: 0px 0px 30px -4px #fae1dd;
  border-radius: 3px;
  padding: 15px;
  @media (max-width: 650px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const StyledRow = styled.tr`
  border-bottom: 1px solid #e9ecef;
`;

export const StyledLabelTotal = styled.h2`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 500;
  color: #212529;
  text-align: end;
`;

export const StyledLabelEmpty = styled.h1`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 500;
  color: #212529;
  text-align: center;
`;
