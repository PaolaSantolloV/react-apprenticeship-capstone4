import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 200px;
  padding-right: 200px;

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

export const StyledContainerRigth = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledContainerLeft = styled.div`
  display: flex;
`;

export const StyledLabel = styled.h1`
  font-family: "Mulish";
  font-weight: bold;
  font-size: large;
  color: #212529;
  cursor: pointer;
`;

export const StyledLabelCountItem = styled.h1`
  font-family: "Mulish";
  font-size: x-small;
  font-weight: 400;
  color: #212529;
  text-align: center;
  margin: 0;
`;

export const StyledWrapperCount = styled.div`
  border: 1px solid #212529;
  border-radius: 24px;
  height: 12px;
  width: 12px;
  margin-left: 4px;
  justify-content: center;
  margin-top: -20px;
`;
