export const mockupComponents = {
  ".mockup-browser, .mockup-code, .mockup-phone, .mockup-window": {
    "@apply overflow-hidden rounded-[var(--onion-radius-box)] border shadow-sm": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".mockup-browser-toolbar, .mockup-window-title": {
    "@apply border-b px-4 py-2 text-sm": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-muted) / 1)"
  },
  ".mockup-code": {
    "@apply p-4 font-mono text-sm": {},
    backgroundColor: "rgb(15 23 42 / 1)",
    color: "rgb(226 232 240 / 1)"
  },
  ".mockup-code pre": {
    "@apply m-0": {}
  }
};
