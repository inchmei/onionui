import { solidVariants } from "./variants";

export const statusComponents = {
  ".status": {
    "@apply inline-block h-2.5 w-2.5 rounded-full": {},
    backgroundColor: "rgb(var(--onion-content-muted) / 1)"
  },
  ...solidVariants("status")
};
