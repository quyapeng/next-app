module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 1000,
      //   viewportWidth: 750,
      //   unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [/^\.html/], //排除html样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
  //   [
  //     "postcss-flexbugs-fixes",
  //     [
  //       "postcss-preset-env",
  //       {
  //         autoprefixer: {
  //           flexbox: "no-2009",
  //         },
  //         stage: 3,
  //         features: {
  //           "custom-properties": false,
  //         },
  //       },babel-plugin-import
  //     ],
  //   ],
};
