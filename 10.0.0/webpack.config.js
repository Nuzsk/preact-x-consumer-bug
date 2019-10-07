/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        publicPath: ''
    },
    resolve: {
        alias: {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat', // Must be below test-utils
        },
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                    presets: [
                        [require.resolve('@babel/preset-env'), {
                            targets: {
                                browsers: ['last 2 versions', 'IE >= 9']
                            },
                            modules: false,
                            loose: true
                        }],
                        [require.resolve('@babel/preset-react')],
                    ],
                    plugins: [
                        [require.resolve('@babel/plugin-transform-runtime')],
                        [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'h', pragmaFrag: 'Fragment' }],
                        [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
                        [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                    presets: [
                        [require.resolve('@babel/preset-env'), {
                            targets: {
                                browsers: ['last 2 versions', 'IE >= 9']
                            },
                            modules: false,
                            loose: true
                        }],
                        [require.resolve('@babel/preset-react')],
                    ],
                    plugins: [
                        [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'createElement', pragmaFrag: 'Fragment' }],
                        [require.resolve('@babel/plugin-proposal-class-properties')],
                        [require.resolve('@babel/plugin-transform-react-constant-elements')],
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    node: {
        process: 'mock',
        Buffer: false,
        setImmediate: false
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        })
    ]
};