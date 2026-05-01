export const statsComponents = {
  ".stats": {
    "@apply grid overflow-hidden rounded-[var(--onion-radius-box)] border shadow-sm md:grid-flow-col": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".stat": {
    "@apply grid gap-1 p-5": {}
  },
  ".stat-title, .stat-desc": {
    "@apply text-sm": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  },
  ".stat-value": {
    "@apply text-2xl font-semibold": {}
  }
};
