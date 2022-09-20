import arraysEqual from "./arraysEqual.js"
import arrayIncludes from "./arrayIncludes.js"
import newTree from "./newTree.js"

const myTree = newTree()
const myRoot = myTree.getRoot()

myTree.generateTree([0, 0])
console.log(myTree.findPath([7, 7]))
