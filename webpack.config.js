const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { runPattern } = require("copy-webpack-plugin");

module.exports = {
    mode: "development",

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpack({
            //title: 'Mi Webpack App',
            filename: 'listado.html',
            template: './src/page/listado.html'
        }),
        new HtmlWebpack({
            //title: 'Mi Webpack App',
            filename: 'formulario.html',
            template: './src/page/formulario.html'
        }),
        new HtmlWebpack({
            //title: 'Mi Webpack App',
            filename: 'slider.html',
            template: './src/page/slider.html'
        }),
        new HtmlWebpack({
            //title: 'Mi Webpack App',
            filename: 'slider2.html',
            template: './src/page/slider2.html'
        }),
        new HtmlWebpack({
            //title: 'Mi Webpack App',
            filename: 'slider3.html',
            template: './src/page/slider3.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ],

}
