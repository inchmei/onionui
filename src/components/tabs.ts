export const tabsComponents = {
  ".tabs": {
    "@apply inline-flex items-center gap-1 rounded-[var(--onion-radius-field)] p-1": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".tabs-boxed": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".tabs-bordered": {
    "@apply rounded-none border-b bg-transparent p-0": {},
    borderColor: "rgb(var(--onion-border) / 1)"
  },
  ".tab": {
    "@apply rounded-[var(--onion-radius-field)] px-3 py-1.5 text-sm transition-colors": {},
    color: "rgb(var(--onion-fg) / 0.75)"
  },
  ".tab:hover": {
    backgroundColor: "rgb(var(--onion-bg) / 0.75)"
  },
  ".tab-active, .tab[aria-selected='true']": {
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-primary) / 1)",
    boxShadow: "0 1px 2px rgb(0 0 0 / 0.08)"
  }
};
