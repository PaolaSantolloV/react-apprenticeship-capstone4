import styled from "styled-components";

export const StyledWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  @media (max-width: 890px) {
    flex-direction: column;
  }
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid #e9ecef;
  border-radius: 4px;
  color: #343a40;
  outline: none;
  width: 100%;

  ::placeholder {
    color: #dee2e6;
  }
`;

export const StyledLabel = styled.h3`
  font-family: "Mulish";
  font-size: x-small;
  font-weight: 400;
  color: #212529;
  margin-top: 20px;
`;
