export const joinComponents = {
  ".join": {
    "@apply inline-flex items-stretch": {}
  },
  ".join-item": {
    "@apply rounded-none": {}
  },
  ".join-item:first-child": {
    borderTopLeftRadius: "var(--onion-radius-field)",
    borderBottomLeftRadius: "var(--onion-radius-field)"
  },
  ".join-item:last-child": {
    borderTopRightRadius: "var(--onion-radius-field)",
    borderBottomRightRadius: "var(--onion-radius-field)"
  }
};
