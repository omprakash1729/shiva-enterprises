import { fireEvent, render, screen } from "@testing-library/react";
import { toast } from "sonner";
import { Contact } from "../components/site/Contact.jsx";

describe("contact form WhatsApp enquiry", () => {
  let openWindow;
  let toastError;
  let toastMessage;
  let fetchSpy;

  beforeEach(() => {
    openWindow = vi.spyOn(window, "open").mockReturnValue({ opener: window });
    toastError = vi.spyOn(toast, "error").mockImplementation(() => {});
    toastMessage = vi.spyOn(toast, "message").mockImplementation(() => {});
    fetchSpy = vi.spyOn(globalThis, "fetch");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("opens WhatsApp with the encoded enquiry and every form value", () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText("Name *"), {
      target: { value: "Ravi Kumar" },
    });
    fireEvent.change(screen.getByLabelText("Phone *"), {
      target: { value: "+91 90366 57577" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "ravi+quote@example.com" },
    });
    fireEvent.change(screen.getByLabelText("City / Area"), {
      target: { value: "North Chennai" },
    });
    fireEvent.change(screen.getByLabelText("I'm interested in *"), {
      target: { value: "both" },
    });
    fireEvent.change(screen.getByLabelText("Balcony type"), {
      target: { value: "High-rise, 12th floor" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: 'Measurements & details: 50% "complete" #balcony' },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send My Request/ }));

    expect(openWindow).toHaveBeenCalledOnce();
    const [openedUrl, target] = openWindow.mock.calls[0];
    const whatsappUrl = new URL(openedUrl);
    expect(whatsappUrl.origin + whatsappUrl.pathname).toBe("https://wa.me/919036657577");
    expect(target).toBe("_blank");
    expect(whatsappUrl.searchParams.get("text")).toContain("Name: Ravi Kumar");
    expect(whatsappUrl.searchParams.get("text")).toContain("Phone: +91 90366 57577");
    expect(whatsappUrl.searchParams.get("text")).toContain("Email: ravi+quote@example.com");
    expect(whatsappUrl.searchParams.get("text")).toContain("Service Required: Both");
    expect(whatsappUrl.searchParams.get("text")).toContain("Location: North Chennai");
    expect(whatsappUrl.searchParams.get("text")).toContain("Balcony Type: High-rise, 12th floor");
    expect(whatsappUrl.searchParams.get("text")).toContain(
      'Project Details: Measurements & details: 50% "complete" #balcony',
    );
    expect(toastMessage).toHaveBeenCalledWith(
      "WhatsApp opened. Review the message and press Send to complete your enquiry.",
    );
    expect(screen.queryByText("Request received.")).not.toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("blocks missing required fields and invalid phone numbers", () => {
    render(<Contact />);

    fireEvent.click(screen.getByRole("button", { name: /Send My Request/ }));
    expect(toastError).toHaveBeenLastCalledWith("Please enter your name (at least 2 characters).");
    expect(openWindow).not.toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText("Name *"), {
      target: { value: "Ravi Kumar" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send My Request/ }));
    expect(toastError).toHaveBeenLastCalledWith("Please enter a valid phone number.");
    expect(openWindow).not.toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText("Phone *"), {
      target: { value: "invalid" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send My Request/ }));
    expect(toastError).toHaveBeenLastCalledWith("Please enter a valid phone number.");
    expect(openWindow).not.toHaveBeenCalled();
  });

  it("rejects an invalid optional email and handles a blocked WhatsApp window", () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText("Name *"), {
      target: { value: "Ravi Kumar" },
    });
    fireEvent.change(screen.getByLabelText("Phone *"), {
      target: { value: "+91 90366 57577" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Send My Request/ }));
    expect(toastError).toHaveBeenLastCalledWith("Please enter a valid email address.");
    expect(openWindow).not.toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "" } });
    openWindow.mockReturnValueOnce(null);
    fireEvent.click(screen.getByRole("button", { name: /Send My Request/ }));
    expect(toastError).toHaveBeenLastCalledWith(
      "Please allow pop-ups to open WhatsApp, then try again.",
    );
  });
});
