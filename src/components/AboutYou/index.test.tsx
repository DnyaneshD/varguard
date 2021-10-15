import { render, screen } from "@testing-library/react";
import AboutYou from ".";

test("renders Please fill link", () => {
  render(<AboutYou setCanShowNext={(val: boolean) => {}} />);
  const text = screen.getByText(/Please fill/i);
  expect(text).toBeInTheDocument();
});
