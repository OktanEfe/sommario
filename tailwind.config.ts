import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E02826",           
        "dark-red": "#721210",        
        "racing-green": "#004A30",    
        shamrock: "#009460",          
        raisin: "#231F20",            
        xanthous: "#FEC04A",          
        "baby-powder": "#FAF9F6",     
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(35, 31, 32, 0.05)',
        'premium': '0 10px 40px -10px rgba(35, 31, 32, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;