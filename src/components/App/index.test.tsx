import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

test("renders Please fill link", () => {
  render(<App />);
  const text = screen.getByText(/Please fill/i);
  expect(text).toBeInTheDocument();
});
