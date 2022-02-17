import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar.component";
import GlobalProvider from "../../context/global/Global.provider";

const handleCheck = jest.fn();
describe("<Sidebar />", () => {
  test("should render sidebar correctly", () => {
    const checkedData = [];
    const { getByTitle } = render(
      <GlobalProvider>
        <Sidebar checked={checkedData} handleCheck={handleCheck} />
      </GlobalProvider>
    );
    const sidebarSection = getByTitle("sidebar");
    expect(sidebarSection).toBeInTheDocument();
  });
});
