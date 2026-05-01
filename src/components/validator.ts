export const validatorComponents = {
  ".validator:invalid, .input:invalid, .select:invalid, .textarea:invalid": {
    borderColor: "rgb(var(--onion-error) / 1)"
  },
  ".validator:invalid:focus, .input:invalid:focus, .select:invalid:focus, .textarea:invalid:focus": {
    boxShadow: "0 0 0 3px rgb(var(--onion-error) / 0.12)"
  }
};
