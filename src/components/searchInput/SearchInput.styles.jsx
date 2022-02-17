import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  border: ${(props) => props.border};
  border-radius: 20px;
  width: ${(props) => props.width};
  align-items: center;
  padding-left: 5px;
  padding-right: 3px;
`;

export const StyledInput = styled.input`
  display: ${(props) => props.display};
  border: none;
  background: transparent;
  width: 91px;
  outline: none;
`;
