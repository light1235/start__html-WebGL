const path = require('path')

module.exports = {
     mode: "development",
     entry:'./assets/js/shader.js',
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
                    test: /\.(frag|vert|glsl)$/,
                    use: [
                         {
                              loader: 'glsl-shader-loader',
                              options: {}
                         }
                    ]
               }
               // {
               //      test: /\.(glsl|vs|fs|vert|frag)$/,
               //      exclude: /node_modules/,
               //      use: [
               //           'raw-loader',
               //           'glslify-loader'
               //      ]
               // },

          ]
     }
}