export const buttonComponents = {
  ".btn": {
    "@apply inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-colors duration-150": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".btn:hover": {
    backgroundColor: "rgb(var(--onion-border) / 1)"
  },
  ".btn:disabled": {
    "@apply cursor-not-allowed opacity-50": {}
  },
  ".btn-primary": {
    backgroundColor: "rgb(var(--onion-primary) / 1)",
    color: "rgb(var(--onion-primary-content) / 1)"
  },
  ".btn-primary:hover": {
    filter: "brightness(0.95)"
  },
  ".btn-outline": {
    "@apply border": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "transparent"
  }
};
