export const dockComponents = {
  ".dock": {
    "@apply fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-1 border-t px-3 py-2": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 0.92)",
    backdropFilter: "blur(12px)"
  },
  ".dock > *": {
    "@apply rounded-[var(--onion-radius-field)] px-4 py-2 text-sm": {}
  },
  ".dock-active": {
    backgroundColor: "rgb(var(--onion-primary) / 0.12)",
    color: "rgb(var(--onion-primary) / 1)"
  }
};
