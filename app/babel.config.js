module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src': './src/',
          '@common': './src/common/',
          '@layouts': './src/layouts/',
          '@screens': './src/screens/',
          '@utils': './src/utils/',
        },
      },
    ],
  ],
  ignore: ['node_modules/*'],
};
