import styled from "styled-components";

export const Divider = styled.hr`
  border-color: #fec5bb;
  border-top: 0;
`;

export const StyledWrapperFilter = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
`;

export const StyledLabelFilter = styled.h2`
  font-family: "Mulish";
  font-size: unset;
  font-weight: 200;
  color: #212529;
  padding-left: 5px;
  margin: 0;
`;

export const StyledWrapperCategories = styled.div`
  flex-flow: row wrap;
  display: inline-flex;
  margin-top: 9px;

  @media (max-width: 450px) {
    display: flex;
    flex-flow: column;
    flex-direction: column;
  }
`;

export const StyledWrapperCategory = styled.div`
  display: flex;
  margin-top: 3px;
  margin-left: 30px;
`;

export const StyledLabelCategory = styled.h2`
  font-family: "Mulish";
  font-size: unset;
  font-weight: 200;
  color: #212529;
  padding-left: 5px;
  margin: 0;
`;
