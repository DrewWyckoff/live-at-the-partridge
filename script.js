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

  // Cycle the email placeholder through famous Georgia rock & country
  // musicians — a small nod to the venue's home state. Email-formatted so it
  // still reads as a hint for the field.
  const georgiaMusicians = [
    "alan@jackson.com", // country — Newnan, GA
    "travis@tritt.com", // country — Marietta, GA
    "jason@aldean.com", // country — Macon, GA
    "luke@bryan.com", // country — Leesburg, GA
    "trisha@yearwood.com", // country — Monticello, GA
    "brantley@gilbert.com", // country — Jefferson, GA
    "zac@brown.com", // country — Atlanta, GA
    "gregg@allman.com", // rock — Allman Brothers, Macon, GA
    "michael@stipe.com", // rock — R.E.M., Athens, GA
    "chris@robinson.com", // rock — The Black Crowes, Atlanta, GA
  ];

  let phIndex = Math.floor(Math.random() * georgiaMusicians.length);
  input.placeholder = georgiaMusicians[phIndex];

  const advancePlaceholder = () => {
    // Don't distract while the visitor is focused on / typing in the field.
    if (document.activeElement === input || input.value) return;
    input.classList.add("is-fading");
    setTimeout(() => {
      phIndex = (phIndex + 1) % georgiaMusicians.length;
      input.placeholder = georgiaMusicians[phIndex];
      input.classList.remove("is-fading");
    }, 400);
  };

  // Honor reduced-motion: show a single name, skip the crossfade cycling.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(advancePlaceholder, 3000);
  }

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
