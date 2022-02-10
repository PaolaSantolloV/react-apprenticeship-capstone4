/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button.component";
import GalleryImages from "../../components/galleryImages/GalleryImages.component";
import Loading from "../../components/loading/Loading.component";
import Tabs from "../../components/tabs/Tabs.component";
import Tag from "../../components/tag/Tag.component";
import { useDetailProduct } from "../../utils/hooks/useDetailProduct";
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
} from "./ProductDetail.styles";

function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const data = useDetailProduct(productId);
  const productDetail = data.isLoading === false ? data.data.results[0] : [];

  const handleReturn = () => {
    navigate("/products");
  };

  return (
    <div title="product-detail">
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
                {productDetail.data.sku}
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
                      />
                      <StyledLabelPrice>1</StyledLabelPrice>
                      <Button
                        label="+"
                        width="23px"
                        height="23px"
                        bgColor="#E9ECEF"
                        color="#212529"
                      />
                    </StyledWrapperPriceQuantity>
                  </div>
                </StyledWrapperPriceDetails>
                <Button label="Add to Cart" />
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
              <StyledLabelSku>{productDetail.data.sku}</StyledLabelSku>
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
                />
                <StyledLabelPrice>1</StyledLabelPrice>
                <Button
                  label="+"
                  width="23px"
                  height="23px"
                  bgColor="#E9ECEF"
                  color="#212529"
                />
              </StyledWrapperQuantity>
            </StyledWrapperQuantityAll>
            <StyledWrapperPrice>
              <StyledLabelPrice> ${productDetail.data.price} </StyledLabelPrice>
            </StyledWrapperPrice>
            <Button label="Add to Cart" />
          </StyledWrapperCard>
        </>
      )}
    </div>
  );
}

export default ProductDetailPage;
