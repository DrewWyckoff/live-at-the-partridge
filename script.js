// Live at the Partridge — coming soon splash
// Minimal front-end logic: footer year + email form (UI only for now).

document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current automatically.
  const yearEl = document.querySelector(".year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.querySelector(".signup");
  const input = document.querySelector(".signup__input");
  const message = document.querySelector(".signup__message");

  if (!form || !input || !message) return;

  const showMessage = (text, isError = false) => {
    message.textContent = text;
    message.classList.toggle("is-error", isError);
    message.classList.add("is-visible");
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = input.value.trim();

    // Basic client-side validation. The browser's native email check is
    // intentionally light, so we add a simple pattern on top.
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      showMessage("Please enter a valid email address.", true);
      input.focus();
      return;
    }

    // ─────────────────────────────────────────────────────────────
    // TODO: connect to a mailing-list provider (Mailchimp, ConvertKit,
    // Buttondown, etc.). Replace the block below with a fetch() POST to
    // the provider's form endpoint or your own backend.
    //
    //   await fetch("https://YOUR-LIST-ENDPOINT", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email }),
    //   });
    // ─────────────────────────────────────────────────────────────

    // Placeholder success state so the UI feels complete during review.
    showMessage("Thanks — you're on the list. We'll be in touch.");
    form.reset();
  });
});
