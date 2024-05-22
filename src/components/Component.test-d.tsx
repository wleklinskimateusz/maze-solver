import { render } from "../../tests/utils";
import { Component } from "./Component";

describe("Component", () => {
  it("should not accept any props", () => {
    // @ts-expect-error should not accept any props
    render(<Component props="any prop" />);

    render(<Component />);
  });
});
