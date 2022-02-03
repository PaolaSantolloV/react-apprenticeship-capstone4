import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./Home.page";

describe("<HomePage />", () => {
  test("should render HomePage correctly", () => {
    const { getByTitle } = render(<HomePage />);
    const home = getByTitle("home-page");
    expect(home).toBeInTheDocument();
  });
});
