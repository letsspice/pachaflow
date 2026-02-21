import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        serif: ["var(--font-source-serif-4)", "serif"],
      },
      colors: {
        tented: {
          cream: "#F2EEE7",
          forest: "#2F4F3E",
          heading: "#3A3A34",
          body: "#1E1E1A",
          cardHeading: "#1C1C18",
          helper: "#4A4A45",
          stroke: "#D1CBC1",
        },
        background: "#F2EEE7",
        heading: "#3A3A34",
        body: "#1E1E1A",
      },
      spacing: {
        // Custom spacing tokens from design specs
        30: "7.5rem", // 120px
        hero: "43.75rem", // 700px hero section height
      },
      borderRadius: {
        card: "0.75rem", // 12px cards
        button: "0.5rem", // 8px CTAs
      },
      fontSize: {
        logo: ["1.5rem", "1.95rem"], // 24 / 31.2
        menu: ["1rem", "1.6rem"], // 16 / 25.6
        "hero-heading": ["3.5rem", "4.55rem"], // 56 / 72.8
        "hero-body": ["1.125rem", "1.8rem"], // 18 / 28.8
        "section-heading": ["2rem", "2.6rem"], // 32 / 41.6
        "card-heading": ["1.5rem", "1.8rem"], // 24 / 28.8
        body: ["1rem", "1.6rem"], // 16 / 25.6
        helper: ["0.875rem", "1.4rem"], // 14 / 22.4
      },
      letterSpacing: {
        menu: "0.078125rem", // 1.25px tracking for nav items
      },
    },
  },
  plugins: [],
};

export default config;
