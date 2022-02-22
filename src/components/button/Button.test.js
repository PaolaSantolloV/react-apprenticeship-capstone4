import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button.component";

describe("<Button />", () => {
  test("should render Button correctly", () => {
    const onClick = jest.fn();
    const { getByTitle } = render(
      <Button title="test" label="testButton" onClick={onClick} />
    );
    const button = getByTitle("test");
    expect(button).toBeInTheDocument();
  });
});
