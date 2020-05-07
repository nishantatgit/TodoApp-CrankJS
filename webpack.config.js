module.exports = {
  entry: {
    bundle: './src/index.tsx'
  },
  output: {
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions : [".js", ".ts", ".tsx"]  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        }
      }
    }
  }
}