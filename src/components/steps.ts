export const stepsComponents = {
  ".steps": {
    "@apply flex w-full items-start": {}
  },
  ".step": {
    "@apply relative flex flex-1 flex-col items-center gap-2 text-center text-xs": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  },
  ".step::before": {
    "@apply absolute left-0 right-0 top-3 -z-10 h-px content-['']": {},
    backgroundColor: "rgb(var(--onion-border) / 1)"
  },
  ".step::after": {
    "@apply grid h-6 w-6 place-items-center rounded-full border text-xs content-[counter(step)]": {},
    counterIncrement: "step",
    borderColor: "rgb(var(--onion-border-strong) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".step-primary::after, .step-active::after": {
    borderColor: "rgb(var(--onion-primary) / 1)",
    backgroundColor: "rgb(var(--onion-primary) / 1)",
    color: "rgb(var(--onion-primary-content) / 1)"
  }
};
