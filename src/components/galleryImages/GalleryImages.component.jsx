/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function GalleryImages({ images }) {
  const [imagesGallery, setImagesGallery] = useState([]);

  useEffect(() => {
    if (images.length > 0) {
      console.log("ok");
      let imagesArray = [];

      images.map((img) => {
        imagesArray.push({
          original: img.image.url,
          thumbnail: img.image.url,
        });
      });

      setImagesGallery(imagesArray);
    }
  }, []);

  return <ImageGallery items={imagesGallery} showPlayButton={false} />;
}

export default GalleryImages;
