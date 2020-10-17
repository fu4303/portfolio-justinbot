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

  // Compiled assets
  config.addPassthroughCopy({ 'src/build': 'assets' });

  if (process.env.ELEVENTY_ENV === 'development') {
    // Watch the compiled assets
    config.setUseGitIgnore(false);
    config.setWatchThrottleWaitTime(200);
    config.addWatchTarget('./src/compiled-assets/main.css');
    config.addWatchTarget('./src/compiled-assets/main.js');
    config.addWatchTarget('./src/compiled-assets/vendor.js');
  }

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    htmlTemplateEngine: 'njk',
  };
};
