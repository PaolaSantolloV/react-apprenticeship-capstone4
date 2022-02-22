import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header.component";
import { MemoryRouter } from "react-router-dom";

describe("<Header />", () => {
  test("should render header correctly", () => {
    const { getByTitle, getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
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
