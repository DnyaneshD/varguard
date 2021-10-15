import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Email from ".";
import { ERRORS } from "../../services/getFieldError";
import EmailProvider from "../EmailProvider";

afterEach(cleanup);

const setup = () => {
  render(
    <EmailProvider>
      <Email inputKey="test" name="Test" wasSubmitted={true} />
    </EmailProvider>
  );
};

test("renders input to email", () => {
  setup();
  const label = screen.getByLabelText("Test");
  expect(label).toBeInTheDocument();
});

test("renders label element", () => {
  setup();
  const input = screen.getByTestId("test-testid");
  expect(input).toBeInTheDocument();
});

test("renders input element", () => {
  setup();
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("renders error when input is required but no value provided", () => {
  const { getByLabelText } = render(
    <EmailProvider>
      <Email
        inputKey="test"
        name="Test"
        wasSubmitted={true}
        isRequried={true}
      />
    </EmailProvider>
  );

  const input = getByLabelText(/Test/i);
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.blur(input);

  const errorAlret = screen.getByRole("alert");
  expect(errorAlret).toBeInTheDocument();
  expect(screen.queryByText(ERRORS.requiredField)).toBeInTheDocument();
});

test("should not render error when input is not required and no value provided", () => {
  const { getByLabelText } = render(
    <EmailProvider>
      <Email inputKey="test" name="Test" wasSubmitted={true} />
    </EmailProvider>
  );
  const input = getByLabelText(/Test/i);
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.blur(input);

  expect(screen.queryByText("field is required")).not.toBeInTheDocument();
});
