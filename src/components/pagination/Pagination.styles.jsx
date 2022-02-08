import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 10px;
`;

export const StyledItem = styled.a`
  color: #8a5a44;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  font-family: "Mulish";
  font-size: unset;
  font-weight: 200;

  :hover {
    background-color: #e9ecef;
    color: #8a5a44;
    border-radius: 3px;
  }

  :active {
    background-color: #fec5bb;
    color: white;
    opacity: 0.5;
    border-radius: 3px;
    font-weight: 400;
  }
`;
