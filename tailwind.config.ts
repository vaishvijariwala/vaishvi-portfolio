import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx,mdx}", "./components/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: { extend: {} },
  plugins: [], // leave empty for now; we can add tailwindcss-animate later if needed
};

export default config;