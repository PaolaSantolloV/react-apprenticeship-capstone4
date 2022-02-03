import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header.component";

describe("<Header />", () => {
  test("should render header correctly", () => {
    const { getByTitle, getByText } = render(<Header />);
    const headerContainer = getByTitle("header");
    const logo = getByText("Furniture");
    const searchInput = getByTitle("search");
    const shopIcon = getByTitle("shop-icon");
    expect(headerContainer).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(shopIcon).toBeInTheDocument();
  });
});
