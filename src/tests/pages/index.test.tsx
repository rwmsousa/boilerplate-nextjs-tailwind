import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../../pages/index";

describe("Home page", () => {
  it("renders the home page", () => {
    render(<Home />);
    // Busca pelo título principal específico em vez de qualquer heading
    expect(
      screen.getByText("Next.js + Tailwind CSS Template"),
    ).toBeInTheDocument();
  });
});
