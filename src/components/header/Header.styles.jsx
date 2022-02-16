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

  @media (max-width: 1020px) {
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
`;
