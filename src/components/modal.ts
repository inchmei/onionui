export const modalComponents = {
  ".modal": {
    "@apply fixed inset-0 z-[100] hidden items-center justify-center p-4": {},
    backgroundColor: "rgb(17 24 39 / 0.45)"
  },
  ".modal-open": {
    "@apply flex": {}
  },
  ".modal-box": {
    "@apply w-full max-w-lg rounded-xl border p-6 shadow-xl": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".modal-title": {
    "@apply text-lg font-semibold": {}
  },
  ".modal-body": {
    "@apply mt-3 text-sm": {}
  },
  ".modal-action": {
    "@apply mt-5 flex items-center justify-end gap-2": {}
  }
};
