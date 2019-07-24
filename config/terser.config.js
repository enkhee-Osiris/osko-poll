module.exports = {
  terserOptions: {
    parse: {
      ecma: 8
    },
    compress: {
      ecma: 5,
      warnings: false,
      comparisons: false,
      inline: 2
    },
    mangle: {
      safari10: true
    },
    output: {
      ecma: 5,
      comments: false,
      ascii_only: true
    }
  },
  parallel: true,
  cache: true,
  sourceMap: process.env.NODE_ENV !== 'production'
};
