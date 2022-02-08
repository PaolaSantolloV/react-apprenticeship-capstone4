import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar.component";

const handleCheck = jest.fn();
describe("<Sidebar />", () => {
  test("should render sidebar correctly", () => {
    const setIsShowCategories = jest.fn();
    const useIsShowCategories = jest.spyOn(React, "useState");
    useIsShowCategories.mockImplementation([false, setIsShowCategories]);

    const { getByTitle } = render(<Sidebar handleCheck={handleCheck} />);
    const sidebarSection = getByTitle("sidebar");
    expect(sidebarSection).toBeInTheDocument();
  });
});
