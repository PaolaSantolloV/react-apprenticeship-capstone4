import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 4;
  display: ${(props) => props.display};
`;

export const StyledModalMain = styled.div`
  position: fixed;
  padding: 3px;
  background: #ffffff;
  border-radius: 2px;
  width: 250px;
  top: 8%;
  left: 80%;
  transform: translate(-50%, -50%);
  @media (max-width: 600px) {
    top: 40%;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  place-content: flex-end;
`;
