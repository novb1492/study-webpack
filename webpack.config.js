const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index:'./index.js',
        about:'./about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js',
        library: "[name]_f"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },
};