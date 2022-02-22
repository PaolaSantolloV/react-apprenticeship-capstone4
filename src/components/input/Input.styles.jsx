import styled from "styled-components";

export const StyledContainer = styled.div`
  width: ${(props) => props.width};
  @media (max-width: 890px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  width: ${(props) => props.width};
  border: 1px solid #e9ecef;
  border-radius: 4px;
  color: #343a40;
  height: 30px;
  outline: none;

  ::placeholder {
    color: #dee2e6;
  }
`;

export const StyledWrapperLabel = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLabelRequired = styled.h3`
  color: #ed4f33;
  font-family: "Mulish";
  font-size: x-small;
  font-weight: 400;
  padding-left: 5px;
  margin-top: 20px;
`;

export const StyledLabel = styled.h3`
  font-family: "Mulish";
  font-size: x-small;
  font-weight: 400;
  color: #212529;
  margin-top: 20px;
`;
