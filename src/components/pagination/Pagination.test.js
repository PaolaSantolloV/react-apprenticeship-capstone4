import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination.component";

describe("<Pagination />", () => {
  test("should render pagination correctly", () => {
    const { getByTitle, getByText } = render(<Pagination />);
    const paginationSection = getByTitle("pagination");
    const pageOne = getByText("1");
    expect(pageOne).toBeInTheDocument();
    expect(paginationSection).toBeInTheDocument();
  });
});
