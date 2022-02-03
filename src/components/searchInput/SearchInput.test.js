import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "./SearchInput.component";

const onChange = jest.fn();

describe("<SearchInput />", () => {
  test("should render SearchInput correctly", () => {
    const { getByTitle, getByRole } = render(
      <SearchInput
        placeholder="test"
        type="text"
        value="value"
        onChange={onChange}
      />
    );
    const search = getByTitle("search");
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  test("should show input SearchInput correctly", () => {
    const setStylesInput = jest.fn();
    const useStylesInput = jest.spyOn(React, "useState");
    useStylesInput.mockImplementation([false, setStylesInput]);

    const { getByTitle, getByRole } = render(
      <SearchInput
        placeholder="test"
        type="text"
        value="value"
        onChange={onChange}
      />
    );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const input = getByTitle("input-search");
    expect(input).toBeInTheDocument();
  });
});
