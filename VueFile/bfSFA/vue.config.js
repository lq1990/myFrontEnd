module.exports = {
  baseUrl: './',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/assets/style/main.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://yapi.demo.qunar.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/mock/37142/api"
        }
      }
    }
  }
}