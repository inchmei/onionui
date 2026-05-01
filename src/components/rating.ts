export const ratingComponents = {
  ".rating": {
    "@apply inline-flex items-center gap-1": {}
  },
  ".rating input": {
    "@apply h-5 w-5 cursor-pointer appearance-none bg-current": {},
    clipPath:
      "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)"
  },
  ".rating input:checked, .rating input:has(~ input:checked)": {
    color: "rgb(var(--onion-warning) / 1)"
  }
};
