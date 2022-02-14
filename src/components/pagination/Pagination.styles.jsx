import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 10px;

  .next {
    display: flex;
    color: #8a5a44;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    font-family: "Mulish";
    font-size: unset;
    font-weight: 200;
    text-transform: uppercase;
    list-style-type: none;
    align-items: center;

    :hover {
      background-color: #e9ecef;
      color: #8a5a44;
      border-radius: 3px;
    }
  }

  .previous {
    display: flex;
    color: #8a5a44;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    font-family: "Mulish";
    font-size: unset;
    font-weight: 200;
    text-transform: uppercase;
    list-style-type: none;
    align-items: center;

    :hover {
      background-color: #e9ecef;
      color: #8a5a44;
      border-radius: 3px;
    }
  }

  .ul {
    list-style-type: none;
    display: flex;
    height: 35px;
  }

  .active {
    background-color: #fec5bb;
    color: white;
    opacity: 0.5;
    border-radius: 3px;
    font-weight: 400;
  }

  .page-item {
    color: #8a5a44;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    font-family: "Mulish";
    font-size: unset;
    font-weight: 200;

    :hover {
      background-color: #e9ecef;
      color: #8a5a44;
      border-radius: 3px;
    }
  }
`;

export const StyledItem = styled.a`
  color: #8a5a44;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  font-family: "Mulish";
  font-size: unset;
  font-weight: 200;

  :hover {
    background-color: #e9ecef;
    color: #8a5a44;
    border-radius: 3px;
  }

  :active {
    background-color: #fec5bb;
    color: white;
    opacity: 0.5;
    border-radius: 3px;
    font-weight: 400;
  }
`;
