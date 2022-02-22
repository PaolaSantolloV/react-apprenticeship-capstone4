import styled from "styled-components";

export const StyledWrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  height: 70px;

  @media (max-width: 460px) {
    flex-direction: column;
    height: 132px;
  }
`;

export const Separator = styled.div`
  padding: 10px;
`;

export const StyledLabelEmpty = styled.h1`
  font-family: "Mulish";
  font-size: medium;
  font-weight: 500;
  color: #212529;
  text-align: center;
`;
