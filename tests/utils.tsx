import React, { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => children,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
