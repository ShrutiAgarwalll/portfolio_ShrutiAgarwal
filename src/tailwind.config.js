export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1a1a1a",
          secondary: "#22d3ee",
          textPrimary: "#f5f5f5",
          textSecondary: "#a3a3a3",
          background: "#121212",
        },
        light: {
          primary: "#ffffff",
          secondary: "#2563eb",
          textPrimary: "#1e293b",
          textSecondary: "#475569",
          background: "#f8fafc",
        }
      },
      animation: {
        bounce: "bounce 1s infinite",
        slideUp: "slideUp 0.5s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60')",
      },
    },
  },
  plugins: [],
}