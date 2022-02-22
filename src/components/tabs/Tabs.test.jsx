import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tabs from "./Tabs.component";

describe("<Tabs />", () => {
  test("should render tabs correctly without tableInformation", () => {
    const description = "test description";
    const tableInformation = [];
    const { getByTitle } = render(
      <Tabs description={description} tableInformation={tableInformation} />
    );
    const tab = getByTitle("tabs");
    expect(tab).toBeInTheDocument();
  });
  test("should render tabs correctly", () => {
    const description = "test description";
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
      <Tabs description={description} tableInformation={tableInformation} />
    );
    const tab = getByTitle("tabs");
    const details = getByTitle("details");
    fireEvent.click(details);
    expect(details).toBeInTheDocument();
    expect(tab).toBeInTheDocument();
  });
});
