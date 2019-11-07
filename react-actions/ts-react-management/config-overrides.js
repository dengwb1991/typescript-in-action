// According to the need to load by Antd
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({        
    ['@assets']: path.resolve(__dirname, 'src/assets')       
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
