export const tabsComponents = {
  ".tabs": {
    "@apply inline-flex items-center gap-1 rounded-lg p-1": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".tab": {
    "@apply rounded-md px-3 py-1.5 text-sm transition-colors": {},
    color: "rgb(var(--onion-fg) / 0.8)"
  },
  ".tab:hover": {
    backgroundColor: "rgb(var(--onion-bg) / 0.75)"
  },
  ".tab-active": {
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)",
    boxShadow: "0 1px 2px rgb(0 0 0 / 0.08)"
  }
};
