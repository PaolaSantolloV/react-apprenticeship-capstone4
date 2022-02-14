/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import IconButton from "../iconButton/IconButton.component";
import {
  StyledContainer,
  StyledImage,
  StyledLabel,
  StyledLabelName,
  StyledLabelOrder,
  StyledLabelPrice,
  StyledLabelQuantity,
  StyledLabelTotal,
  StyledLinesTable,
  StyledRow,
  StyledWrapperPrice,
} from "./TableCart.styles";

function TableCart({ tableInformation, handleRemove }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    let calcTotal = 0;
    if (tableInformation !== null && tableInformation.length > 0) {
      tableInformation.map((product) => {
        let productPrice = product.data.price * product.stockOnCart;
        calcTotal = calcTotal + productPrice;
      });
    }
    setTotal(calcTotal);
  }, []);

  return (
    <StyledContainer>
      <StyledLabelOrder>Your order</StyledLabelOrder>
      <StyledLinesTable>
        {tableInformation.length > 0 &&
          tableInformation.map((row) => (
            <StyledRow key={row.id}>
              <th>
                <StyledImage
                  src={row.data.images[0].image.url}
                  alt={row.data.name}
                />
              </th>
              <td>
                <StyledLabelName>{row.data.name}</StyledLabelName>
                <StyledLabel>SKU: {row.data.sku}</StyledLabel>
                <StyledWrapperPrice>
                  <StyledLabelPrice>$ {row.data.price}</StyledLabelPrice>
                  <StyledLabelQuantity>
                    {" "}
                    x {row.stockOnCart}
                  </StyledLabelQuantity>
                </StyledWrapperPrice>
              </td>
              <td>
                <IconButton
                  title="search-icon"
                  size="30px"
                  onClick={() => handleRemove(row)}
                >
                  <FiTrash color="#212529" size="20px" />
                </IconButton>
              </td>
            </StyledRow>
          ))}
      </StyledLinesTable>
      <StyledLabelTotal>Total: $ {total}</StyledLabelTotal>
    </StyledContainer>
  );
}

export default TableCart;
