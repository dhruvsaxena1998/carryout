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
          '@screens': './src/screens/',
          '@layouts': './src/layouts/',
        },
      },
    ],
  ],
  ignore: ['node_modules/*'],
};
