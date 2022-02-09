module.exports = {
  plugins: [
    [
      "postcss-custom-properties",
      {
        importFrom: "./styles/styles.css",
        preserve: true,
      },
    ],
    "postcss-flexbugs-fixes",
    "postcss-nesting",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
      },
    ],
  ],
}