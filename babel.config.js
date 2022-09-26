/* eslint-disable prettier/prettier */
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],

  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app/*': ['./src/app/*'],
          '@config/*': ['./src/config/*'],
          '@core/*': ['./src/core/*'],
          '@http/*': ['./src/http/*'],
          '@infra/*': ['./src/infra/*'],
          '@tests/*': ['./src/tests/*'],
        },
      },
    ],
  ],
};
