const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/
      },
      {
        test: /\.css$/,
        exclude: /node_module/,
        use: [
          { loader: 'style-laoder' },
          {
            loader: 'css-loader', options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]_local_[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: () => [autoprefixer()]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      }
    ]
  }
};
