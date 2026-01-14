// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
  
//   theme: { extend: {
//   colors: {
//     primary: {
//       light: '#3b60f6ff',
//       dark: '#0c3971ff',  
//     },
//     bg: {
//       light: '#f3f4f6', 
//       dark: '#111827',  
//     },
//   },
// }},
//   plugins: [],
// }



module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b60f6ff",   // main brand color
          dark: "#0c3971ff",
          soft: "#e8edff",        // subtle backgrounds
        },
        bg: {
          light: "#dee6f0",
          dark: "#111827",
          cardLight: "#ffffff",
          cardDark: "#1f2937",
        },
        text: {
          light: "#1f2937",
          dark: "#e5e7eb",
          muted: "#6b7280",
        },
        border: {
          light: "#e5e7eb",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [],
};
