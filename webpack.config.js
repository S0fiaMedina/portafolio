const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production', // Añadido para evitar advertencias
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Inyecta CSS en el DOM
          'css-loader',   // Lee archivos CSS
          'sass-loader'   // Compila SCSS a CSS
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map'
};
