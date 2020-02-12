const math = require('../src/index')

test('add: 1 + 2 = 3', () => {
  expect(math.add(1, 2)).toBe(3)
})

test('sub: 1 - 2 = -1', () => {
  expect(math.sub(1, 2)).toBe(-1)
})