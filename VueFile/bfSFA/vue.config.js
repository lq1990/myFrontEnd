module.exports = {
  baseUrl: './',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/assets/style/main.scss";`
      }
    }
  }
}