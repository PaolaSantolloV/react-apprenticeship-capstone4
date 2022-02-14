/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { storageCart } from "../../utils/storage";
import {
  StyledImage,
  StyledLinesTable,
  StyledLabel,
  StyledLabelName,
  StyledLabelPrice,
  StyledWrapperPrice,
  StyledLabelQuantity,
  StyledLabelOrder,
  StyledContainerOrder,
  StyledRow,
  StyledLabelTotal,
  StyledLabelEmpty,
} from "./TableCheckout.syles";

function TableCheckout() {
  const productsCart = storageCart.get("products");
  const [total, setTotal] = useState();

  useEffect(() => {
    let calcTotal = 0;
    if (productsCart !== null && productsCart.length > 0) {
      productsCart.map((product) => {
        let productPrice = product.data.price * product.stockOnCart;
        calcTotal = calcTotal + productPrice;
      });
    }
    setTotal(calcTotal);
  }, []);

  return (
    <StyledContainerOrder>
      <StyledLabelOrder>Your order</StyledLabelOrder>
      <StyledLinesTable>
        {productsCart === null ? (
          <StyledLabelEmpty>
            You dont have products on your cart.
          </StyledLabelEmpty>
        ) : (
          productsCart.length > 0 &&
          productsCart.map((row) => (
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
            </StyledRow>
          ))
        )}
      </StyledLinesTable>
      <StyledLabelTotal>Total: $ {total} </StyledLabelTotal>
    </StyledContainerOrder>
  );
}

export default TableCheckout;
