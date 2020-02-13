const path = require('path')

module.exports = {
  preset: 'ts-jest',
  transform: { // 哪些文件需要用 ts-jest 执行
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$', // Jest使用模式或模式来检测测试文件
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  setupFilesAfterEnv: [path.resolve(__dirname, './setup-enzyme.ts')],
  collectCoverage: true // 是否收集测试时的覆盖率信息 开启时会降低测试速度
}