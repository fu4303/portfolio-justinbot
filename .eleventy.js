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
  config.addPassthroughCopy('src/assets/images');

  // TOOD Minify in production

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    htmlTemplateEngine: 'njk',
  };
};
