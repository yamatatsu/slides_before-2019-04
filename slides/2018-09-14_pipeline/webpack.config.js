const webpack = require('webpack')

module.exports = {
  plugins: [new webpack.IgnorePlugin(/^fs$/)],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}
