import type { Config } from "tailwindcss";
import onionui from "../src";

export default {
  content: ["./index.html"],
  plugins: [onionui({ defaultTheme: "light" })]
} satisfies Config;
