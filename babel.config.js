module.exports = function (api) {
  api.cache(true);
  return {
    // plugins: [["transform-remove-console", { exclude: ["error", "warn"] }]],
  };
};
