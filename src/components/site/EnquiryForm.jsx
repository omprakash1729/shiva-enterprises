import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919036657577";

const SERVICE_OPTIONS = [
  { value: "Invisible Grills (SS 316)", label: "Invisible Grills (Marine SS 316)" },
  { value: "Bird Protection Nets", label: "Bird Protection Nets" },
  { value: "Balcony Safety Nets", label: "Balcony Safety Nets" },
  { value: "Vertical Invisible Grills", label: "Vertical Invisible Grills" },
  { value: "Horizontal Safety Grills", label: "Horizontal Safety Grills" },
  { value: "Terrace Safety Nets & Turf", label: "Terrace Safety Nets & Turf" },
  { value: "Complete Balcony Package", label: "Complete Balcony Package" },
  { value: "General Enquiry", label: "General Free Quote / Inspection" },
];

export function EnquiryForm({
  defaultService = "Invisible Grills (SS 316)",
  variant = "dark",
  className,
  title = "Request a Free On-Site Inspection & Quote",
  subtitle = "Our certified installation engineer will visit your property, inspect measurements, and share a transparent quotation with zero obligations.",
}) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    location: "",
    balconyType: "",
    message: "",
  });

  const isDark = variant === "dark";

  const inputClass = cn(
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2",
    isDark
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/25"
      : "border-border bg-white text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/25",
  );

  const labelClass = cn(
    "block text-xs font-semibold uppercase tracking-wider mb-2",
    isDark ? "text-white/70" : "text-foreground/75",
  );

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;

    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();

    if (name.length < 2) {
      toast.error("Please enter your name (at least 2 characters).");
      return;
    }

    if (!/^[+\d][\d\s-]{7,18}$/.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const enquiryLines = [
        "Hello SHIVA ENTERPRISES, I would like to request a free quote & on-site inspection.",
        "",
        "Customer Details:",
        `• Name: ${name}`,
        `• Phone: ${phone}`,
        email ? `• Email: ${email}` : null,
        `• Service Required: ${form.service}`,
        form.location.trim() ? `• Location in Chennai: ${form.location.trim()}` : null,
        form.balconyType.trim() ? `• Balcony Structure: ${form.balconyType.trim()}` : null,
        form.message.trim() ? `• Notes: ${form.message.trim()}` : null,
        "",
        "Please get in touch with me to schedule an inspection. Thank you!",
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryLines)}`;
      const win = window.open(url, "_blank");

      if (win) {
        win.opener = null;
        toast.success("WhatsApp opened. Please click Send to deliver your enquiry!");
      } else {
        toast.info("Opening WhatsApp link...");
        window.location.href = url;
      }
    } catch {
      toast.error("Unable to open WhatsApp. Please call directly at +91 90366 57577.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 sm:p-8 lg:p-10",
        isDark
          ? "border-white/10 bg-night/80 text-white backdrop-blur-md"
          : "border-border bg-white text-foreground shadow-sm",
        className,
      )}
    >
      <div className="mb-8">
        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
        {subtitle && (
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              isDark ? "text-night-foreground/75" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className={labelClass}>
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={handleChange("name")}
              placeholder="e.g. Ramesh Kumar"
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={handleChange("phone")}
              placeholder="e.g. +91 98765 43210"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Service Required */}
          <div>
            <label className={labelClass}>Service Required</label>
            <select
              value={form.service}
              onChange={handleChange("service")}
              className={cn(inputClass, "cursor-pointer font-medium")}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className={isDark ? "bg-night text-white" : "bg-white text-foreground"}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location / Area */}
          <div>
            <label className={labelClass}>Location / Area (Chennai)</label>
            <input
              type="text"
              value={form.location}
              onChange={handleChange("location")}
              placeholder="e.g. Anna Nagar, Velachery, OMR"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Balcony / Window Type */}
          <div>
            <label className={labelClass}>Balcony / Window Layout (Optional)</label>
            <input
              type="text"
              value={form.balconyType}
              onChange={handleChange("balconyType")}
              placeholder="e.g. Straight, L-Shape, 2 Balconies"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email Address (Optional)</label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="e.g. ramesh@example.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Message / Dimensions */}
        <div>
          <label className={labelClass}>Additional Notes or Measurements (Optional)</label>
          <textarea
            rows={3}
            value={form.message}
            onChange={handleChange("message")}
            placeholder="Tell us about your requirement or approximate dimensions..."
            className={cn(inputClass, "resize-none")}
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all hover:bg-[#20ba59] hover:shadow-lg disabled:opacity-60 cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            Send Enquiry via WhatsApp
          </button>

          <a
            href="tel:+919036657577"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all cursor-pointer",
              isDark
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-border bg-muted/60 text-foreground hover:bg-muted",
            )}
          >
            <Phone className="h-4 w-4 text-primary" />
            Call +91 90366 57577
          </a>
        </div>

        <p
          className={cn(
            "text-center text-xs pt-1",
            isDark ? "text-night-foreground/60" : "text-muted-foreground",
          )}
        >
          ✓ 100% Free Consultation &nbsp;•&nbsp; ✓ Same-Day Site Inspection &nbsp;•&nbsp; ✓ SS 316
          Warranty Certificate
        </p>
      </form>
    </div>
  );
}
