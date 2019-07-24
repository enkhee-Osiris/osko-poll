const safePostCssParser = require('postcss-safe-parser');

module.exports = {
  cssProcessorOptions: {
    parser: safePostCssParser,
    map:
      process.env.NODE_ENV === 'production'
        ? false
        : {
            inline: false,
            annotation: true
          }
  }
};
