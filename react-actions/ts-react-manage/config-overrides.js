// According to the need to load by Antd
const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addWebpackAlias({        
    '@assets': path.resolve(__dirname, 'src/assets')       
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  })
)
