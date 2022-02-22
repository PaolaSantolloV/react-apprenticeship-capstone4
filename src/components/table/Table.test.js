import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table.component";

describe("<Table />", () => {
  test("should render table correctly", () => {
    const tableInformation = [
      {
        spec_name: "Dimensions",
        spec_value:
          "40.26 cm high x 66 cm wide. Zipper: Approximately 61 cm long",
      },
      { spec_name: "Collection", spec_value: "Fair Isle Snowflake Lumbar" },
      {
        spec_name: "Other information",
        spec_value:
          "Machine wash cold, inside out, on delicate cycle. …ure, remove immediately. Use warm iron as needed.",
      },
    ];
    const { getByTitle } = render(
      <Table tableInformation={tableInformation} />
    );
    const tableComponent = getByTitle("table");
    expect(tableComponent).toBeInTheDocument();
  });
});
