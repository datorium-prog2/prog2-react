// Suppress harmless ResizeObserver error in dev
window.addEventListener("error", function (e) {
  if (e.message.includes("ResizeObserver")) {
    e.stopImmediatePropagation();
  }
});
