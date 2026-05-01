export const timelineComponents = {
  ".timeline": {
    "@apply flex flex-col": {}
  },
  ".timeline-horizontal": {
    "@apply flex-row": {}
  },
  ".timeline-start, .timeline-end": {
    "@apply px-4 py-2": {}
  },
  ".timeline-middle": {
    "@apply grid h-6 w-6 place-content-center rounded-full": {},
    backgroundColor: "rgb(var(--onion-primary) / 0.12)",
    color: "rgb(var(--onion-primary) / 1)"
  }
};
