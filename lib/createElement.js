// createElement function
// type     : node type
// props    : props
// children : content

const createElement = (type, props, ...children) => (
  {
    type,
    props: {
      ...props, // spread params => hash
      children  // rest params => array
    }
  }
)

module.exports = createElement
