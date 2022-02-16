import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconButton from "./IconButton.component";

const onClick = jest.fn();

describe("<IconButton />", () => {
  test("should render iconButton correctly", () => {
    const { getByTitle } = render(
      <IconButton title="test" size="30px" onClick={onClick} />
    );
    const icon = getByTitle("test");
    expect(icon).toBeInTheDocument();
  });

  test("should render children iconButton correctly", () => {
    const { getByText } = render(
      <IconButton title="test" size="30px" onClick={onClick}>
        <h1>test-children</h1>
      </IconButton>
    );
    const text = getByText("test-children");
    expect(text).toBeInTheDocument();
  });
});
