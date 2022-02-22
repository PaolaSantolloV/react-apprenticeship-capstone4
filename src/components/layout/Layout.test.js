import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "./Layout.component";
import { MemoryRouter } from "react-router-dom";

describe("<Layout />", () => {
  test("should render header on layout correctly", () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const header = getByTitle("header");
    expect(header).toBeInTheDocument();
  });

  test("should render footer on layout correctly", () => {
    const { getByTitle } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const footer = getByTitle("footer");
    expect(footer).toBeInTheDocument();
  });

  test("should render children layout correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Layout>
          <h1>test-children</h1>
        </Layout>
      </MemoryRouter>
    );
    const text = getByText("test-children");
    expect(text).toBeInTheDocument();
  });
});
