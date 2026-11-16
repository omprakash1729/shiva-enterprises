import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

describe("home page", () => {
  it("renders the existing site sections and enquiry form", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Protection is in the details." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Questions, answered plainly." }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Name *")).toBeInTheDocument();
    expect(document.querySelectorAll("main section")).toHaveLength(13);
  });
});
