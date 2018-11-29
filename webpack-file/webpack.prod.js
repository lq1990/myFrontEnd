const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //用于提取css，生成css文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩CSS
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 压缩JS
const HtmlWebpackPlugin = require("html-webpack-plugin"); // dist中css、js文件带hash，引入html时的更新问题。
const CleanWebpackPlugin = require("clean-webpack-plugin"); // clean 清理dist目录
const merge = require("webpack-merge");
const common = require("./webpack.common");

let prodConfig = {
    mode: 'production',
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ //规则可有多个
            {
                test: /\.(sa|c|sc)ss$/, // 正则表达式。对于css文件 use 下面提到的loader处理
                use: [
                    MiniCssExtractPlugin.loader, // 将style-loader 换成这个。
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss', // 唯一标志符
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['>0.15% in CN'] })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }] // 从右向左 处理
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name][hash].css', // 设置最终输出的文件名
            chunkFilename: '[id][hash].css'
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
};

module.exports = merge(common, prodConfig);
