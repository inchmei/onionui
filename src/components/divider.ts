export const dividerComponents = {
  ".divider": {
    "@apply my-4 flex items-center gap-3 text-xs uppercase tracking-wide": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  },
  ".divider::before, .divider::after": {
    "@apply h-px flex-1 content-['']": {},
    backgroundColor: "rgb(var(--onion-border) / 1)"
  },
  ".divider-horizontal": {
    "@apply mx-4 my-0 h-auto flex-col": {}
  },
  ".divider-horizontal::before, .divider-horizontal::after": {
    "@apply h-full w-px": {}
  }
};
