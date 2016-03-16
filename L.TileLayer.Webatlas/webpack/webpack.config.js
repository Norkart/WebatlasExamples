module.exports = {
    entry: './mymap.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.html', '.js', '.json', '.scss', '.css'],
        alias: {
            leaflet_css: __dirname + '/node_modules/leaflet/dist/leaflet.css',
            leaflet_marker: __dirname + '/node_modules/leaflet/dist/images/marker-icon.png',
            leaflet_marker_2x: __dirname + '/node_modules/leaflet/dist/images/marker-icon-2x.png',
            leaflet_marker_shadow: __dirname + '/node_modules/leaflet/dist/images/marker-shadow.png'
        }
    },
    module: {
        loaders: [
          {test: /\.css?$/, loader: 'style-loader!css-loader!'},
          {test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]'}
        ]
    }
};