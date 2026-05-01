# OnionUI

`@emiliachen/onionui` is a pure Tailwind CSS plugin that provides themeable component classes.

## Features

- Pure CSS component classes, no component runtime required.
- Theme tokens via CSS variables: `light`, `dark`, and `mssp`.
- Works in plain HTML, Vue, React, or any framework that can use Tailwind CSS.
- Includes common UI patterns such as `btn`, `card`, `alert`, `input`, `table`, `tabs`, `modal`, `drawer`, `sidebar`, and more.

## Install

```bash
bun add @emiliachen/onionui tailwindcss
```

## Setup

### Tailwind CSS v4

Add the plugin in your CSS entry:

```css
@import "tailwindcss";
@plugin "@emiliachen/onionui";
```

If your templates are outside Tailwind's default scan paths, add `@source`:

```css
@import "tailwindcss";
@source "./src/**/*.{html,js,jsx,ts,tsx,vue}";
@plugin "@emiliachen/onionui";
```

### Tailwind CSS v3

Add the plugin in `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";
import onionui from "@emiliachen/onionui";

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  plugins: [onionui({ defaultTheme: "mssp" })]
} satisfies Config;
```

## Themes

Set a theme with `data-theme`:

```html
<html data-theme="mssp">
  ...
</html>
```

Available themes:

- `light`
- `dark`
- `mssp`

The `mssp` sidebar background and active-item images are embedded into the built plugin CSS as data URLs, so consumers do not need to copy static assets manually. The original assets are also included in the npm package under `assets/`.

You can also switch themes with CSS-only radio controllers:

```html
<label class="btn">
  <input class="theme-controller sr-only" type="radio" name="theme" value="light" />
  Light
</label>
<label class="btn">
  <input class="theme-controller sr-only" type="radio" name="theme" value="dark" />
  Dark
</label>
<label class="btn">
  <input class="theme-controller sr-only" type="radio" name="theme" value="mssp" checked />
  MSSP
</label>
```

## HTML Usage

Use OnionUI classes directly in markup:

```html
<div class="card max-w-md">
  <h2 class="card-title">Create customer</h2>
  <p class="card-body">Fill in the customer information before submitting.</p>

  <label class="label">
    <span class="label-text">Customer name</span>
  </label>
  <input class="input" placeholder="Acme Inc." />

  <div class="card-actions">
    <button class="btn btn-ghost">Cancel</button>
    <button class="btn btn-primary">Create</button>
  </div>
</div>
```

A CSS-only modal can be opened with `:target`:

```html
<a class="btn btn-primary" href="#confirm-modal">Open modal</a>

<div class="modal" id="confirm-modal">
  <div class="modal-box">
    <h3 class="modal-title">Confirm action</h3>
    <p class="modal-body">This action will be applied immediately.</p>
    <div class="modal-action">
      <a class="btn btn-ghost" href="#">Cancel</a>
      <a class="btn btn-primary" href="#">Confirm</a>
    </div>
  </div>
</div>
```

## Vue Usage

Configure Tailwind to scan Vue files:

```css
@import "tailwindcss";
@source "./src/**/*.{vue,ts}";
@plugin "@emiliachen/onionui";
```

Use the classes in Vue templates:

```vue
<template>
  <section class="space-y-4" data-theme="mssp">
    <div class="alert alert-info">
      <span>{{ message }}</span>
    </div>

    <div class="card max-w-lg">
      <h2 class="card-title">Partner profile</h2>
      <div class="card-body grid gap-3">
        <input v-model="form.name" class="input" placeholder="Partner name" />
        <select v-model="form.status" class="select">
          <option value="active">Active</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div class="card-actions">
        <button class="btn btn-ghost" type="button">Cancel</button>
        <button class="btn btn-primary" type="button" @click="submit">Save</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const message = "OnionUI classes work in Vue templates.";
const form = reactive({
  name: "",
  status: "active"
});

function submit() {
  console.log(form);
}
</script>
```

## React Usage

Configure Tailwind to scan React files:

```css
@import "tailwindcss";
@source "./src/**/*.{js,jsx,ts,tsx}";
@plugin "@emiliachen/onionui";
```

Use `className` in React components:

```tsx
import { useState } from "react";

export function CustomerCard() {
  const [enabled, setEnabled] = useState(true);

  return (
    <section className="space-y-4" data-theme="mssp">
      <div className="stats">
        <div className="stat">
          <span className="stat-title">Customers</span>
          <span className="stat-value">128</span>
          <span className="stat-desc">Active accounts</span>
        </div>
      </div>

      <div className="card max-w-lg">
        <h2 className="card-title">Customer settings</h2>
        <div className="card-body grid gap-3">
          <input className="input" placeholder="Customer name" />
          <label className="label justify-start gap-3">
            <input
              className="toggle"
              type="checkbox"
              checked={enabled}
              onChange={(event) => setEnabled(event.target.checked)}
            />
            <span className="label-text">Enable subscription</span>
          </label>
        </div>
        <div className="card-actions">
          <button className="btn btn-outline" type="button">
            Reset
          </button>
          <button className="btn btn-primary" type="button">
            Save
          </button>
        </div>
      </div>
    </section>
  );
}
```

## Common Component Classes

Grouped by usage:

- Actions: `btn`, `dropdown`, `modal`
- Data display: `avatar`, `badge`, `calendar`, `card`, `chat`, `countdown`, `diff`, `kbd`, `list`, `stats`, `table`, `timeline`
- Forms: `checkbox`, `fieldset`, `file-input`, `filter`, `input`, `label`, `radio`, `range`, `rating`, `select`, `textarea`, `toggle`, `validator`
- Navigation: `breadcrumbs`, `dock`, `link`, `menu`, `navbar`, `pagination`, `sidebar`, `steps`, `tabs`
- Feedback: `alert`, `loading`, `progress`, `radial-progress`, `skeleton`, `status`, `toast`
- Layout: `accordion`, `artboard`, `carousel`, `collapse`, `divider`, `drawer`, `footer`, `hero`, `indicator`, `join`, `mask`, `mockup`, `stack`, `swap`

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

Then open `example/index.html` in a browser.

For live CSS rebuild:

```bash
bun run demo:watch
```

## Publish

```bash
bun run check
bun run build
npm publish --access public
```
