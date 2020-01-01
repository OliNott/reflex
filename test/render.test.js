const Reflex = require('../lib/Reflex')

test('Should render an element inside a container', () => {
  document.body.innerHTML =
    '<div id="root">' +
    '</div>'

  const container  = document.getElementById('root')
  const newElement = Reflex.createElement('h1', null, 'Hello')

  Reflex.render(newElement, container)
  expect(document.body.innerHTML).toEqual(
    '<div id="root">' +
    '<h1>Hello</h1>' +
    '</div>'
  )
})

test('Should render an element inside a container, with a prop', () => {
  document.body.innerHTML =
    '<div id="root">' +
    '</div>'

  const container  = document.getElementById('root')
  const newElement = Reflex.createElement('h1', { title: "Title" }, 'Hello')

  Reflex.render(newElement, container)
  expect(document.body.innerHTML).toEqual(
    '<div id="root">' +
    '<h1 title="Title">Hello</h1>' +
    '</div>'
  )
})
