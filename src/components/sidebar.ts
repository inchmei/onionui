const sidebarTargets = [
  "actions-buttons",
  "actions-badges",
  "data-table",
  "data-avatar",
  "data-progress",
  "forms-inputs",
  "forms-select",
  "forms-toggles",
  "navigation-navbar",
  "navigation-tabs",
  "navigation-steps",
  "feedback-alerts",
  "feedback-loading",
  "feedback-toast",
  "layout-collapse",
  "layout-accordion",
  "layout-divider",
  "overlays-dropdown",
  "overlays-modal",
  "overlays-drawer"
];

const noSidebarTargetSelector = `body${sidebarTargets
  .map((target) => `:not(:has(#${target}:target))`)
  .join("")}`;

const activeSubmenuSelectors = [
  `${noSidebarTargetSelector} .sidebar-menu-button[href="#actions-buttons"]`,
  ...sidebarTargets.map(
    (target) => `body:has(#${target}:target) .sidebar-menu-button[href="#${target}"]`
  )
];

const activeSubmenuSelector = activeSubmenuSelectors.join(", ");

const activePopupSubmenuSelectors = [
  `${noSidebarTargetSelector} .sidebar-popup .sidebar-menu-button[href="#actions-buttons"]`,
  ...sidebarTargets.map(
    (target) => `body:has(#${target}:target) .sidebar-popup .sidebar-menu-button[href="#${target}"]`
  )
];

const msspThemeSelector = ':root:has(.theme-controller[value="mssp"]:checked)';

const msspActivePopupSubmenuSelector = activePopupSubmenuSelectors
  .flatMap((selector) => [`[data-theme="mssp"] ${selector}`, `${msspThemeSelector} ${selector}`])
  .join(", ");

