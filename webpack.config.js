module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
}