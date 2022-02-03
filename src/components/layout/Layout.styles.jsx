import styled from "styled-components";

export const StyledLayout = styled.div`
  padding-bottom: 60px;
  padding-top: 12px;
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
