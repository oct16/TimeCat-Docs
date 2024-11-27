module.exports = function (context, options) {
    return {
        mode: 'production', // "production" | "development" | "none"
        resolve: {
            extensions: ['*', '.mjs', '.js', '.json']
        },
        name: 'my-loaders',
        configureWebpack(config, isServer) {
            return {
                module: {
                    rules: [
                        {
                            test: /\.mjs$/,
                            include: /node_modules/,
                            type: 'javascript/auto'
                        }
                    ]
                }
            }
        }
    }
}
