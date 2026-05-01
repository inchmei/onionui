export type ComponentStyles = Record<string, unknown>;

const colorVariants = {
  primary: ["--onion-primary", "--onion-primary-content"],
  secondary: ["--onion-secondary", "--onion-secondary-content"],
  accent: ["--onion-accent", "--onion-accent-content"],
  neutral: ["--onion-neutral", "--onion-neutral-content"],
  info: ["--onion-info", "--onion-info-content"],
  success: ["--onion-success", "--onion-success-content"],
  warning: ["--onion-warning", "--onion-warning-content"],
  error: ["--onion-error", "--onion-error-content"]
} as const;

type ColorVariant = keyof typeof colorVariants;

const makeSolidVariant = (prefix: string, color: ColorVariant): Record<string, ComponentStyles> => {
  const [bg, fg] = colorVariants[color];

  return {
    [`.${prefix}-${color}`]: {
      borderColor: `rgb(var(${bg}) / 1)`,
      backgroundColor: `rgb(var(${bg}) / 1)`,
      color: `rgb(var(${fg}) / 1)`
    },
    [`.${prefix}-${color}:hover`]: {
      filter: "brightness(0.97)"
    }
  };
};

const makeSoftVariant = (prefix: string, color: ColorVariant): Record<string, ComponentStyles> => {
  const [bg] = colorVariants[color];

  return {
    [`.${prefix}-${color}`]: {
      borderColor: `rgb(var(${bg}) / 0.28)`,
      backgroundColor: `rgb(var(${bg}) / 0.12)`,
      color: `rgb(var(${bg}) / 1)`
    }
  };
};

export const solidVariants = (prefix: string) =>
  Object.keys(colorVariants).reduce<Record<string, ComponentStyles>>((rules, color) => {
    return {
      ...rules,
      ...makeSolidVariant(prefix, color as ColorVariant)
    };
  }, {});

export const softVariants = (prefix: string) =>
  Object.keys(colorVariants).reduce<Record<string, ComponentStyles>>((rules, color) => {
    return {
      ...rules,
      ...makeSoftVariant(prefix, color as ColorVariant)
    };
  }, {});
