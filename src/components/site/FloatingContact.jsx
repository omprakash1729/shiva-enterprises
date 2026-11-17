import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919036657577";
const PREFILLED_MESSAGE =
  "Hi, I'm interested in your invisible grills and bird protection net services. Please share more details.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;
const PHONE_TEL = "+919036657577";

export function FloatingContact() {
  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call SHIVA ENTERPRISES at +91 90366 57577"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl sm:h-14 sm:w-14"
      >
        <Phone className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-night/95 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 sm:inline-block">
          Call +91 90366 57577
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SHIVA ENTERPRISES on WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-xl sm:h-14 sm:w-14"
      >
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-35"
          style={{ animationDuration: "2.8s" }}
          aria-hidden="true"
        />
        {/* WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.214 8.214 0 0 1-1.26-4.46c0-4.54 3.69-8.24 8.24-8.24zm4.8 11.66c-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.17.26-.69.86-.84 1.04-.16.17-.31.2-.58.07-.26-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.47-1.83-.16-.26-.02-.4.11-.53.12-.12.26-.31.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46l-.51-.01c-.17 0-.46.07-.7.33-.24.26-.93.91-.93 2.22s.95 2.58 1.08 2.76c.13.17 1.88 2.87 4.55 4.02.64.28 1.13.44 1.52.56.64.2 1.22.17 1.68.1.51-.08 1.56-.64 1.78-1.26.22-.61.22-1.14.15-1.26-.06-.11-.23-.18-.49-.31z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-night/95 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
