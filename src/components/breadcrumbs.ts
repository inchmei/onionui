export const breadcrumbsComponents = {
  ".breadcrumbs": {
    "@apply max-w-full overflow-x-auto text-sm": {},
    color: "rgb(var(--onion-content-muted) / 1)"
  },
  ".breadcrumbs ul": {
    "@apply flex items-center gap-2 whitespace-nowrap": {}
  },
  ".breadcrumbs li": {
    "@apply flex items-center gap-2": {}
  },
  ".breadcrumbs li + li::before": {
    "@apply content-['/']": {},
    color: "rgb(var(--onion-disabled) / 1)"
  }
};
