const createConfig = ({ isDev }) => {
  const plugins = [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    ['transform-remove-console', { exclude: ['error', 'warn'] }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime', { useESModules: true }]
  ];

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
          targets: '> 0.25%, not dead',
          loose: true,
          debug: isDev
        }
      ],
      [
        '@babel/preset-react',
        {
          development: isDev
        }
      ]
    ],
    plugins: plugins
  };
};

const isDev = process.env.NODE_ENV === 'development';

module.exports = createConfig({ isDev });
