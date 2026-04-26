export const navbarComponents = {
  ".navbar": {
    "@apply flex min-h-14 w-full items-center justify-between gap-3 rounded-xl border px-4": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".navbar-start": {
    "@apply flex flex-1 items-center gap-2": {}
  },
  ".navbar-center": {
    "@apply hidden items-center gap-2 md:flex": {}
  },
  ".navbar-end": {
    "@apply flex flex-1 items-center justify-end gap-2": {}
  },
  ".navbar-link": {
    "@apply rounded-md px-3 py-2 text-sm transition-colors": {}
  },
  ".navbar-link:hover": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  }
};
