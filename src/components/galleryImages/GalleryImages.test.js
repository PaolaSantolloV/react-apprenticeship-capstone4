import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GalleryImages from "./GalleryImages.component";

describe("<Gallery />", () => {
  test("should render GalleryImages correctly", () => {
    const data = [
      {
        image: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format",
        },
      },
      {
        image: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/3b54d7d6-5033-4aad-a8f0-eb84032659c0_2.jpeg?auto=compress,format",
        },
      },
      {
        image: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/58dbb943-d02c-4c9b-aed1-c17d47c5476c_3.jpeg?auto=compress,format",
        },
      },
      {
        image: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/910fb56b-e21b-44f9-9f87-3bd2cea8262e_4.webp?auto=compress,format",
        },
      },
      {
        image: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/2d6cb851-6f38-46c9-870a-c5f374a927ca_5.webp?auto=compress,format",
        },
      },
      {
        image: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/9ff1a54a-986b-49fc-a5c4-78d6aca246db_6.webp?auto=compress,format",
        },
      },
      {
        image: {
          dimensions: {
            width: 940,
            height: 1215,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/f7551c24-90b0-4fcc-8d45-86157eafa799_7.webp?auto=compress,format",
        },
      },
      {
        image: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/8332d09a-6fa3-4786-a2a8-2b99c9b45df9_8.webp?auto=compress,format",
        },
      },
    ];

    const setImagesGallery = jest.fn();
    const useImagesGallery = jest.spyOn(React, "useState");
    useImagesGallery.mockImplementation([[], setImagesGallery]);

    const { getByTitle } = render(<GalleryImages images={data} />);
    const gallery = getByTitle("gallery-images");
    expect(gallery).toBeInTheDocument();
  });
});
