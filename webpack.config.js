const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin= require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: [
    './src/js/index.js',
    './src/scss/style.scss'
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist/html'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }]
        })
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        include: path.join(__dirname, 'src/fonts'),
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        include: path.join(__dirname, 'src/img'),
        options: {
          name: '[name].[ext]',
          outputPath: 'img/',
        }
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, "src/icons")
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: '/icons/'
            }
          },
          'svgo-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
      {
        from: './src/html',
        to: './html'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/uploads',
        to: './uploads'
      }
    ]}),
    new SpriteLoaderPlugin({
      plainSprite: true
    })
  ]
};