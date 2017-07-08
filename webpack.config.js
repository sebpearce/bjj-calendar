// options: {
//   presets: ["es2015"]
// }
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
        options: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: true,
          //     localIdentName: '[path][name]__[local]--[hash:base64:5]',
          //   },
          // },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname,
              },
            },
          },
          'sass-loader',
        ],
        include: /src/,
        exclude: /node_modules/,
      },
    ],
  },
};
