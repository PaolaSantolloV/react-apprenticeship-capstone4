import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "./Checkbox.component";

const onChange = jest.fn();
describe("<Checkbox />", () => {
  test("should render checkbox correctly", () => {
    const { getByTitle } = render(
      <Checkbox title="test" value={true} onChange={onChange} />
    );
    const check = getByTitle("test");
    expect(check).toBeInTheDocument();
  });
});
