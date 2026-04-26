const packageJson = Bun.file("./package.json");
if (!(await packageJson.exists())) {
  throw new Error("package.json not found. Run the build script from project root.");
}

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "esm",
  target: "node"
});

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "cjs",
  target: "node",
  naming: {
    entry: "index.cjs"
  }
});

const dtsContent = `export declare const themes: {
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
`;

await Bun.write("./dist/index.d.ts", dtsContent);
