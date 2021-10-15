import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Dropdown from ".";

afterEach(cleanup);

const setup = () => {
  render(
    <Dropdown
      dropdownKey="testKey"
      name="Test"
      values={[{ key: "Dr.", value: "Dr." }]}
      wasSubmitted={true}
    />
  );
  const select = screen.getByTestId("Test-testid");
  return { select };
};

test("renders select based on props", () => {
  const { select } = setup();
  expect(select).toBeInTheDocument();
});

test("set the selected value for dropdown", async () => {
  const { select } = setup();
  fireEvent.change(select, {
    target: { value: "Dr." },
  });
  expect(screen.getByDisplayValue("Dr.")).toBeInTheDocument();
});
