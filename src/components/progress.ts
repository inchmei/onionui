import { solidVariants } from "./variants";

export const progressComponents = {
  ".progress": {
    "@apply h-2 w-full overflow-hidden rounded-full": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-primary) / 1)"
  },
  ".progress::-webkit-progress-bar": {
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".progress::-webkit-progress-value": {
    backgroundColor: "currentColor"
  },
  ".progress::-moz-progress-bar": {
    backgroundColor: "currentColor"
  },
  ...solidVariants("progress")
};
