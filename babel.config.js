module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['styled-components', { ssr: true }]],
    plugins: [
      "react-native-reanimated/plugin"],
  };
};
