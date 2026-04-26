export const inputComponents = {
  ".input": {
    "@apply h-10 w-full rounded-lg border bg-transparent px-3 text-sm outline-none transition-colors": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    color: "rgb(var(--onion-fg) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".input:focus": {
    borderColor: "rgb(var(--onion-primary) / 1)",
    boxShadow: "0 0 0 3px rgb(var(--onion-primary) / 0.15)"
  }
};
