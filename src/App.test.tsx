import { render } from "../tests/utils";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
