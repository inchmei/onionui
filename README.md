# onionui

`onionui` is a component library built as a pure Tailwind CSS plugin.

## Features

- Pure Tailwind plugin (no runtime JS in your app)
- Theme tokens via CSS variables (`light` / `dark` / `mssp`)
- Ready classes for component patterns: `btn`, `alert`, `navbar`, `badge`, `tabs`, `dropdown`, `modal`, `avatar`, `card`, `input`, `table`, `drawer`, `steps`, `toast`, and more
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
  plugins: [onionui({ defaultTheme: "mssp" })]
} satisfies Config;
```

## Usage

```html
<header class="navbar mb-4">
  <div class="navbar-start">
    <a class="font-semibold">onionui</a>
  </div>
  <div class="navbar-center">
    <a class="navbar-link">Docs</a>
    <a class="navbar-link">Components</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-sm">Login</button>
    <button class="btn btn-primary btn-sm">Sign up</button>
  </div>
</header>

<div class="alert alert-info mb-4">
  <span>Build with Tailwind plugin classes only.</span>
</div>

<div class="mb-4 flex items-center gap-3">
  <span class="badge">Default</span>
  <span class="badge badge-primary">Primary</span>
  <div class="tabs">
    <button class="tab tab-active">Overview</button>
    <button class="tab">API</button>
    <button class="tab">Examples</button>
  </div>
</div>

<div class="card max-w-md">
  <h2 class="card-title">Onion UI</h2>
  <div class="card-body">
    <input class="input" placeholder="Type here..." />
  </div>
  <div class="card-actions">
    <button class="btn">Default</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-outline">Outline</button>
    <button class="btn btn-ghost">Ghost</button>
  </div>
</div>

<div class="dropdown mt-4">
  <button class="btn btn-outline btn-sm">Menu</button>
  <div class="dropdown-content">
    <button class="menu-item">Profile</button>
    <button class="menu-item">Settings</button>
    <button class="menu-item">Sign out</button>
  </div>
</div>

<div class="mt-4 flex items-center gap-3">
  <div class="avatar avatar-sm">
    <img src="https://i.pravatar.cc/80?img=8" alt="avatar" />
  </div>
  <div class="avatar">
    <span class="avatar-placeholder">EC</span>
  </div>
  <div class="avatar avatar-lg">
    <img src="https://i.pravatar.cc/120?img=12" alt="avatar" />
  </div>
</div>

<div class="modal modal-open">
  <div class="modal-box">
    <h3 class="modal-title">Delete this record?</h3>
    <p class="modal-body">This action cannot be undone.</p>
    <div class="modal-action">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

Switch theme:

```html
<html data-theme="mssp"></html>
```

## Development

```bash
bun install
bun run check
bun run build
```

## Demo

```bash
bun run demo:build
```

Then open `example/index.html` in browser.

For live CSS rebuild:

```bash
bun run demo:watch
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
