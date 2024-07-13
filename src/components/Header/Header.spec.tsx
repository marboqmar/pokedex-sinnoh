import { screen, waitFor } from "@testing-library/react";
import { renderComponent } from "../../tests/utils/componentRenderer.tsx";
import { Header } from "./Header.tsx";
import { userEvent } from "@testing-library/user-event";

const themeChangeMock = vi.fn();

vi.mock("themeChange", () => {
  return {
    themeChange: themeChangeMock,
  };
});

describe("Header", () => {
  it("Should call themeChange function when clicking on dark mode button", async () => {
    renderComponent(<Header />);

    const themeChangeButton = screen.getByRole("button");

    userEvent.click(themeChangeButton);

    await waitFor(() => {
      expect(themeChangeMock).toHaveBeenCalled;
    });
  });
});
