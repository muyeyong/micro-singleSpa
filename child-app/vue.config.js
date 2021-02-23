module.exports = {
    configureWebpack:{
        output:{
            library: 'subApp',
            libraryTarget: 'umd'
        },
        devServer:{
            port: 9879
        }
    }
}