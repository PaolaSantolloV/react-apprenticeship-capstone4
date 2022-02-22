import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GlobalContext } from "../../context/global/Global.provider";
import { MemoryRouter } from "react-router-dom";
import ProductDetailPage from "./ProductDetail.page";

describe("<ProductDetail />", () => {
  test("should render ProductDetail correctly", () => {
    const { getByTitle } = render(
      <GlobalContext.Provider>
        <MemoryRouter>
          <ProductDetailPage />
        </MemoryRouter>
      </GlobalContext.Provider>
    );
    const home = getByTitle("product-detail");
    expect(home).toBeInTheDocument();
  });
});
