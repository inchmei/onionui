export const swapComponents = {
  ".swap": {
    "@apply relative inline-grid cursor-pointer select-none place-content-center": {}
  },
  ".swap input": {
    "@apply sr-only": {}
  },
  ".swap-on, .swap-indeterminate, .swap input:checked ~ .swap-off": {
    "@apply hidden": {}
  },
  ".swap input:checked ~ .swap-on": {
    "@apply inline-flex": {}
  }
};
