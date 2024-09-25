import { render, screen, within } from "@testing-library/react";
import { Footer } from "@/components/footer";

describe("Footer", () => {
  it("should render a footer", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveTextContent("Made with ❤️ by Wendell Kenneddy");
    expect(within(footer).findByRole("link", { name: "Wendell Kenneddy" })).toBeDefined();
  });
});
