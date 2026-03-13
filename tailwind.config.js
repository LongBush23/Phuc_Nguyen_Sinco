/* Tailwind CDN config — loaded via <script src="tailwind.config.js"> */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "background-dark": "#0f172a",
        "surface-dark": "#1e293b",
        "brand-blue": "#3b82f6",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
