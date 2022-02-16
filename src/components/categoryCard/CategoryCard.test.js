import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryCard from "./CategoryCard.component";

describe("<CategoryCard />", () => {
  test("should render categoryCard correctly", () => {
    const { getByTitle } = render(
      <CategoryCard name="test" image="default.jpg" />
    );
    const card = getByTitle("category-card");
    const image = getByTitle("image-category-card");
    const title = getByTitle("title-category-card");
    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
