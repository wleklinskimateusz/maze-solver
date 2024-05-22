import { render, screen } from "../../tests/utils";
import { Component } from "./Component";

describe("Component", () => {
  it("renders the Component component", () => {
    render(<Component />);
    expect(screen.getByText("Component")).toBeDefined();
  });
});
