export const alertComponents = {
  ".alert": {
    "@apply flex items-start gap-3 rounded-lg border px-4 py-3 text-sm": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".alert-success": {
    borderColor: "rgb(34 197 94 / 0.35)",
    backgroundColor: "rgb(34 197 94 / 0.12)",
    color: "rgb(21 128 61 / 1)"
  },
  ".alert-warning": {
    borderColor: "rgb(245 158 11 / 0.35)",
    backgroundColor: "rgb(245 158 11 / 0.14)",
    color: "rgb(180 83 9 / 1)"
  },
  ".alert-error": {
    borderColor: "rgb(239 68 68 / 0.35)",
    backgroundColor: "rgb(239 68 68 / 0.12)",
    color: "rgb(185 28 28 / 1)"
  },
  ".alert-info": {
    borderColor: "rgb(59 130 246 / 0.35)",
    backgroundColor: "rgb(59 130 246 / 0.12)",
    color: "rgb(30 64 175 / 1)"
  }
};
