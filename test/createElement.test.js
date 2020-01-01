const Reflex = require('../lib/Reflex')

// createElement("div")
test('Create an empty element should have the right structure', () => {
  const result = {
    "type": "div",
    "props": { "children": [] }
  }

  expect(Reflex.createElement("div")).toMatchObject(result)
})

// createElement("div", null, a)
test('Create an element without inherited props and with one children should have the right structure', () => {
  const result = {
      "type": "div",
      "props": { "children": [{ a: 'a' }] }
    }

  expect(Reflex.createElement("div", null, { a: 'a' })).toMatchObject(result)
})

// createElement("div", null, a, b)
test('Create an element without inherited props and with one children should have the right structure', () => {
  const result = {
      "type": "div",
      "props": { "children": [{ a: 'a' }, { b: 'b' }] }
    }

  expect(Reflex.createElement("div", null, { a: 'a' }, { b: 'b' })).toMatchObject(result)
})

// createElement("div", null, 'Hehe')
test('Create a text element instead of text', () => {
  const result = {
      "type": "div",
      "props": {
        "children": [{
          type: 'TEXT_ELEMENT',
          props: {
            nodeValue: "Hehe"
          }
        }]
      }
    }

  expect(Reflex.createElement("div", null, 'Hehe')).toMatchObject(result)
})
