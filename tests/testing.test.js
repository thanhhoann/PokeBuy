/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

test("Home page", () => {
  render(<Index />);
  const text = screen.getByText(/featured cards/i);
  expect(text).toBeInTheDocument();
});
