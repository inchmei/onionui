export const dropdownComponents = {
  ".dropdown": {
    "@apply relative inline-block": {}
  },
  ".dropdown-content": {
    "@apply absolute right-0 z-50 mt-2 min-w-44 rounded-lg border p-1 shadow-lg": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".menu-item": {
    "@apply block w-full rounded-md px-3 py-2 text-left text-sm transition-colors": {}
  },
  ".menu-item:hover": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  }
};
