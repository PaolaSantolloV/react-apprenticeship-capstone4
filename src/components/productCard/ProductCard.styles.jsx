import styled from "styled-components";

export const StyledContainerCard = styled.div`
  background: #ffffff;
  border-radius: 3px;
  width: 180px;
  height: 310px;
  display: flex;
  flex-direction: column;
  margin: 15px;

  :hover {
    box-shadow: 0px 0px 30px -4px #fec5bb;
  }
`;

export const StyledLabelName = styled.h2`
  font-family: "Mulish";
  font-size: unset;
  font-weight: 400;
  color: #212529;
  margin: 0;

  display: -webkit-box;
  line-height: 1.3em;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledWrapperInformation = styled.div`
  text-align: center;
`;

export const StyledLabelPrice = styled.h2`
  font-family: "Mulish";
  font-size: unset;
  font-weight: 300;
  color: #212529;
`;

export const StyledLabelCategory = styled.h2`
  font-family: "Mulish";
  font-size: small;
  font-weight: 300;
  color: #212529;
  margin: 0;
  text-transform: uppercase;
`;
