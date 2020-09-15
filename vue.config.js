// 配置参考 | Vue Cli。(https://cli.vuejs.org/zh/config/#lintonsave)
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",

  // 多页面配置
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },

  productionSourceMap: false,

  devServer: {
    open: true, //浏览器自动打开页面
    host: "localhost", //如果是真机测试，就使用 "0.0.0.0"，可供其他设备访问
    port: 8080,
    https: false,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）
    overlay: {
      warnings: false,
      errors: true,
    },
    // 跨域代理
    proxy: {
      // api为转发路径
      "/api": {
        target: "<url>", // 目标地址
        ws: true, // 是否代理websockets
        changeOrigin: true, // 设置同源,默认false,是否需要改变原始主机头为目标URL
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },

  lintOnSave: false
};
