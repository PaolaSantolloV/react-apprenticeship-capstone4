import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout.component";

describe("<Layout />", () => {
  test("should render header on layout correctly", () => {
    const { getByTitle } = render(<Layout />);
    const header = getByTitle("header");
    expect(header).toBeInTheDocument();
  });

  test("should render footer on layout correctly", () => {
    const { getByTitle } = render(<Layout />);
    const footer = getByTitle("footer");
    expect(footer).toBeInTheDocument();
  });

  test("should render children layout correctly", () => {
    const { getByText } = render(
      <Layout>
        <h1>test-children</h1>
      </Layout>
    );
    const text = getByText("test-children");
    expect(text).toBeInTheDocument();
  });
});
