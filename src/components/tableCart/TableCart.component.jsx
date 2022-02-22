/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import IconButton from "../iconButton/IconButton.component";
import Button from "../button/Button.component";
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
  StyledWrapperPriceQuantity,
  StyledLabelPriceSelect,
} from "./TableCart.styles";
import { storageCart } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

function TableCart({ tableInformation, handleRemove }) {
  const navigate = useNavigate();
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

  const addItem = (product) => {
    handleRemove(product);
    const productCart = { ...product, stockOnCart: product.stockOnCart + 1 };
    storageCart.set(productCart);
    navigate("/cart");
  };

  const removeItem = (product) => {
    handleRemove(product);
    const productCart = { ...product, stockOnCart: product.stockOnCart - 1 };
    storageCart.set(productCart);
    navigate("/cart");
  };

  return (
    <StyledContainer>
      <StyledLabelOrder title="label-order">Your order</StyledLabelOrder>
      <StyledLinesTable title="table-cart">
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
                <StyledWrapperPriceQuantity>
                  <Button
                    label="-"
                    width="23px"
                    height="23px"
                    bgColor="#E9ECEF"
                    color="#212529"
                    onClick={() => removeItem(row)}
                    disabled={row.stockOnCart - 1 === 0 ? true : false}
                  />
                  <StyledLabelPriceSelect>
                    {row.stockOnCart}
                  </StyledLabelPriceSelect>
                  <Button
                    label="+"
                    width="23px"
                    height="23px"
                    bgColor="#E9ECEF"
                    color="#212529"
                    onClick={() => addItem(row)}
                    disabled={
                      row.stockOnCart + 1 === row.data.stock ? true : false
                    }
                  />
                </StyledWrapperPriceQuantity>
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
