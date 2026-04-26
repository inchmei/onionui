import plugin from "tailwindcss/plugin";
import { alertComponents } from "./components/alert";
import { avatarComponents } from "./components/avatar";
import { badgeComponents } from "./components/badge";
import { buttonComponents } from "./components/button";
import { cardComponents } from "./components/card";
import { dropdownComponents } from "./components/dropdown";
import { inputComponents } from "./components/input";
import { modalComponents } from "./components/modal";
import { navbarComponents } from "./components/navbar";
import { tabsComponents } from "./components/tabs";
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
        ...alertComponents,
        ...avatarComponents,
        ...badgeComponents,
        ...buttonComponents,
        ...cardComponents,
        ...dropdownComponents,
        ...inputComponents,
        ...modalComponents,
        ...navbarComponents,
        ...tabsComponents
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
