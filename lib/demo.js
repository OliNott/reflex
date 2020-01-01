// Will transpile jsx using our custom function
/** @jsx Reflex.createElement */
const Reflex = require('./Reflex')

const demo = () => {

  // Selecting the container that will holds our Reflex elements
  const container = document.getElementById('root')

  // Creating an element
  const domElement = Reflex.createElement(
    "h1",                     // Type
    { title: "Example H1" },  // Props
    "This is a title"         // Children
  )

  // Rendering it
  Reflex.render(domElement, container)
}

module.exports = demo
