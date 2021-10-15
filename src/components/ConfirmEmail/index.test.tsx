import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ConfirmEmail from ".";
import { EmailContext } from "../EmailProvider";

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <EmailContext.Provider value={"test@test.com"}>
      <ConfirmEmail inputKey="test" name="Test" wasSubmitted={true} />
    </EmailContext.Provider>
  );
  const input = utils.getByLabelText("Test") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test("renders label element", () => {
  setup();
  const input = screen.getByTestId("test-testid");
  expect(input).toBeInTheDocument();
});

test("renders input element", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("renders error when email is not matching", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "test124@test.com" } });

  const errorAlret = screen.getByRole("alert");
  expect(errorAlret).toBeInTheDocument();
  expect(screen.queryByText("email does not match")).toBeInTheDocument();
});

test("should not render error when email is matching", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "test@test.com" } });

  expect(screen.queryByText("email does not match")).not.toBeInTheDocument();
});
