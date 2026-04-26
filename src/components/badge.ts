export const badgeComponents = {
  ".badge": {
    "@apply inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".badge-primary": {
    borderColor: "rgb(var(--onion-primary) / 0.25)",
    backgroundColor: "rgb(var(--onion-primary) / 0.14)",
    color: "rgb(var(--onion-primary) / 1)"
  },
  ".badge-outline": {
    backgroundColor: "transparent"
  }
};
