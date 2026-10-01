"use client";

import { FormEvent, useState } from "react";
import { company, services } from "@/lib/content";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const whatsappText = [
      "Website enquiry",
      `Name: ${String(payload.name || "")}`,
      `Phone: ${String(payload.phone || "")}`,
      `Email: ${String(payload.email || "")}`,
      `Service: ${String(payload.service || "Not specified")}`,
      "",
      String(payload.message || ""),
    ].join("\n");

    window.open(`${company.whatsappHref}?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener,noreferrer");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Your enquiry could not be sent.");
      }

      setStatus("success");
      setMessage("Email sent to the sales team. WhatsApp opened with the same enquiry ready to send.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(`${error instanceof Error ? error.message : "Your enquiry could not be sent."} WhatsApp was opened with your enquiry as a fallback.`);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name <span aria-hidden="true">*</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone <span aria-hidden="true">*</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Service of interest
          <select name="service" defaultValue="">
            <option value="">Choose a service</option>
            {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
          </select>
        </label>
      </div>
      <label>
        Message <span aria-hidden="true">*</span>
        <textarea name="message" rows={6} required />
      </label>
      <p className="form-helper">Your enquiry is emailed to {company.email}. On submit, WhatsApp opens with the same details ready for you to send to the business.</p>
      <div className="form-trap" aria-hidden="true">
        <label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-footer">
        <button className="button button-dark" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send by email + WhatsApp"}
        </button>
        <p className={`form-message ${status}`} aria-live="polite">{message}</p>
      </div>
    </form>
  );
}
