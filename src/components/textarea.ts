export const textareaComponents = {
  ".textarea": {
    "@apply min-h-24 w-full rounded-[var(--onion-radius-field)] border bg-transparent px-3 py-2 text-sm outline-none transition-colors": {},
    borderColor: "rgb(var(--onion-border-strong) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".textarea:focus": {
    borderColor: "rgb(var(--onion-primary) / 1)",
    boxShadow: "0 0 0 3px rgb(var(--onion-primary) / 0.12)"
  }
};
