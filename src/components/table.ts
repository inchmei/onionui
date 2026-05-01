export const tableComponents = {
  ".table": {
    "@apply w-full border-collapse text-left text-sm": {},
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".table th": {
    "@apply px-4 py-3 font-medium": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-content-muted) / 1)"
  },
  ".table td": {
    "@apply px-4 py-3": {}
  },
  ".table :where(th, td)": {
    borderBottom: "1px solid rgb(var(--onion-border) / 1)"
  },
  ".table-zebra tbody tr:nth-child(even)": {
    backgroundColor: "rgb(var(--onion-muted) / 0.45)"
  },
  ".table-pin-rows thead": {
    "@apply sticky top-0 z-10": {}
  }
};
