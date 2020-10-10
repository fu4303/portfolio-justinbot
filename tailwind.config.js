module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      './src/**/*.njk',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
