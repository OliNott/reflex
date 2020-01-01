const render = (element, container) => {

  // Create text node or node depending of the element
  const domElement = element.type === 'TEXT_ELEMENT'
  ? document.createTextNode('')
  : document.createElement(element.type)

  // Assigning the props
  const isProperty = key => key !== 'children'

  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => domElement[name] = element.props[name] )

  // Rendering children recursively
  element.props.children.forEach(child =>
    render(child, domElement)
  )

  // Rendering the whole content
  container.appendChild(domElement)
}

module.exports = render
