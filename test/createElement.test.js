const createElement = require('../lib/createElement')

test('Create an empty element should have the right structure', () => {
  const result = {
    "type": "div",
    "props": { "children": [] }
  }
  expect(createElement("div")).toMatchObject(result)
})
