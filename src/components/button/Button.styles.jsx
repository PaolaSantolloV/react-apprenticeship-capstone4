import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 2px;
  border: none;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-family: "Mulish";
  font-size: medium;
  font-weight: 400;
  color: ${(props) => props.color};
  cursor: pointer;

  &:disabled {
    color: #ffffff;
    background: #e9ecef;
  }
`;
