import styled from "styled-components";

export const StyledWrapperCard = styled.div`
  margin-top: 35px;
  box-shadow: 0px 0px 30px -4px #fae1dd;
  border-radius: 3px;
  z-index: 3;
  width: 96%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const StyledWrapperPriceQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const StyledWrapperPriceDetail = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledContainerDetail = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const StyledWrapperPriceDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const StyledWrapperLeft = styled.div`
  width: 50%;
  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const StyledWrapperRight = styled.div`
  padding: 10px;
  width: 50%;
  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const StyledWrapperLabel = styled.div`
  position: absolute;
  margin-left: 75px;
`;

export const StyledLabelReturn = styled.h1`
  font-family: "Mulish";
  font-weight: 500;
  font-size: smaller;
  color: #8a5a44;
  margin: 0;
  opacity: 0.5;
  display: block;
  cursor: pointer;
  @media (max-width: 580px) {
    display: none;
  }
`;

export const StyledLabelReturnMobile = styled.h2`
  font-family: "Mulish";
  font-weight: 500;
  font-size: smaller;
  color: #8a5a44;
  margin-bottom: 10px;
  opacity: 0.5;
  display: none;
  @media (max-width: 580px) {
    display: block;
  }
`;

export const StyledLabelNameDetails = styled.h2`
  font-family: "Mulish";
  font-weight: 700;
  font-size: revert;
  color: #212529;
  margin: 0;
`;

export const StyledLabelSkuDetails = styled.h2`
  font-family: "Mulish";
  font-weight: 400;
  font-size: medium;
  color: #adb5bd;
  margin: 0;
  margin-bottom: 30px;
`;

export const StyledLabelCategoryDetails = styled.h2`
  font-family: "Mulish";
  font-weight: 300;
  font-size: x-small;
  color: #adb5bd;
  margin-top: 50px;
  margin-bottom: 3px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const StyledLabelPriceDetails = styled.h2`
  font-family: "Mulish";
  font-weight: 500;
  font-size: large;
  color: #212529;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledLabelName = styled.h2`
  font-family: "Mulish";
  font-weight: bold;
  font-size: medium;
  color: #212529;
  display: -webkit-box;
  line-height: 1.3em;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  width: 190px;

  @media (max-width: 1080px) {
    width: 180px;
  }
`;

export const StyledLabelSku = styled.h2`
  font-family: "Mulish";
  font-weight: 500;
  font-size: smaller;
  color: #adb5bd;
  margin: 0;
`;

export const StyledLabelPrice = styled.h2`
  font-family: "Mulish";
  font-weight: 500;
  font-size: large;
  color: #212529;
  margin: 0;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 3px;
`;

export const StyledLabelInput = styled.h2`
  font-family: "Mulish";
  font-weight: 500;
  font-size: x-small;
  color: #212529;
  margin: 0;
`;

export const StyledImageCart = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 3px;
  margin-right: 15px;
`;

export const StyledWrapperQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledWrapperPrice = styled.div`
  position: absolute;
  margin-left: 40%;
  width: 25%;

  @media (max-width: 1350px) {
    margin-left: 33%;
  }
  @media (max-width: 1080px) {
    margin-left: 53%;
  }
  @media (max-width: 850px) {
    margin-left: 50%;
  }
`;

export const StyledWrapperQuantityAll = styled.div`
  position: absolute;
  width: 25%;
  margin-left: 30%;

  @media (max-width: 1350px) {
    margin-left: 25%;
  }
  @media (max-width: 1080px) {
    margin-left: 42%;
  }
  @media (max-width: 850px) {
    margin-left: 37%;
  }
`;

export const StyledWrapperTags = styled.div`
  display: -webkit-inline-box;
  flex-flow: row wrap;
  display: inline-flex;
`;
