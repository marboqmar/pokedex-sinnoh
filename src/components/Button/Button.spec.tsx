import { screen } from "@testing-library/react";
import { renderComponent } from "../../tests/utils/componentRenderer.tsx";
import { Button } from "./Button";
import { generateRandomString } from "../../tests/utils/randomDataGenerator.ts";

describe("Button", () => {
  it("Should render a button with a random text", () => {
    const text = generateRandomString();

    renderComponent(<Button>{text}</Button>);
    const button = screen.getByText(text);

    expect(button).toBeInTheDocument();
    expect(button.classList.contains(`btn`)).toBe(true);
  });

  it("Should render a button with the without border, without hover, and transparent", () => {
    renderComponent(<Button transparent withoutBorder withoutHover />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.classList.contains(`btn__transparent`)).toBe(true);
    expect(button.classList.contains(`btn__without-border`)).toBe(true);
    expect(button.classList.contains(`btn__without-hover`)).toBe(true);
  });
});
