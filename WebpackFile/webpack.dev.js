const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


let devConfig = {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map', // 开发阶段，开启js的sourcemap
    devServer: {
        clientLogLevel: 'warning', // none, error, warning,info(默认)
        contentBase: path.join(__dirname,"dist"), // 网站内容的根目录
        hot: true, // 启动webpack的模块热替换特性，这个需要配合: webpack,HotModuleReplacementPlugin
        compress: true,// 一切服务都启用gzip 压缩
        // host: '0.0.0.0', // 指定使用一个host。默认为localhost。若希望服务器外部可访问 0.0.0.0
        port: 8080, 
        open: true, // 是否打开浏览器
        overlay: { // 若出现错误或警告时，是否覆盖页面上错误消息
            warning: true,
            errors: true
        },
        publicPath: '/', // 此路径下的打包文件可在浏览器中访问
        proxy: { // 设置代理
            "/api":{ // 访问api开头的请求，会跳转到下面的target配置。
                target: "http://192.108.0.102:8080",
                pathRewrite: {"^/api":"/mockjsdata/5/api"}
                //    /api/getuser => http://192.108.0.102:8080/mockjsdata/5/api/getuser
            }
        },
        quiet: true, // 安静输出
        watchOptions: {
            poll: true, // 会主动拉取变化
            ignored: /node_modules/, // 忽略监控。正则
            aggregateTimeout: 300 // 默认值，重新构建前增加延迟
        }
    },
    module: {
        rules: [ //规则可有多个
            {
                test: /\.(sa|c|sc)ss$/, // 正则表达式。对于css文件 use 下面提到的loader处理
                use: ['style-loader', // 用：将css注入到html中。
                    {
                        loader: 'css-loader', // 处理css
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader', // css预处理工具。可以加前缀
                        options: {
                            ident: 'postcss', // 唯一标志符
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['>0.15% in CN'] })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader', // 处理scss
                        options: {
                            sourceMap: true
                        }
                    }] // 从右向左 处理
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 更容易查看patch的依赖
        new webpack.HotModuleReplacementPlugin(), // 替换插件
        new BundleAnalyzerPlugin() // 打包模块报表
    ]
}

module.exports = merge(common, devConfig);