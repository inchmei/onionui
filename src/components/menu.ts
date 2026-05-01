export const menuComponents = {
  ".menu": {
    "@apply flex flex-col gap-1 p-2 text-sm": {}
  },
  ".menu-horizontal": {
    "@apply flex-row": {}
  },
  ".menu-title": {
    "@apply px-3 py-2 text-xs font-semibold uppercase tracking-wide": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  },
  ".menu li > *": {
    "@apply flex w-full items-center gap-2 rounded-[var(--onion-radius-field)] px-3 py-2 text-left transition-colors": {}
  },
  ".menu li > *:hover": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".menu li > .active, .menu-active": {
    backgroundColor: "rgb(var(--onion-primary) / 0.12)",
    color: "rgb(var(--onion-primary) / 1)"
  }
};
