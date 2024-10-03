/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'air-blue': 'rgba(242, 248, 252, 1)',          /* background product card */
        'air-darker-blue': 'rgba(230, 243, 251, 1)',  /* background product card */
        'shark-blue': 'rgba(0, 44, 99, 1)',           /* text color default */
        'new-dark-blue': 'rgba(0, 30, 68, 1)',        /* text color headings */
        'ballpoint-blue': 'rgba(0, 84, 188, 1)'      /* btn color */
      },
      fontFamily: {
        'encode-sans': ['"Encode Sans"', 'sans-serif'],
      },
      fontSize: {
        '14px': '14px', 
        '7px': '7px', 
        '8px': '8px',
        '9' : '9px',
        '10' : '10px',
      },
      lineHeight: {
        '18': '18px'     
      },
      letterSpacing: {
      'tight-custom': '-0.04em', // 24px -> -1px
      'wide-custom': '0.06em', // 16px -> -1px  
      },
      borderRadius: {
        'custom-10': '10px', 
      },
      height: {
        '350': '350px', 
        '400': '400px',
      },
    },
  },
  plugins: [],
};