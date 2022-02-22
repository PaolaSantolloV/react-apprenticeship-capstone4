import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "./Loading.component";

describe("<Loading />", () => {
  test("should render Loading correctly", () => {
    const { getByTitle } = render(<Loading />);
    const load = getByTitle("loading");
    expect(load).toBeInTheDocument();
  });
});
