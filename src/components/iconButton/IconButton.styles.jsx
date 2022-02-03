import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0;
`;
