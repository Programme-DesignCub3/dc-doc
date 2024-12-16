/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(94, 114, 228)",
          light: "rgb(134, 168, 255)",
          dark: "rgb(23, 37, 84)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "rgb(203 213 225)",
            h1: {
              color: "white",
            },
            h2: {
              color: "white",
            },
            h3: {
              color: "white",
            },
            h4: {
              color: "white",
            },
            strong: {
              color: "white",
            },
            code: {
              color: "rgb(134, 168, 255)",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            a: {
              color: "rgb(134, 168, 255)",
              "&:hover": {
                color: "rgb(94, 114, 228)",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("@tailwindcss/typography")],
};
