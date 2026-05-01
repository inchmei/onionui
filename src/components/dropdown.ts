export const dropdownComponents = {
  ".dropdown": {
    "@apply relative inline-block": {}
  },
  ".dropdown-content": {
    "@apply absolute right-0 z-50 mt-2 min-w-44 rounded-[var(--onion-radius-box)] border p-1 shadow-lg": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".dropdown-left .dropdown-content": {
    "@apply left-0 right-auto": {}
  },
  ".dropdown-top .dropdown-content": {
    "@apply bottom-full top-auto mb-2 mt-0": {}
  },
  ".dropdown-end .dropdown-content": {
    "@apply right-0": {}
  },
  ".menu-item": {
    "@apply flex w-full items-center gap-2 rounded-[var(--onion-radius-field)] px-3 py-2 text-left text-sm transition-colors": {}
  },
  ".menu-item:hover": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  }
};
