export const avatarComponents = {
  ".avatar": {
    "@apply inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".avatar img": {
    "@apply h-full w-full object-cover": {}
  },
  ".avatar-placeholder": {
    "@apply text-sm font-medium": {}
  },
  ".avatar-sm": {
    "@apply h-8 w-8 text-xs": {}
  },
  ".avatar-lg": {
    "@apply h-14 w-14 text-base": {}
  }
};
