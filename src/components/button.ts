import { solidVariants } from "./variants";

export const buttonComponents = {
  ".btn": {
    "@apply inline-flex min-h-[var(--onion-size-field)] items-center justify-center gap-2 rounded-[var(--onion-radius-field)] border border-transparent px-4 py-2 text-sm font-medium leading-none transition duration-150": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".btn:hover": {
    backgroundColor: "rgb(var(--onion-border) / 1)"
  },
  ".btn:disabled, .btn-disabled": {
    "@apply pointer-events-none cursor-not-allowed opacity-50": {}
  },
  ...solidVariants("btn"),
  ".btn-outline": {
    borderColor: "rgb(var(--onion-border-strong) / 1)",
    backgroundColor: "transparent"
  },
  ".btn-outline:hover": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".btn-ghost": {
    borderColor: "transparent",
    backgroundColor: "transparent"
  },
  ".btn-ghost:hover": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".btn-link": {
    "@apply underline-offset-4 hover:underline": {},
    backgroundColor: "transparent",
    color: "rgb(var(--onion-primary) / 1)"
  },
  ".btn-circle": {
    "@apply h-[var(--onion-size-field)] w-[var(--onion-size-field)] rounded-full p-0": {}
  },
  ".btn-square": {
    "@apply h-[var(--onion-size-field)] w-[var(--onion-size-field)] p-0": {}
  },
  ".btn-wide": {
    "@apply min-w-64": {}
  },
  ".btn-block": {
    "@apply w-full": {}
  },
  ".btn-xs": {
    "@apply min-h-6 px-2 text-xs": {}
  },
  ".btn-sm": {
    "@apply min-h-8 px-3 text-xs": {}
  },
  ".btn-md": {
    "@apply min-h-[var(--onion-size-field)] px-4 text-sm": {}
  },
  ".btn-lg": {
    "@apply min-h-12 px-6 text-base": {}
  },
  ".btn-xl": {
    "@apply min-h-14 px-8 text-lg": {}
  }
};
