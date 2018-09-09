module.exports = () => ({
  presets: ['react-native'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-vector-icons': '@expo/vector-icons',
        },
      },
    ],
    'transform-decorators-legacy',
    '@babel/plugin-transform-exponentiation-operator',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from'
  ],
};
