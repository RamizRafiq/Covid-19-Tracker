import Home from "../home";
import { render, screen } from "@testing-library/react";

test("checking home", () => {
  render(<Home name="Ramiz" />);
  const linkElement = screen.getByText(/Ramiz/i);
  expect(linkElement).toBeInTheDocument();
});
