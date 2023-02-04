/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,astro}",
    "./src/components/**/*.{js,jsx,ts,tsx,astro}",
    "./src/layouts/**/*.{js,jsx,ts,tsx,astro}",
  ],
  theme: {
    fontFamily: {
      general: ["DMSans", "Helvetica"],
      logo: ["Helvetica"],
    },
    fontSize: {
      h1: ["48px", { lineHeight: "110%", fontWeight: 700 }],
      h2: ["38px", { lineHeight: "110%", fontWeight: 700 }],
      subtitle: ["20px", { lineHeight: "120%", fontWeight: 400 }],
      subtitleBold: ["20px", { lineHeight: "120%", fontWeight: 700 }],
      buttonL: ["18px", { lineHeight: "120%", fontWeight: 500 }],
      logo: [
        "20px",
        { lineHeight: "110%", fontWeight: 700, letterSpacing: "0px" },
      ],
      body: ["16px", { lineHeight: "140%", fontWeight: 400 }],
      bodyBold: ["18px", { lineHeight: "140%", fontWeight: 700 }],
      body2: ["14px", { lineHeight: "140%", fontWeight: 400 }],
      button: ["15px", { lineHeight: "140%", fontWeight: 500 }],
      caption: ["12px", { lineHeight: "120%", fontWeight: 400 }],
      h1Mobile: ["36px", { lineHeight: "120%", fontWeight: 700 }],
      h2Mobile: ["28px", { lineHeight: "120%", fontWeight: 700 }],
      subtitleMobile: ["20px", { lineHeight: "140%", fontWeight: 400 }],
      subtitleMobileBold: ["20px", { lineHeight: "140%", fontWeight: 700 }],
      buttonLMobile: ["16px", { lineHeight: "120%", fontWeight: 500 }],
      bodyMobile: ["16px", { lineHeight: "150%", fontWeight: 400 }],
      body2Mobile: ["14px", { lineHeight: "150%", fontWeight: 400 }],
      bodyBoldMobile: ["16px", { lineHeight: "26px", fontWeight: 700 }],
      buttonMobile: ["14px", { lineHeight: "120%", fontWeight: 500 }],
    },
    colors: {
      primary: "#E86F18",
      secondary: "#3C1A00",
      bg: "#FEFBF6",
      100: "#000000",
      90: "#323232",
      80: "#6B6B6B",
      20: "#EDEDED",
      10: "#FFFFFF",
    },
    extend: {
      screens: {
        md: "768px",
        lg: "1280px",
      },
      gridTemplateColumns: {
        sm: "calc((100% - 375px) / 2) repeat(4, 1fr) calc((100% - 375px) / 2)",
        md: "calc((100% - 768px) / 2) repeat(6, 1fr) calc((100% - 768px) / 2)",
        lg: "calc((100% - 1100px) / 2) repeat(12,1fr) calc((100% - 1100px) / 2)",
      },
      gridTemplateRows: {
        "max-content": "max-content",
      },
      gridColumn: {
        sm: "1 / span 6",
        md: "1 / span 8",
        lg: "1 / span 14",
      },
    },
  },
  plugins: [],
};
