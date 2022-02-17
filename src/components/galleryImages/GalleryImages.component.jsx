/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function GalleryImages({ images }) {
  const [imagesGallery, setImagesGallery] = useState([]);

  useEffect(() => {
    if (images.length > 0) {
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

  return (
    <div title="gallery-images">
      <ImageGallery items={imagesGallery} showPlayButton={false} />
    </div>
  );
}

export default GalleryImages;
