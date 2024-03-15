module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
    },
    backgroundImage: {
      hero: "url(https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt772f098ba92aa0c8/65ad5890c5b4a4040a133ada/GOAL_-_Blank_WEB_-_Facebook_-_2024-01-21T174437.969.png?auto=webp&format=pjpg&width=1080&quality=60)",
    },
  },
  plugins: [],
};
