import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.size};
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0;
  cursor: pointer;
`;
