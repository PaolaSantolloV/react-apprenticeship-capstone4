import React from "react";
import {
  StyledContainer,
  StyledLabel,
  StyledLinesTable,
  StyledTitle,
} from "./Table.styles";

// eslint-disable-next-line react/prop-types
function Table(tableInformation) {
  return (
    <StyledContainer>
      <StyledLinesTable title="table">
        {tableInformation.tableInformation.length > 0 &&
          tableInformation.tableInformation.map((row) => (
            <tr key={row.spec_name}>
              <StyledTitle>{row.spec_name}</StyledTitle>
              <StyledLabel>{row.spec_value}</StyledLabel>
            </tr>
          ))}
      </StyledLinesTable>
    </StyledContainer>
  );
}

export default Table;
