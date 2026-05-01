import { softVariants } from "./variants";

export const badgeComponents = {
  ".badge": {
    "@apply inline-flex min-h-5 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ...softVariants("badge"),
  ".badge-outline": {
    backgroundColor: "transparent"
  },
  ".badge-xs": {
    "@apply px-1.5 py-0.5 text-[10px]": {}
  },
  ".badge-sm": {
    "@apply px-2 py-0.5 text-[11px]": {}
  },
  ".badge-md": {
    "@apply px-2.5 py-1 text-xs": {}
  },
  ".badge-lg": {
    "@apply px-3 py-1.5 text-sm": {}
  }
};
