import { Buffer } from "node:buffer";

const packageJson = Bun.file("./package.json");
if (!(await packageJson.exists())) {
  throw new Error("package.json not found. Run the build script from project root.");
}

const assetUrlReplacements = {
  "../assets/menu/Layout_expand.png": "./assets/menu/Layout_expand.png",
  "../assets/menu/Layou_close.png": "./assets/menu/Layou_close.png",
  "../assets/menu/Menu_Item_expand.png": "./assets/menu/Menu_Item_expand.png",
  "../assets/menu/Menu_Item_close.png": "./assets/menu/Menu_Item_close.png"
} as const;

async function toPngDataUrl(path: string) {
  const file = Bun.file(path);
  if (!(await file.exists())) {
    throw new Error(`Theme asset not found: ${path}`);
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

async function inlineThemeAssets(outputPath: string) {
  const outputFile = Bun.file(outputPath);
  let code = await outputFile.text();

  for (const [sourceUrl, assetPath] of Object.entries(assetUrlReplacements)) {
    const dataUrl = await toPngDataUrl(assetPath);
    code = code.replaceAll(sourceUrl, dataUrl);
  }

  await Bun.write(outputPath, code);
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
  mssp: Record<string, string>;
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

await inlineThemeAssets("./dist/index.js");
await inlineThemeAssets("./dist/index.cjs");
