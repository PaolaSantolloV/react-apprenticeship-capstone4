import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormCustumerInformation from "./FormCustumerInformation.component";

describe("<FormCustumerInformation />", () => {
  test("should render FormCustumerInformation correctly", () => {
    const onChange = jest.fn();
    const data = {
      firstName: "",
      lastName: "",
      address: "",
      cp: "",
      email: "",
      phone: "",
      notes: "",
    };
    const { getByTitle } = render(
      <FormCustumerInformation handleChange={onChange} formData={data} />
    );
    const form = getByTitle("form-custumer");
    const inputFirstName = getByTitle("first-name-input");
    const inputLastName = getByTitle("last-name-input");
    const inputAddress = getByTitle("address-input");
    const inputCP = getByTitle("cp-input");
    const inputEmail = getByTitle("email-input");
    const inputPhone = getByTitle("phone-input");
    // fireEvent.change(inputFirstName, { target: { value: "test input" } });
    // fireEvent.change(inputLastName, { target: { value: "test input" } });
    // fireEvent.change(inputAddress, { target: { value: "test input" } });
    // fireEvent.change(inputCP, { target: { value: "test input" } });
    // fireEvent.change(inputEmail, { target: { value: "test input" } });
    // fireEvent.change(inputPhone, { target: { value: "test input" } });
    expect(inputFirstName).toBeInTheDocument();
    expect(inputLastName).toBeInTheDocument();
    expect(inputAddress).toBeInTheDocument();
    expect(inputCP).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPhone).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
