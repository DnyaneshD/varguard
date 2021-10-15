import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Input from ".";
import { ERRORS } from "../../services/getFieldError";
import { ValidationTypes } from "../interfaces";

afterEach(cleanup);

const setup = () => {
  render(<Input inputKey="test" name="Test" wasSubmitted={true} />);
};

test("renders input", () => {
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
    <Input inputKey="test" name="Test" wasSubmitted={true} isRequried={true} />
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
    <Input inputKey="test" name="Test" wasSubmitted={true} />
  );
  const input = getByLabelText(/Test/i);
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.blur(input);

  expect(screen.queryByText(ERRORS.requiredField)).not.toBeInTheDocument();
});

test("renders error when insurance number input is in correct", () => {
  const { getByLabelText } = render(
    <Input
      inputKey="test"
      name="Test"
      wasSubmitted={true}
      isRequried={true}
      validationType={ValidationTypes.InsuranceNumber}
    />
  );

  const input = getByLabelText(/Test/i);
  fireEvent.change(input, { target: { value: "sdfsdf" } });
  fireEvent.blur(input);

  const errorAlret = screen.getByRole("alert");
  expect(errorAlret).toBeInTheDocument();
  expect(screen.queryByText(ERRORS.invalidInsuranceNumber)).toBeInTheDocument();
});

test("renders error when digits are entered when validation with onlyletters is given", () => {
  const { getByLabelText } = render(
    <Input
      inputKey="test"
      name="Test"
      wasSubmitted={true}
      isRequried={true}
      validationType={ValidationTypes.OnlyLetters}
    />
  );

  const input = getByLabelText(/Test/i);
  fireEvent.change(input, { target: { value: "sdfsdf124" } });
  fireEvent.blur(input);

  const errorAlret = screen.getByRole("alert");
  expect(errorAlret).toBeInTheDocument();
  expect(screen.queryByText(ERRORS.onlyLetters)).toBeInTheDocument();
});
