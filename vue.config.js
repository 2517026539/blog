const port = process.env.port || 8080

module.exports = {
    // 基本路径
    publicPath: './',
    // 输出路径
    outputDir: 'dist',
    // 静态资源
    assetsDir: 'static',
    //eslint-loader 是否在保存时检查
    lintOnSave: process.env.NODE_ENV === 'development',
    //服务项配置
    devServer: {
        host: 'localhost',
        port,
        https: false,
        open: true,
        // 设置代理proxy
        proxy: {
            '/api': {
                'target' : 'http://localhost:3000',
                changeOrigin: true, //表示是否跨域
                pathRewrite: { //表示需要rewrite重写的
                    '^/api': ''
                }
            }
        }
    }
}