import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "./ProductCard.component";

describe("<ProductCard />", () => {
  test("should render ProductCard correctly", () => {
    const { getByTitle } = render(
      <ProductCard
        name="test"
        category="category"
        price="1289"
        image="default.jpg"
      />
    );
    const card = getByTitle("product-card");
    expect(card).toBeInTheDocument();
  });

  test("should render name on ProductCard correctly", () => {
    const { getByText } = render(
      <ProductCard
        name="test"
        category="category"
        price="1289"
        image="default.jpg"
      />
    );
    const name = getByText("test");
    expect(name).toBeInTheDocument();
  });

  test("should render category on ProductCard correctly", () => {
    const { getByText } = render(
      <ProductCard
        name="test"
        category="category-test"
        price="1289"
        image="default.jpg"
      />
    );
    const category = getByText("category-test");
    expect(category).toBeInTheDocument();
  });

  test("should render category on ProductCard correctly", () => {
    const { getByText } = render(
      <ProductCard
        name="test"
        category="category-test"
        price="1289"
        image="default.jpg"
      />
    );
    const price = getByText("$ 1289");
    expect(price).toBeInTheDocument();
  });

  test("should render image on ProductCard correctly", () => {
    const { getByRole } = render(
      <ProductCard
        name="test"
        category="category-test"
        price="1289"
        image="default.jpg"
      />
    );
    const image = getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
