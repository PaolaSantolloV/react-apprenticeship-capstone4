import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tag from "./Tag.component";

describe("<Tag />", () => {
  test("should render Tag correctly", () => {
    const { getByTitle } = render(<Tag />);
    const tags = getByTitle("tag");
    expect(tags).toBeInTheDocument();
  });
});
