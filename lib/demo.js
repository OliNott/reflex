const Reflex = require('./Reflex')

const demo = () => {

  console.log(Reflex.createElement("div"))

  // Selecting the container that will holds our reflex elements
  // YES IT'S REFLEX IT'S NOT REACT OKAY ?
  const container = document.getElementById('root')

  // Creating an element
  const element = {
    type: "h1",
    props: {
      title: "Example H1",
      children: "This is a title"
    }
  }

  // Inserting the element into the DOM
  const node = document.createElement(element.type)
  // Inserting HTML props
  node["title"] = element.props.title
  // Inserting content
  const text = document.createTextNode('')
  // element.nodeValue is the value of the node
  text["nodeValue"] = element.props.children

  // Rendering component
  node.appendChild(text)
  container.appendChild(node)
}

module.exports = demo
