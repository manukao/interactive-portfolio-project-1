import { render } from "@testing-library/react";
import ContactCardForm from "./ContactCardForm";

test("renders name, email, and message input fields", () => {
  const { getByTestId } = render(<ContactCardForm />);
  expect(getByTestId("name-input")).toBeInTheDocument();
  expect(getByTestId("email-input")).toBeInTheDocument();
  expect(getByTestId("message-input")).toBeInTheDocument();
  expect(getByTestId("submit-button")).toBeInTheDocument();
});
