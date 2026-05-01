export const cardComponents = {
  ".card": {
    "@apply rounded-[var(--onion-radius-box)] border p-5 shadow-sm": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".card-bordered": {
    borderColor: "rgb(var(--onion-border) / 1)"
  },
  ".card-compact": {
    "@apply p-4": {}
  },
  ".card-side": {
    "@apply flex flex-row": {}
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
