const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  performance: {
    maxEntrypointSize: 1024 * 1024,
    maxAssetSize: 1021 * 1024,
  },
};
