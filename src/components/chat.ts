import { solidVariants } from "./variants";

export const chatComponents = {
  ".chat": {
    "@apply grid gap-2 py-1": {}
  },
  ".chat-start": {
    "@apply justify-items-start": {}
  },
  ".chat-end": {
    "@apply justify-items-end": {}
  },
  ".chat-bubble": {
    "@apply max-w-[80%] rounded-[var(--onion-radius-box)] px-4 py-2 text-sm": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ...solidVariants("chat-bubble"),
  ".chat-header, .chat-footer": {
    "@apply text-xs": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  }
};
