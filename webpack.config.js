require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './src',
    hot: true,
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  output: {
    // Out put with cache buster names in production
    filename: '[name].js',

    // Change build path for production and dev, makes it more obvious when
    // production build needs to happen
    path: path.resolve(__dirname, 'dist'),

    // Set public path for webpack hot reload
    // publicPath: `${process.env.WEBPACK_DEV_SERVER_PROTOCOL}://${process.env.WEBPACK_DEV_SERVER_HOST}:${process.env.WEBPACK_DEV_SERVER_PORT}/`,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    // Split all node modules into seperate bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        if (!module.context) {
          return false;
        }

        if (module.context.indexOf('node_modules') !== -1) {
          return true;
        }

        return false;
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'], // Specify the common bundle's name.
    }),

    // Better hashing than the standard
    new WebpackChunkHash(),
  ],
};
