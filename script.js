// Live at the Partridge — coming soon splash
// Minimal front-end logic: footer year. Email signup is handled by the
// embedded Constant Contact inline form (see index.html).

document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current automatically.
  const yearEl = document.querySelector(".year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
