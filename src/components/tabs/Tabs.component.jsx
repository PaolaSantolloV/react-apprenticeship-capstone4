import React, { useState } from "react";
import Table from "../table/Table.component";
import {
  StyledContainer,
  StyledContainerDescription,
  StyledContainerDetails,
  StyledContainerTitles,
  StyledLabelDescription,
  StyledLabelTitles,
  StyledWrapperTitle,
} from "./Tabs.styles";

// eslint-disable-next-line react/prop-types
function Tabs({ description, tableInformation }) {
  const [isDescription, setIsDescription] = useState(true);
  const [isDetails, setIsDetails] = useState(false);
  const displayDetails = isDetails === false ? "none" : "flex";
  const displayDescription = isDescription === false ? "none" : "flex";
  const borderDetails = isDetails === false ? "none" : "2px solid #8a5a44";
  const borderDescription =
    isDescription === false ? "none" : "2px solid #8a5a44";

  const handleOnClick = () => {
    setIsDescription(!isDescription);
    setIsDetails(!isDetails);
  };

  return (
    <StyledContainer>
      <StyledContainerTitles>
        <StyledWrapperTitle border={borderDescription}>
          <StyledLabelTitles onClick={handleOnClick}>
            Descripcion
          </StyledLabelTitles>
        </StyledWrapperTitle>
        <StyledWrapperTitle border={borderDetails}>
          <StyledLabelTitles onClick={handleOnClick}>Details</StyledLabelTitles>
        </StyledWrapperTitle>
      </StyledContainerTitles>

      <StyledContainerDescription display={displayDescription}>
        <StyledLabelDescription>{description}</StyledLabelDescription>
      </StyledContainerDescription>
      <StyledContainerDetails display={displayDetails}>
        <Table tableInformation={tableInformation} />
      </StyledContainerDetails>
    </StyledContainer>
  );
}

export default Tabs;