export const sidebarComponents = {
  ".sidebar-toggle": {
    display: "none"
  },
  ".sidebar": {
    "@apply shrink-0": {},
    width: "240px",
    height: "100vh",
    overflow: "visible",
    background: "var(--onion-sidebar-bg)",
    backgroundImage: "var(--onion-sidebar-bg-image)",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    color: "var(--onion-sidebar-fg)",
    transition: "width 0.2s ease, padding 0.2s ease"
  },
  ".sidebar-collapsed": {
    width: "64px",
    padding: "0",
    backgroundImage: "var(--onion-sidebar-collapsed-bg-image)"
  },
  ".sidebar.sidebar-collapsed": {
    width: "64px",
    padding: "0"
  },
  ".sidebar-toggle:checked ~ .sidebar": {
    width: "64px",
    padding: "0",
    backgroundImage: "var(--onion-sidebar-collapsed-bg-image)"
  },
  ".sidebar-logo-area": {
    "@apply flex items-center overflow-hidden": {},
    height: "64px",
    padding: "0 14px"
  },
  ".sidebar-logo-wrap": {
    "@apply flex items-center overflow-hidden": {},
    width: "100%",
    height: "40px"
  },
  ".sidebar-logo-text": {
    fontSize: "20px",
    lineHeight: "22px",
    fontWeight: "600",
    whiteSpace: "nowrap",
    transition: "opacity 0.2s ease"
  },
  ".sidebar-collapsed > .sidebar-logo-area": {
    justifyContent: "center",
    padding: "0 12px"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-logo-area": {
    justifyContent: "center",
    padding: "0 12px"
  },
  ".sidebar-collapsed > .sidebar-logo-area .sidebar-logo-wrap": {
    width: "40px",
    justifyContent: "center"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-logo-area .sidebar-logo-wrap": {
    width: "40px",
    justifyContent: "center"
  },
  ".sidebar-collapsed > .sidebar-logo-area .sidebar-logo-text, .sidebar-collapsed > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary .sidebar-menu-label": {
    opacity: "0",
    pointerEvents: "none"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-logo-area .sidebar-logo-text, .sidebar-toggle:checked ~ .sidebar > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary .sidebar-menu-label": {
    opacity: "0",
    pointerEvents: "none"
  },
  ".sidebar-collapsed > .sidebar-logo-area .sidebar-logo-text": {
    width: "0"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-logo-area .sidebar-logo-text": {
    width: "0"
  },
  ".sidebar-collapsed > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary .sidebar-menu-label": {
    display: "none",
    width: "0"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary .sidebar-menu-label": {
    display: "none",
    width: "0"
  },
  ".sidebar-collapsed .sidebar-submenu, .sidebar-toggle:checked ~ .sidebar .sidebar-submenu": {
    display: "none"
  },
  ".sidebar-menu": {
    "@apply flex flex-col gap-1 text-sm": {},
    padding: "8px 0"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-menu": {
    width: "64px",
    alignItems: "stretch"
  },
  ".sidebar-menu-item": {
    "@apply relative": {},
    width: "100%"
  },
  ".sidebar-menu-group": {
    "@apply relative": {},
    width: "100%"
  },
  ".sidebar-menu-group > summary": {
    listStyle: "none"
  },
  ".sidebar-menu-group > summary::-webkit-details-marker": {
    display: "none"
  },
  ".sidebar-menu-group > summary::after": {
    content: '""',
    width: "7px",
    height: "7px",
    marginLeft: "auto",
    flexShrink: "0",
    borderRight: "1.5px solid currentColor",
    borderBottom: "1.5px solid currentColor",
    transform: "rotate(45deg)",
    transition: "transform 0.2s ease"
  },
  ".sidebar-menu-group[open] > summary::after": {
    transform: "rotate(225deg)"
  },
  ".sidebar-collapsed > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary::after, .sidebar-toggle:checked ~ .sidebar > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary::after": {
    display: "none"
  },
  ".sidebar-menu-button": {
    "@apply flex w-full items-center gap-2 text-left transition-colors": {},
    minHeight: "40px",
    borderRadius: "0",
    color: "var(--onion-sidebar-fg)",
    background: "transparent",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  ".sidebar > .sidebar-menu .sidebar-menu-button": {
    padding: "0 24px"
  },
  ".sidebar-collapsed > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary": {
    justifyContent: "center",
    gap: "0",
    width: "64px",
    minHeight: "40px",
    padding: "0"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary": {
    justifyContent: "center",
    gap: "0",
    width: "64px",
    minHeight: "40px",
    padding: "0"
  },
  ".sidebar-collapsed > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary .sidebar-menu-icon, .sidebar-toggle:checked ~ .sidebar > .sidebar-menu > .sidebar-menu-item > .sidebar-menu-group > summary .sidebar-menu-icon": {
    margin: "0 auto"
  },
  ".sidebar-menu-button:hover:not(.menu-active)": {
    background: "var(--onion-sidebar-hover)"
  },
  ".sidebar > .sidebar-menu .sidebar-menu-button.menu-active": {
    color: "var(--onion-sidebar-active-fg)",
    background: "var(--onion-sidebar-active-bg)",
    backgroundImage: "var(--onion-sidebar-item-active-bg-image)",
    backgroundSize: "100% 100%"
  },
  ".sidebar-collapsed > .sidebar-menu .sidebar-menu-button.menu-active": {
    backgroundImage: "var(--onion-sidebar-item-collapsed-active-bg-image)"
  },
  ".sidebar-toggle:checked ~ .sidebar > .sidebar-menu .sidebar-menu-button.menu-active": {
    backgroundImage: "var(--onion-sidebar-item-collapsed-active-bg-image)"
  },
  [activeSubmenuSelector]: {
    color: "var(--onion-sidebar-active-fg)",
    background: "var(--onion-sidebar-active-bg)",
    backgroundImage: "var(--onion-sidebar-item-active-bg-image)",
    backgroundSize: "100% 100%"
  },
  ".sidebar-menu-icon": {
    "@apply relative inline-flex shrink-0 items-center justify-center": {},
    width: "18px",
    height: "18px"
  },
  ".sidebar-menu-icon img": {
    position: "absolute",
    inset: "0",
    width: "18px",
    height: "18px",
    objectFit: "contain"
  },
  ".sidebar-menu-icon-active": {
    display: "none"
  },
  ".sidebar-menu-button.menu-active .sidebar-menu-icon-normal": {
    display: "none"
  },
  ".sidebar-menu-button.menu-active .sidebar-menu-icon-active": {
    display: "block"
  },
  ".sidebar-popup": {
    position: "absolute",
    left: "64px",
    top: "0",
    zIndex: "60",
    display: "none",
    width: "240px",
    overflow: "hidden",
    border: "1px solid rgb(var(--onion-border) / 1)",
    borderRadius: "var(--onion-radius-box)",
    background: "rgb(var(--onion-bg) / 1)",
    boxShadow: "var(--onion-shadow)"
  },
  ".sidebar-collapsed .sidebar-menu-item:hover > .sidebar-popup, .sidebar-collapsed .sidebar-menu-item:focus-within > .sidebar-popup, .sidebar-collapsed .sidebar-menu-group:hover > .sidebar-popup, .sidebar-collapsed .sidebar-menu-group:focus-within > .sidebar-popup": {
    display: "block"
  },
  ".sidebar-toggle:checked ~ .sidebar .sidebar-menu-item:hover > .sidebar-popup, .sidebar-toggle:checked ~ .sidebar .sidebar-menu-item:focus-within > .sidebar-popup, .sidebar-toggle:checked ~ .sidebar .sidebar-menu-group:hover > .sidebar-popup, .sidebar-toggle:checked ~ .sidebar .sidebar-menu-group:focus-within > .sidebar-popup": {
    display: "block"
  },
  ".sidebar-popup .sidebar-menu": {
    padding: "8px 0"
  },
  ".sidebar-popup .sidebar-menu > li:first-child": {
    display: "none"
  },
  ".sidebar-popup .sidebar-menu-button": {
    justifyContent: "flex-start",
    minHeight: "40px",
    borderRadius: "0",
    padding: "0 24px",
    color: "rgb(var(--onion-fg) / 1)"
  },
  ".sidebar-popup .sidebar-menu-button:hover:not(.menu-active)": {
    background: "rgb(var(--onion-muted) / 1)"
  },
  ".sidebar-popup .sidebar-menu-button.menu-active": {
    background: "rgb(var(--onion-primary) / 0.12)",
    color: "rgb(var(--onion-primary) / 1)"
  },
  ".sidebar-submenu": {
    "@apply flex flex-col gap-1": {},
    display: "none",
    marginTop: "2px",
    padding: "0 0 4px 0"
  },
  ".sidebar-submenu > li": {
    width: "100%"
  },
  ".sidebar-menu-item.submenu-open > .sidebar-submenu": {
    display: "flex"
  },
  ".sidebar-menu-item:focus-within > .sidebar-submenu, .sidebar-menu-group[open] > .sidebar-submenu": {
    display: "flex"
  },
  ".sidebar-collapsed > .sidebar-menu .sidebar-submenu": {
    display: "none"
  },
  ".sidebar-submenu .sidebar-menu-button": {
    width: "100%",
    minHeight: "32px",
    padding: "0 16px 0 50px",
    fontSize: "13px",
    color: "var(--onion-sidebar-fg)"
  },
  ".sidebar > .sidebar-menu .sidebar-submenu .sidebar-menu-button": {
    padding: "0 16px 0 50px"
  },
  ".sidebar-submenu .sidebar-menu-button:hover:not(.menu-active)": {
    background: "var(--onion-sidebar-hover)"
  },
  [`[data-theme="mssp"] .sidebar, ${msspThemeSelector} .sidebar`]: {
    padding: "0",
    borderRight: "0"
  },
  [`[data-theme="mssp"] .sidebar.sidebar-collapsed, ${msspThemeSelector} .sidebar.sidebar-collapsed`]: {
    width: "64px"
  },
  [`[data-theme="mssp"] .sidebar-menu-button, ${msspThemeSelector} .sidebar-menu-button`]: {
    color: "#fff"
  },
  [`[data-theme="mssp"] .sidebar-menu-button:hover:not(.menu-active), ${msspThemeSelector} .sidebar-menu-button:hover:not(.menu-active)`]: {
    background: "rgba(255, 255, 255, 0.07)",
    color: "#fff"
  },
  [`[data-theme="mssp"] .sidebar-popup, ${msspThemeSelector} .sidebar-popup`]: {
    border: "0",
    borderRadius: "2px",
    background: "#001529",
    backgroundImage: "none",
    boxShadow: "0 8px 24px rgba(0, 21, 41, 0.25)"
  },
  [`[data-theme="mssp"] .sidebar-popup .sidebar-menu, ${msspThemeSelector} .sidebar-popup .sidebar-menu`]: {
    background: "#001529"
  },
  [`[data-theme="mssp"] .sidebar-popup .sidebar-menu-button, ${msspThemeSelector} .sidebar-popup .sidebar-menu-button`]: {
    color: "#fff"
  },
  [`[data-theme="mssp"] .sidebar-popup .sidebar-menu-button:hover:not(.menu-active), ${msspThemeSelector} .sidebar-popup .sidebar-menu-button:hover:not(.menu-active)`]: {
    background: "rgba(255, 255, 255, 0.07)"
  },
  [`[data-theme="mssp"] .sidebar-popup .sidebar-menu-button.menu-active, ${msspThemeSelector} .sidebar-popup .sidebar-menu-button.menu-active`]: {
    background: "#1677ff",
    backgroundImage: "none",
    color: "#fff"
  },
  [msspActivePopupSubmenuSelector]: {
    background: "#1677ff",
    backgroundImage: "none",
    color: "#fff"
  },
  [`[data-theme="mssp"] .sidebar-submenu, ${msspThemeSelector} .sidebar-submenu`]: {
    background: "transparent"
  },
  [`[data-theme="mssp"] .sidebar-submenu .sidebar-menu-button, ${msspThemeSelector} .sidebar-submenu .sidebar-menu-button`]: {
    color: "#fff"
  },
  [`[data-theme="mssp"] .sidebar-submenu .sidebar-menu-button:hover:not(.menu-active), ${msspThemeSelector} .sidebar-submenu .sidebar-menu-button:hover:not(.menu-active)`]: {
    background: "rgba(255, 255, 255, 0.07)"
  }
};
