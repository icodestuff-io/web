module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#010c20',
        foreground: '#eff0f2',
        terminal: {
          100: '#fffff2',
          200: '#ecffbf',
          300: '#b0ff8c',
          400: '#7dff59',
          500: '#4AF626',
          600: '#17C300',
          700: '#009000',
          800: '#005D00',
          900: '#001100',
        },
        primary: {
          100: '#eeecb3',
          200: '#eee875',
          300: '#eee537'
        }
      },
      width: {
        '80': '20rem'
      },
      borderRadius: {
        semi: '1rem'
      }
    },
    fontFamily: {
      sans: ['"Raleway"'],
      mono: ['"source code pro"']
    }
  },
  variants: {},
  plugins: [

  ],
};
