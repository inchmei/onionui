# onionui

`onionui` is a daisyUI-inspired component library built as a pure Tailwind CSS plugin.

## Features

- Pure Tailwind plugin (no runtime JS in your app)
- Theme tokens via CSS variables (`light` / `dark`)
- Ready classes for common UI patterns: `btn`, `card`, `input`
- npm-ready package output (`esm` + `cjs` + typings)

## Install

```bash
bun add onionui
```

## Tailwind config

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import onionui from "onionui";

export default {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  plugins: [onionui({ defaultTheme: "light" })]
} satisfies Config;
```

## Usage

```html
<div class="card max-w-md">
  <h2 class="card-title">Onion UI</h2>
  <div class="card-body">
    <input class="input" placeholder="Type here..." />
  </div>
  <div class="card-actions">
    <button class="btn">Default</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-outline">Outline</button>
  </div>
</div>
```

Switch theme:

```html
<html data-theme="dark"></html>
```

## Development

```bash
bun install
bun run check
bun run build
```

## Publish to npmjs

1. Login:
   ```bash
   npm login
   ```
2. Ensure package name is available:
   ```bash
   npm view onionui
   ```
3. Publish:
   ```bash
   npm publish --access public
   ```

> Before publish, update `name`, `version`, and repository metadata in `package.json`.
