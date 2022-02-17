import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./Home.page";
import { GlobalContext } from "../../context/global/Global.provider";
import { MemoryRouter } from "react-router-dom";

describe("<HomePage />", () => {
  test("should render HomePage correctly", () => {
    const { getByTitle } = render(
      <GlobalContext.Provider>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </GlobalContext.Provider>
    );
    const home = getByTitle("home-page");
    expect(home).toBeInTheDocument();
  });
});
