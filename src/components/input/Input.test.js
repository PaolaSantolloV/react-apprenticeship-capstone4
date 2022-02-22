import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input.component";

describe("<Input />", () => {
  test("should render Input correctly", () => {
    const { getByTitle } = render(<Input title="test" />);
    const inputComponent = getByTitle("test");
    expect(inputComponent).toBeInTheDocument();
  });
});
