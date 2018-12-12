const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //用于提取css，生成css文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩CSS
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 压缩JS
const HtmlWebpackPlugin = require("html-webpack-plugin"); // dist中css、js文件带hash，引入html时的更新问题。
const CleanWebpackPlugin = require("clean-webpack-plugin"); // clean 清理dist目录

module.exports = {
    entry: './src/index.js', // 入口
    resolve: {
        alias: { // 配置别名
            "@": path.resolve(__dirname, "src/") // 别名。@指的是 src/
        },
        extensions: [".js", ".vue", ".json"], // 配置可以省略的模块后缀名
    },
    externals: { // 配置外部扩展。意味：虽引入jQ，但最终不打包它。
        jquery: 'jQuery',
        lodash: '_'
    },
    module: {
        rules: [ //规则可有多个
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',  // 添加babel转码es6
                    options: {
                        cacheDirectory: true // 可提高速度
                    }
                }, {
                    loader: "eslint-loader", // eslint对代码格式化。放到后面右面，要首先执行。
                    options: {
                        fix: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader', // file-loader增强版，小img优化，大img转成dist中img
                        options: {
                            limit: 10000 // 小于10000字节，转成base64
                        }
                    },
                    {
                        loader: 'image-webpack-loader', // 压缩img
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // hash更新，文件名更新的问题解决
            title: 'webpack App',
            filename: 'main.html', // 最终生成的
            template: path.resolve(__dirname, 'src/temp.html'), // 使用模板
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin(['dist']) // 设置要清理的目录
    ]
}
