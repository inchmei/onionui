export declare const themes: {
  light: Record<string, string>;
  dark: Record<string, string>;
};
export type OnionUIThemeName = keyof typeof themes;
export type OnionUIPluginOptions = {
  defaultTheme?: OnionUIThemeName;
};

declare const onionui: (options?: OnionUIPluginOptions) => unknown;
export { themes };
export default onionui;
