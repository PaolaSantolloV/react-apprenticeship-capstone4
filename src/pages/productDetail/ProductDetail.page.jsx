/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button.component";
import GalleryImages from "../../components/galleryImages/GalleryImages.component";
import Loading from "../../components/loading/Loading.component";
import Modal from "../../components/modal/Modal.component";
import Tabs from "../../components/tabs/Tabs.component";
import Tag from "../../components/tag/Tag.component";
import { useDetailProduct } from "../../utils/hooks/useDetailProduct";
import { storageCart } from "../../utils/storage";
import {
  StyledContainerDetail,
  StyledImageCart,
  StyledLabelInput,
  StyledLabelName,
  StyledLabelPrice,
  StyledLabelReturn,
  StyledLabelSku,
  StyledWrapperCard,
  StyledWrapperLabel,
  StyledWrapperLeft,
  StyledWrapperPrice,
  StyledWrapperPriceDetail,
  StyledWrapperPriceQuantity,
  StyledWrapperQuantity,
  StyledWrapperQuantityAll,
  StyledWrapperRight,
  StyledLabelReturnMobile,
  StyledLabelNameDetails,
  StyledLabelSkuDetails,
  StyledLabelCategoryDetails,
  StyledLabelPriceDetails,
  StyledWrapperPriceDetails,
  StyledWrapperTags,
  StyledLabelAdded,
} from "./ProductDetail.styles";

function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const data = useDetailProduct(productId);
  const [stock, setStock] = useState(1);
  const [isShowModal, setIsShowModal] = useState(false);
  const productDetail = data.isLoading === false ? data.data.results[0] : [];
  const productCart =
    data.isLoading === false ? { ...productDetail, stockOnCart: stock } : [];
  const isDisabledRemove = stock === 1 ? true : false;
  const isDisabledAdd =
    data.isLoading === false
      ? stock === productDetail.data.stock
        ? true
        : false
      : 1;

  const isDisabledCart =
    data.isLoading === false
      ? productDetail.data.stock === 0
        ? true
        : false
      : 1;

  const handleReturn = () => {
    navigate("/products");
  };

  const addItem = () => {
    setStock(stock + 1);
  };

  const removeItem = () => {
    setStock(stock - 1);
  };

  const handleAddToCart = () => {
    setIsShowModal(true);
    storageCart.set(productCart);
    setTimeout(function () {
      setIsShowModal(false);
    }, 1500);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <div title="product-detail">
      <Modal show={isShowModal} handleClose={handleCloseModal}>
        <StyledLabelAdded>Product added to cart</StyledLabelAdded>
      </Modal>
      {data.isLoading === true ? (
        <Loading />
      ) : (
        <>
          <StyledLabelReturnMobile onClick={handleReturn}>
            Back to all products
          </StyledLabelReturnMobile>
          <StyledContainerDetail>
            <StyledWrapperLeft>
              <GalleryImages images={productDetail.data.images} />
            </StyledWrapperLeft>
            <StyledWrapperRight>
              <StyledLabelReturn onClick={handleReturn}>
                {" "}
                Back to all products
              </StyledLabelReturn>
              <StyledLabelCategoryDetails>
                {productDetail.data.category.slug}
              </StyledLabelCategoryDetails>
              <StyledLabelNameDetails>
                {productDetail.data.name}
              </StyledLabelNameDetails>
              <StyledLabelSkuDetails>
                SKU: {productDetail.data.sku}
              </StyledLabelSkuDetails>
              <StyledWrapperTags>
                {productDetail.tags.length > 0 &&
                  productDetail.tags.map((tagLabel) => (
                    <Tag key={tagLabel} label={tagLabel} />
                  ))}
              </StyledWrapperTags>
              <Tabs
                description={productDetail.data.short_description}
                tableInformation={productDetail.data.specs}
              />
              <StyledWrapperPriceDetail>
                <StyledWrapperPriceDetails>
                  <StyledLabelPriceDetails>
                    ${productDetail.data.price}
                  </StyledLabelPriceDetails>
                  <div>
                    <StyledLabelInput>Number </StyledLabelInput>
                    <StyledWrapperPriceQuantity>
                      <Button
                        label="-"
                        width="23px"
                        height="23px"
                        bgColor="#E9ECEF"
                        color="#212529"
                        onClick={removeItem}
                        disabled={isDisabledRemove}
                      />
                      <StyledLabelPrice>{stock}</StyledLabelPrice>
                      <Button
                        label="+"
                        width="23px"
                        height="23px"
                        bgColor="#E9ECEF"
                        color="#212529"
                        onClick={addItem}
                        disabled={isDisabledAdd}
                      />
                    </StyledWrapperPriceQuantity>
                  </div>
                </StyledWrapperPriceDetails>
                <Button
                  label="Add to Cart"
                  disabled={isDisabledCart}
                  onClick={handleAddToCart}
                />
              </StyledWrapperPriceDetail>
            </StyledWrapperRight>
          </StyledContainerDetail>
          <StyledWrapperCard>
            <StyledImageCart
              title="image-product"
              src={productDetail.data.images[0].image.url}
              alt={productDetail.data.name}
            />
            <StyledWrapperLabel>
              <StyledLabelName>{productDetail.data.name}</StyledLabelName>
              <StyledLabelSku>SKU: {productDetail.data.sku}</StyledLabelSku>
            </StyledWrapperLabel>
            <StyledWrapperQuantityAll>
              <StyledLabelInput>Number </StyledLabelInput>
              <StyledWrapperQuantity>
                <Button
                  label="-"
                  width="23px"
                  height="23px"
                  bgColor="#E9ECEF"
                  color="#212529"
                  onClick={removeItem}
                  disabled={isDisabledRemove}
                />
                <StyledLabelPrice>{stock}</StyledLabelPrice>
                <Button
                  label="+"
                  width="23px"
                  height="23px"
                  bgColor="#E9ECEF"
                  color="#212529"
                  onClick={addItem}
                  disabled={isDisabledAdd}
                />
              </StyledWrapperQuantity>
            </StyledWrapperQuantityAll>
            <StyledWrapperPrice>
              <StyledLabelPrice> ${productDetail.data.price} </StyledLabelPrice>
            </StyledWrapperPrice>
            <Button
              label="Add to Cart"
              disabled={isDisabledCart}
              onClick={handleAddToCart}
            />
          </StyledWrapperCard>
        </>
      )}
    </div>
  );
}

export default ProductDetailPage;
