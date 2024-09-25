import { render, screen } from "@testing-library/react";
import { Header } from "@/components/header";

describe("Header component", () => {
  it("should render all links", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link", { name: "chatt.in" });
    const loginLink = screen.getByRole("link", { name: "Login" });
    expect(homeLink).toBeDefined();
    expect(loginLink).toBeDefined();
  });
});
