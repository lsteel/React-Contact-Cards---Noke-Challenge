var path = require('path')

module.exports = {
  entry: './client/entry.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: `style!css?${[
          'sourceMap',
          'modules',
          'importLoaders=1',
          'localIdentName=[name]__[local]__[hash:base64:5]'
        ].join('&')}`,
        exclude: /node_modules/
      }
    ]
  }
}
