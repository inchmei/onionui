export const avatarComponents = {
  ".avatar": {
    "@apply inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".avatar img": {
    "@apply h-full w-full object-cover": {}
  },
  ".avatar-group": {
    "@apply flex -space-x-3": {}
  },
  ".avatar-group .avatar": {
    "@apply ring-2": {},
    "--tw-ring-color": "rgb(var(--onion-bg) / 1)"
  },
  ".avatar-online, .avatar-offline": {
    "@apply relative": {}
  },
  ".avatar-online::after, .avatar-offline::after": {
    "@apply absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 content-['']": {},
    borderColor: "rgb(var(--onion-bg) / 1)"
  },
  ".avatar-online::after": {
    backgroundColor: "rgb(var(--onion-success) / 1)"
  },
  ".avatar-offline::after": {
    backgroundColor: "rgb(var(--onion-disabled) / 1)"
  },
  ".avatar-placeholder": {
    "@apply text-sm font-medium": {}
  },
  ".avatar-xs": {
    "@apply h-6 w-6 text-[10px]": {}
  },
  ".avatar-sm": {
    "@apply h-8 w-8 text-xs": {}
  },
  ".avatar-md": {
    "@apply h-10 w-10 text-sm": {}
  },
  ".avatar-lg": {
    "@apply h-14 w-14 text-base": {}
  },
  ".avatar-xl": {
    "@apply h-20 w-20 text-xl": {}
  }
};
