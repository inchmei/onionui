var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toCommonJS = (from) => {
  var entry = (__moduleCache ??= new WeakMap).get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function") {
    for (var key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(entry, key))
        __defProp(entry, key, {
          get: __accessProp.bind(from, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  __moduleCache.set(from, entry);
  return entry;
};
var __moduleCache;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};

// src/index.ts
var exports_src = {};
__export(exports_src, {
  themes: () => themes,
  default: () => src_default
});
module.exports = __toCommonJS(exports_src);

// node_modules/tailwindcss/dist/plugin.mjs
function g(i, n) {
  return { handler: i, config: n };
}
g.withOptions = function(i, n = () => ({})) {
  function t(o) {
    return { handler: i(o), config: n(o) };
  }
  return t.__isOptionsFunction = true, t;
};
var u = g;

// src/components/button.ts
var buttonComponents = {
  ".btn": {
    "@apply inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-colors duration-150": {},
    backgroundColor: "rgb(var(--onion-muted) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".btn:hover": {
    backgroundColor: "rgb(var(--onion-border) / 1)"
  },
  ".btn:disabled": {
    "@apply cursor-not-allowed opacity-50": {}
  },
  ".btn-primary": {
    backgroundColor: "rgb(var(--onion-primary) / 1)",
    color: "rgb(var(--onion-primary-content) / 1)"
  },
  ".btn-primary:hover": {
    filter: "brightness(0.95)"
  },
  ".btn-outline": {
    "@apply border": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "transparent"
  }
};

// src/components/card.ts
var cardComponents = {
  ".card": {
    "@apply rounded-xl border p-5 shadow-sm": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".card-title": {
    "@apply text-lg font-semibold": {}
  },
  ".card-body": {
    "@apply mt-3 space-y-2": {}
  },
  ".card-actions": {
    "@apply mt-4 flex items-center gap-2": {}
  }
};

// src/components/input.ts
var inputComponents = {
  ".input": {
    "@apply h-10 w-full rounded-lg border bg-transparent px-3 text-sm outline-none transition-colors": {},
    borderColor: "rgb(var(--onion-border) / 1)",
    color: "rgb(var(--onion-fg) / 1)",
    backgroundColor: "rgb(var(--onion-bg) / 1)"
  },
  ".input:focus": {
    borderColor: "rgb(var(--onion-primary) / 1)",
    boxShadow: "0 0 0 3px rgb(var(--onion-primary) / 0.15)"
  }
};

// src/themes.ts
var lightTheme = {
  "--onion-bg": "255 255 255",
  "--onion-fg": "17 24 39",
  "--onion-muted": "243 244 246",
  "--onion-border": "229 231 235",
  "--onion-primary": "59 130 246",
  "--onion-primary-content": "255 255 255"
};
var darkTheme = {
  "--onion-bg": "17 24 39",
  "--onion-fg": "243 244 246",
  "--onion-muted": "31 41 55",
  "--onion-border": "55 65 81",
  "--onion-primary": "56 189 248",
  "--onion-primary-content": "8 47 73"
};
var themes = {
  light: lightTheme,
  dark: darkTheme
};

// src/index.ts
var onionui = u.withOptions((options) => ({ addBase, addComponents }) => {
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
}, () => ({
  theme: {
    extend: {}
  }
}));
var src_default = onionui;
