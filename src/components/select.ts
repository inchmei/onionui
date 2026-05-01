export const selectComponents = {
  ".select": {
    "@apply h-[var(--onion-size-field)] w-full appearance-none rounded-[var(--onion-radius-field)] border bg-transparent px-3 pr-9 text-sm outline-none transition-colors": {},
    borderColor: "rgb(var(--onion-border-strong) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".select:focus": {
    borderColor: "rgb(var(--onion-primary) / 1)",
    boxShadow: "0 0 0 3px rgb(var(--onion-primary) / 0.12)"
  },
  ".select-xs": {
    "@apply h-7 px-2 text-xs": {}
  },
  ".select-sm": {
    "@apply h-8 px-3 text-xs": {}
  },
  ".select-lg": {
    "@apply h-12 px-4 text-base": {}
  }
};
