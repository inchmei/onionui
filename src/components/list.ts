export const listComponents = {
  ".list": {
    "@apply grid gap-1 rounded-[var(--onion-radius-box)] border p-2": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".list-row": {
    "@apply flex items-center gap-3 rounded-[var(--onion-radius-field)] px-3 py-2": {}
  },
  ".list-row:hover": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  }
};
