// 处理css，less
require('css-modules-require-hook/preset')
require('css-modules-require-hook')({
  extensions: '.less',
  processorOpts: {parser: require('postcss-less').parse}
})
// 处理图片
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 10000,
  name: 'static/media/[name].[hash:8].[ext]'
})
// 支持babel编译
require('babel-register')
require('babel-polyfill')
// 和前端webpack的alias进行合并
require('module-alias/register')
require('./app.js')
