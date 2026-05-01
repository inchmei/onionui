export const fileInputComponents = {
  ".file-input": {
    "@apply h-[var(--onion-size-field)] w-full rounded-[var(--onion-radius-field)] border bg-transparent px-3 text-sm outline-none transition-colors": {},
    borderColor: "rgb(var(--onion-border-strong) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".file-input:focus": {
    borderColor: "rgb(var(--onion-primary) / 1)",
    boxShadow: "0 0 0 3px rgb(var(--onion-primary) / 0.12)"
  },
  ".file-input::file-selector-button": {
    "@apply -ml-3 mr-3 h-full border-0 border-r px-3 text-sm font-medium": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".file-input-xs": {
    "@apply h-7 px-2 text-xs": {}
  },
  ".file-input-sm": {
    "@apply h-8 px-3 text-xs": {}
  },
  ".file-input-lg": {
    "@apply h-12 px-4 text-base": {}
  }
};
