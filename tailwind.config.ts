import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        "on-primary": "var(--on-primary)",
        "widget-blue": "var(--widget-blue)",
        "chat-blue": "var(--chat-blue)",
        "logo-navy": "var(--logo-navy)",
        "logo-green": "var(--logo-green)",
        "midnight": "#050B1A",
        "glass-base": "rgba(11, 22, 48, 0.65)",
        "glass-card": "rgba(16, 30, 64, 0.55)",
        "glass-highlight": "rgba(22, 40, 84, 0.7)",
        "diamond-blue": "#3D8BFF",
        "ice-cyan": "#7FD6FF",
        "accent-glow": "rgba(61, 139, 255, 0.25)",
        "glass-border": "rgba(125, 170, 255, 0.18)",
        "glass-border-hover": "rgba(127, 214, 255, 0.42)",
        "surface-text": "#E1E8F8",
        "muted-text": "#91A3C4",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "frosted": "0 8px 32px 0 rgba(0, 4, 18, 0.37)",
        "frosted-lg": "0 16px 48px -8px rgba(0, 4, 20, 0.65)",
        "glow-blue": "0 0 35px -5px rgba(61, 139, 255, 0.35)",
        "glow-cyan": "0 0 30px -5px rgba(127, 214, 255, 0.35)",
      }
    },
  },
  plugins: [],
};
export default config;
