import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "../../context/global/Global.provider";
import {
  StyledCaption,
  StyledContainer,
  StyledContainerDots,
  StyledDots,
  StyledImage,
  StyledLabel,
  StyledSlide,
  StyledSliderShow,
} from "./Slider.styles";

// eslint-disable-next-line react/prop-types
function Slider() {
  const { bannersResult } = useGlobalContext();
  const banners =
    bannersResult.isLoading === false ? bannersResult.data.results : [];

  const delay = 5000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <StyledContainer>
      <StyledSliderShow
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {banners.map((banner) => (
          <StyledSlide key={banner.id}>
            <StyledCaption>
              <StyledLabel>{banner.data.description[0].text}</StyledLabel>
            </StyledCaption>
            <StyledImage src={banner.data.main_image.url} alt={banner.id} />
          </StyledSlide>
        ))}
      </StyledSliderShow>
      <StyledContainerDots>
        {banners.map((_, idx) => (
          <StyledDots
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></StyledDots>
        ))}
      </StyledContainerDots>
    </StyledContainer>
  );
}

export default Slider;
