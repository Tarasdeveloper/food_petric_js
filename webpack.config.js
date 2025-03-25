const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/script.js', // Ensure this points to your main JS file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'js'), // Use path.resolve for cleaner path handling
    },
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/, // Match .js and .mjs files
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: 'usage',
                                },
                            ],
                        ],
                        sourceType: 'module', // Explicitly tell Babel to treat files as ES modules
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'], // Ensure Webpack resolves .js files
    },
};
