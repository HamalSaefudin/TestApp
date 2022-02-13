module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@env': './env.config.js',
          '@components': './src/components/',
          '@modules': './src/modules/',
          '@property': './src/property/',
          '@app': './src/app/',
        },
      },
    ],
  ],
};
