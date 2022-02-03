import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer.component";

describe("<Footer />", () => {
  test("should render footer correctly", () => {
    const { getByText } = render(<Footer />);
    const logo = getByText("Furniture");
    const about = getByText("About us");
    const shipping = getByText("Shipping");
    const social = getByText("Social media");
    expect(logo).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(shipping).toBeInTheDocument();
    expect(social).toBeInTheDocument();
  });
});
