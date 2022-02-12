module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components/',
          '@modules': './src/modules/',
          '@property': './src/property/',
        },
      },
    ],
  ],
};
