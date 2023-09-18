const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      
      // this rule can be excluded if you don't require babel-loader for your other application files
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      
      // this separate rule is required to make sure that the Prebid.js files are babel-ified.  this rule will
      // override the regular exclusion from above (for being inside node_modules).
      {
        test: /.js$/,
        include: new RegExp(`\\${path.sep}prebid\\.js`),
        use: {
          loader: 'babel-loader',
          // presets and plugins for Prebid.js must be manually specified separate from your other babel rule.
          // this can be accomplished by requiring prebid's .babelrc.js file (requires Babel 7 and Node v8.9.0+)
          // as of Prebid 6, babelrc.js only targets modern browsers. One can change the targets and build for
          // older browsers if they prefer, but integration tests on ie11 were removed in Prebid.js 6.0
          options: require('prebid.js/.babelrc.js')
        }
      }
    ]
  }
};