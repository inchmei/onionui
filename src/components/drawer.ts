export const drawerComponents = {
  ".drawer": {
    "@apply relative grid overflow-hidden": {}
  },
  ".drawer-toggle": {
    "@apply sr-only": {}
  },
  ".drawer-content": {
    "@apply min-w-0": {}
  },
  ".drawer-side": {
    "@apply fixed inset-0 z-40 hidden": {}
  },
  ".drawer-open .drawer-side, .drawer-toggle:checked ~ .drawer-side": {
    "@apply block": {}
  },
  ".drawer-overlay": {
    "@apply fixed inset-0": {},
    backgroundColor: "rgb(0 0 0 / 0.35)"
  }
};
