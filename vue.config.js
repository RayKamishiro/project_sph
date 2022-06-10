module.exports = {
     //关闭eslint
     lintOnSave: false,
     //打包路径问题
     publicPath:'./',
     //代理跨域
     devServer: {
          proxy: {
               '/api': {
                    target: 'http://gmall-h5-api.atguigu.cn',
               },
          },
     },
}