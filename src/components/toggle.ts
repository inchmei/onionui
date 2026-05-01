export const toggleComponents = {
  ".toggle": {
    "@apply h-6 w-11 cursor-pointer appearance-none rounded-full border bg-current p-0 transition-colors": {},
    color: "rgb(var(--onion-border-strong) / 1)"
  },
  ".toggle::before": {
    "@apply m-0.5 block h-5 w-5 rounded-full bg-white transition-transform content-['']": {}
  },
  ".toggle:checked": {
    color: "rgb(var(--onion-primary) / 1)"
  },
  ".toggle:checked::before": {
    "@apply translate-x-5": {}
  },
  ".toggle-xs": {
    "@apply h-4 w-7": {}
  },
  ".toggle-sm": {
    "@apply h-5 w-9": {}
  },
  ".toggle-lg": {
    "@apply h-8 w-14": {}
  }
};
