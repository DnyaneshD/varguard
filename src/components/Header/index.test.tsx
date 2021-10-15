import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders Header with svg", () => {
  render(<Header />);
  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
});
