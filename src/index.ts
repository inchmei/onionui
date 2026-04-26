import plugin from "tailwindcss/plugin";
import { buttonComponents } from "./components/button";
import { cardComponents } from "./components/card";
import { inputComponents } from "./components/input";
import { themes } from "./themes";

export type OnionUIThemeName = keyof typeof themes;
export type OnionUIPluginOptions = {
  defaultTheme?: OnionUIThemeName;
};

const onionui = plugin.withOptions<OnionUIPluginOptions | undefined>(
  (options) =>
    ({ addBase, addComponents }) => {
      const defaultTheme = options?.defaultTheme ?? "light";

      addBase({
        ":root": themes[defaultTheme],
        '[data-theme="light"]': themes.light,
        '[data-theme="dark"]': themes.dark
      });

      addComponents({
        ...buttonComponents,
        ...cardComponents,
        ...inputComponents
      });
    },
  () => ({
    theme: {
      extend: {}
    }
  })
);

export { themes };
export default onionui;
