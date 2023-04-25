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
      primary: "#EA5436",
      secondary: "#3C1A00",
      tertiary: "#FFEEE2",
      bg: "#FBF9F7",
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
        sm: "10% repeat(4, 1fr) 10%",
        md: "calc((100% - 768px) / 2) repeat(6, 1fr) calc((100% - 768px) / 2)",
        lg: "calc((100% - 1200px) / 2) repeat(12,1fr) calc((100% - 1200px) / 2)",
      },
      gridTemplateRows: {
        "max-content": "max-content",
      },
      gridColumn: {
        sm: "1 / span 6",
        md: "1 / span 8",
        lg: "1 / span 14",
      },
      animation: {
        fadeFromLeft: "fadeFromLeft 0.6s ease 0s 1 normal both",
        fadeFromLeft2: "fadeFromLeft 0.6s ease 0.1s 1 normal both",
        fadeFromLeft3: "fadeFromLeft 0.6s ease 0.75s 1 normal both",
        fadeFromRight: "fadeFromRight 0.6s ease 0s 1 normal both",
        fadeFromRight2: "fadeFromRight 0.6s ease 0.4s 1 normal both",
        fadeFromRight3: "fadeFromRight 0.6s ease 1.25s 1 normal both",
        fadeIn: "fadeIn 0.6s ease 0s 1 normal both",
        fadeFromBottom: "fadeFromBottom 0.6s ease 0s 1 normal both",
        fadeFromBottom1: "fadeFromBottom 0.6s ease 0.1s 1 normal both",
        fadeFromBottom2: "fadeFromBottom 0.6s ease 0.2s 1 normal both",
        fadeFromBottom3: "fadeFromBottom 0.6s ease 0.3s 1 normal both",
        fadeFromBottom4: "fadeFromBottom 0.6s ease 0.4s 1 normal both",
        fadeFromBottom5: "fadeFromBottom 0.6s ease 0.5s 1 normal both",
        fadeFromBottom6: "fadeFromBottom 0.6s ease 0.6s 1 normal both",
        fadeFromBottom7: "fadeFromBottom 0.6s ease 0.7s 1 normal both",
        fadeFromBottomGalleryLeft: "fadeFromBottomGalleryLeft 0.6s ease 0.8s 1 normal both",
        fadeFromBottomGalleryRight: "fadeFromBottomGalleryRight 0.6s ease 0.8s 1 normal both",
        fadeFromTopGallery: "fadeFromTopGallery 0.6s ease 0.1s 1 normal both",
        fadeFromLeftGallery: "fadeFromLeftGallery 0.6s ease 0.3s 1 normal both",
        fadeFromRightGallery: "fadeFromRightGallery 0.6s ease 0.2s 1 normal both",
        fadeFromTopNav: "fadeFromTopNav 0.6s ease 0.5s 1 normal both",
        mobileMenuDrop: "mobileMenuDrop 0.5s ease 0s 1 normal both",
        mobileMenuWithdraw: "mobileMenuWithdraw 0.5s ease 0s 1 normal both",
        dottedLineRevealRight:
          "dottedLineRevealRight 0.4s ease 0.4s 1 normal both",
        dottedLineRevealRight2:
          "dottedLineRevealRight 0.4s ease 0.6s 1 normal both",
        dottedLineRevealLeft:
          "dottedLineRevealLeft 0.4s ease 0.7s 1 normal both",
      },
      keyframes: {
        fadeFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeFromRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeFromLeftGallery: {
          "0%": {
            opacity: 0,
            transform: "translateX(-110px) translateY(40px)",
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(-80px) translateY(40px)",
            
          },
        },
        fadeFromRightGallery: {
          "0%": {
            opacity: 0,
            transform: "translateX(110px) translateY(80px)",
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(80px) translateY(80px)",
            
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeFromBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeFromBottomGalleryLeft: {
          "0%": {
            opacity: 0,
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: 1,
            transform:"rotate(6deg)"
          },
        },
        fadeFromBottomGalleryLeft: {
          "0%": {
            opacity: 0,
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: 1,
            transform:"rotate(-6deg)"
          },
        },
        fadeFromTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        fadeFromTopGallery: {
          "0%": {
            opacity: 0,
            transform: "translateY(-110px)",
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(-80px)",
            
          },
        },
        fadeFromTopNav: {
          "0%": {
            opacity: 0,
            transform: "translateY(-200px) translateX(-50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px) translateX(-50%)",
          },
        },
        mobileMenuDrop: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        mobileMenuWithdraw: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        dottedLineRevealRight: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        dottedLineRevealLeft: {
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
