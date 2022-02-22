import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableCart from "./TableCart.component";
import { MemoryRouter } from "react-router-dom";

describe("<TableCart />", () => {
  test("should render tableCart correctly when empty tableInformation", () => {
    const tableInformation = [];
    const onClick = jest.fn();
    const { getByTitle } = render(
      <MemoryRouter>
        <TableCart tableInformation={tableInformation} handleRemove={onClick} />
      </MemoryRouter>
    );
    const tableComponent = getByTitle("table-cart");
    const title = getByTitle("label-order");
    expect(title).toBeInTheDocument();
    expect(tableComponent).toBeInTheDocument();
  });
  test("should render tableCart correctly ", () => {
    const tableInformation = {
      data: {
        name: "Desk Lamp Ezra",
        sku: "1102665992",
        category: {
          id: "YWHy0xIAACoAykKm",
          type: "category",
          tags: [],
          slug: "lighting",
          lang: "en-us",
          first_publication_date: "2021-10-09T23:32:20+0000",
          last_publication_date: "2021-10-13T00:04:48+0000",
          link_type: "Document",
          isBroken: false,
        },
        mainimage: {
          dimensions: {
            width: 696,
            height: 900,
          },
          alt: "Desk Lamp Ezra",
          copyright: null,
          url: "https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format",
        },
        short_description:
          "Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.",
        description: [
          {
            type: "paragraph",
            text: "Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.",
            spans: [],
          },
        ],
        specs: [
          {
            spec_name: "Base Material",
            spec_value: "Ceramic",
          },
          {
            spec_name: "Collection",
            spec_value: "Ezra",
          },
          {
            spec_name: "Watts",
            spec_value: "60 W",
          },
          {
            spec_name: "Weight",
            spec_value: "2.26 kg",
          },
          {
            spec_name: "Dimensions",
            spec_value:
              "Measurements: 16.51 cm diameter x 55.8 cm high approximate",
          },
        ],
        images: [
          {
            image: {
              dimensions: {
                width: 696,
                height: 900,
              },
              alt: null,
              copyright: null,
              url: "https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format",
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
              url: "https://images.prismic.io/wizeline-academy/d4dfb5e0-1f35-4ba7-a61b-e5e5f7b4e7bb_2.jpeg?auto=compress,format",
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
              url: "https://images.prismic.io/wizeline-academy/5e69abf6-972e-4595-9a4f-86ae1b0b8b83_3.webp?auto=compress,format",
            },
          },
        ],
        stock: 9,
        price: 147,
      },
      first_publication_date: "2021-11-18T16:07:25+0000",
      href: "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ6OhIAACgAvlE1%22%29+%5D%5D",
      id: "YZZ6OhIAACgAvlE1",
      lang: "en-us",
      last_publication_date: "2021-11-18T16:08:09+0000",
      linked_documents: [],
      slugs: [("desk-lamp-ezra", "lampara-de-buro-ezra")],
      stockOnCart: 2,
      tags: [("Lamps", "Featured")],
      type: "product",
      uid: null,
      url: null,
    };
    const onClick = jest.fn();
    const { getByTitle } = render(
      <MemoryRouter>
        <TableCart tableInformation={tableInformation} handleRemove={onClick} />
      </MemoryRouter>
    );
    const tableComponent = getByTitle("table-cart");
    const title = getByTitle("label-order");
    expect(title).toBeInTheDocument();
    expect(tableComponent).toBeInTheDocument();
  });
});
