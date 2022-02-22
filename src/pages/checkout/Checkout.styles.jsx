import styled from "styled-components";

export const StyledWrapperReturns = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledReturns = styled.div`
  font-family: "Mulish";
  font-size: smaller;
  font-weight: 600;
  color: #8a5a44;
  opacity: 0.5;
  margin-top: 20px;
  padding-right: 3px;
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const StyledWrapperRight = styled.div`
  width: 50%;
  padding-left: 25px;
  @media (max-width: 650px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const StyledWrapperLeft = styled.div`
  width: 50%;
  padding-right: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const StyledWrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;

  @media (max-width: 460px) {
    flex-direction: column;
    height: 132px;
  }
`;

export const StyledLabelAdded = styled.h1`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 500;
  color: #212529;
  text-align: end;
  padding-right: 25px;
  padding-bottom: 10px;
  margin: 0;
`;
