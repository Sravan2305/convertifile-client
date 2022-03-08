module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    screens: {
      s: { min: '200px', max: '1023px' },
      xl: { min: '1024px', max: '2000px' },
    },
    extend: {
      colors: {
        red: '#DB1F48',
        blue: '#004369',
        teal: '#01949A',
        'page-bg': '#E5DDC8',
        success: '#00E676',
        error: '#F44336',
        warning: '#FFCA28',
      },
      borderWidth: {
        '1px': '1px',
      },
    },
  },
  plugins: [],
};
