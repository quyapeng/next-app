/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");

const withTM = require("next-transpile-modules")(["antd-mobile"]);

module.exports = module.exports = withTM(
  withImages({
    // 你项目中其他的 Next.js 配置
    reactStrictMode: true,
  }),
  withLess({}),
  withCSS({})
);
