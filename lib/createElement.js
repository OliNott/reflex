// createElement function
// type     : node type
// props    : props
// children : content
const createElement = (type, props, ...children) => (
  {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      )
    }
  }
)

const createTextElement = (text) => (
  {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
)

module.exports = createElement
