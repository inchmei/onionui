export const accordionComponents = {
  ".accordion": {
    "@apply divide-y overflow-hidden rounded-[var(--onion-radius-box)] border": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".accordion-item": {
    "@apply block": {}
  },
  ".accordion-title": {
    "@apply flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium": {}
  },
  ".accordion-content": {
    "@apply px-4 pb-4 text-sm": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  }
};
