const path = require('path');

module.exports = {
    output:{
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js'
    },
    module:{
        rules:[
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                  {
                    presets:['react']
                  }
            }
        ]
    }
}
