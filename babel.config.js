module.exports = {
  env: {
    dev: {
      presets: ["@vue/app"]
    },
    test: {
      presets: ["@babel/preset-env"]
    }
  },
  plugins: ["@babel/plugin-syntax-dynamic-import"]
};
