export const collapseComponents = {
  ".collapse": {
    "@apply rounded-[var(--onion-radius-box)] border": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".collapse-title": {
    "@apply cursor-pointer px-4 py-3 text-sm font-medium": {}
  },
  ".collapse-content": {
    "@apply px-4 pb-4 text-sm": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  },
  ".collapse-arrow .collapse-title::after": {
    "@apply float-right content-['⌄']": {}
  }
};
