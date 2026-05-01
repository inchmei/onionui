import { softVariants } from "./variants";

export const alertComponents = {
  ".alert": {
    "@apply flex items-start gap-3 rounded-[var(--onion-radius-box)] border px-4 py-3 text-sm": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ...softVariants("alert")
};
