const yaml = require('js-yaml');

/**
 * See https://www.11ty.dev/docs/config/
 */
module.exports = (config) => {
  // Support YAML data
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  // Use these template formats
  config.setTemplateFormats(['njk']);

  // Pass-through files
  config.addPassthroughCopy('src/robots.txt');
  config.addPassthroughCopy('src/favicon.ico');
  config.addPassthroughCopy('src/images');

  // Compiled assets.
  config.addPassthroughCopy({'src/build': 'assets'});

  // Watch compiled assets for changes
  config.addWatchTarget('src/compiled-assets/main.css');
  config.addWatchTarget('src/compiled-assets/main.js');
  config.addWatchTarget('src/compiled-assets/vendor.js');

  // TOOD Minify in production

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    htmlTemplateEngine: 'njk',
  };
};
