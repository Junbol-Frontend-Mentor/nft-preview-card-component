module.exports = {
  content: [
    './src/**/*.{html,js,css}', // Include all CSS, HTML, and JS files in src directory
    './index.html',             // Include the main HTML file
  ],
  theme: {
    extend: {
      height: {
        '500': '500px', // Custom height class
      },
      colors: {
        primary: {
          'soft-blue': 'hsl(215, 51%, 70%)',
          'cyan': 'hsl(178, 100%, 50%)',
        },
        neutral: {
          'very-dark-blue-main-bg': 'hsl(217, 54%, 11%)',
          'very-dark-blue-card-bg': 'hsl(216, 50%, 16%)',
          'very-dark-blue-line': 'hsl(215, 32%, 27%)',
          'white': 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

