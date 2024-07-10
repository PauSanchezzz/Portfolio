/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#4A2173",
        textHome: "#ECE1FF",
        hover: "#BB81F7",
        "tecnology-blue": "#1A6181",
        "tecnology-lightgreen": "#6DBC4C",
      },
      dropShadow: {
        "3xl": "0 15px 30px #4A2173",
        "tecnology-blue": "0 5px 20px #1A6181",
        "tecnology-black": "0 5px 20px #000000",
        header: "0 5px 10px #EDD2F7",
        lightgreen: "0 5px 20px #6DBC4C",
        purple: "0 5px 20px #4A2173",
        orange: "0 5px 20px #E44D26",
        yellow: "0 5px 20px #F0DB4F",
        blue: "0 5px 20px #007ACC",
        darkgreen: "0 5px 20px #12924F",
        red: "0 5px 20px #FF2D20",
        white: "0 5px 20px #D6F0FF",
      },
    },
  },
  plugins: [],
};
