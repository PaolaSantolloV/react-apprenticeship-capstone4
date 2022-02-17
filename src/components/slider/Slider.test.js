import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Slider from "./Slider.component";
import GlobalProvider from "../../context/global/Global.provider";

describe("<Slider />", () => {
  test("should render slider correctly", () => {
    const { getByTitle } = render(
      <GlobalProvider>
        <Slider />
      </GlobalProvider>
    );
    const slide = getByTitle("slider");
    expect(slide).toBeInTheDocument();
  });
});
