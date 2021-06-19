const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),
    new PrettierPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
}