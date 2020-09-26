const yaml = require('js-yaml');

/**
 * See https://www.11ty.dev/docs/config/
 */
module.exports = (config) => {
  // Support YAML data
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
