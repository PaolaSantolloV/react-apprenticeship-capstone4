import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  margin-bottom: 100px;
`;

export const StyledSliderShow = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const StyledSlide = styled.div`
  display: inline-block;
  border-radius: 4px;
  width: 100%;
  position: relative;
  display: inline-block;
  text-align: center;
`;

export const StyledContainerDots = styled.div`
  text-align: center;
`;

export const StyledDots = styled.div`
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  cursor: pointer;
  margin: 5px 7px 0px;
  background-color: #fae1dd;
`;

export const StyledCaption = styled.div`
  position: absolute;
  bottom: 50px;
  right: -4px;
  background-color: #ffffff;
  opacity: 0.75;
  border-radius: 3px;
  width: auto;
  max-width: 75%;
  text-align: end;
  padding-right: 30px;
  padding-left: 30px;

  @media (max-width: 450px) {
    bottom: 15px;
  }
`;

export const StyledLabel = styled.p`
  font-family: "Mulish";
  font-size: unset;
  font-weight: 400;
  color: #212529;
  white-space: break-spaces;

  @media (max-width: 450px) {
    font-size: smaller;
  }
`;
