export const cardComponents = {
  ".card": {
    "@apply rounded-xl border p-5 shadow-sm": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".card-title": {
    "@apply text-lg font-semibold": {}
  },
  ".card-body": {
    "@apply mt-3 space-y-2": {}
  },
  ".card-actions": {
    "@apply mt-4 flex items-center gap-2": {}
  }
};
