module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [
    {
      plugins: [
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
