const path = require('path');
const fs = require('fs');

config = {
    mode: 'production',
    entry: './portfolio/static/mainsite/app.js',
    // entry: './local/app.js',
    output: {
        path: path.resolve(__dirname, 'portfolio', 'static', 'mainsite', 'dist'),
        // path: path.resolve(__dirname, 'local', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            },
        ],
    },
};
// Pug template processing now handled by Django, not Webpack
module.exports = config
