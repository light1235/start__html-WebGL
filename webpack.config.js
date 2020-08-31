const path = require('path')

module.exports = {
     mode: "development",
     entry:'./assets/js/plugins.js',
     output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist")
     },
     devServer: {
          port:4200
     },
     module: {
          rules: [
               {
                    test: /\.glsl$/,
                    loader: 'webpack-glsl-loader'
               },
               {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: '/node_modules'
               }
          ]
     }
}
