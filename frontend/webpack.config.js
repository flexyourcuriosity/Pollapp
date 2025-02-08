const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point for your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true // Clean the output directory before each build
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // Add React preset here
                    }
                }
            },
            {
                test: /\.css$/, // Process CSS files
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico|webmanifest)$/, // Handle images, favicon, and manifest
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]' // Output assets in 'dist/assets'
                }
            }
        ]
    },
    devServer: {
        port: 8088, // Frontend server port
        static: './dist',
        hot: true,
        proxy: {
            '/poll': 'http://localhost:3000', // Proxy to backend
            '/results': 'http://localhost:3000' // Proxy to backend
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Use your public/index.html as the template
            favicon: './public/assets/favicon.ico' // Specify the path to the favicon
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'] // Resolve both .js and .jsx files
    }
};

