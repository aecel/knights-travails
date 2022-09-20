import newNode from "./newNode.js"
import nextKnightMove from "./nextKnightMove.js"
import arraysEqual from "./arraysEqual.js"
import arrayIncludes from "./arrayIncludes.js"

const newTree = () => {
  let root
  let treeData = []

  const getRoot = () => root

  // let allMoves = []
  // const nodeToTree = (nodeData) => {
  //   if (allMoves.length == 64) return null
  //   const node = newNode({ data: nodeData })

  //   if (!arrayIncludes(allMoves, nodeData)) {
  //     allMoves.push(nodeData)
  //     const moveSet = nextKnightMove(nodeData)
  //     for (const move of moveSet) {
  //       if (!arrayIncludes(allMoves, move)) {
  //         node.moveSet.push(nodeToTree(move))
  //       }
  //     }
  //   }

  //   // console.log(allMoves)
  //   return node
  // }

  const generateTree = (nodeData) => {
    // let rootPassed = false

    root = newNode({ data: nodeData })
    let q = [root]

    while (treeData.length != 64) {
      const currentNode = q[0]
      if (!arrayIncludes(treeData, currentNode.data)) {
        treeData.push(currentNode.data)
        // if (!rootPassed) {
        //   rootPassed = true
        //   root = currentNode
        // }
        const moveSet = nextKnightMove(currentNode.data)

        for (const move of moveSet) {
          const moveNode = newNode({ data: move })
          moveNode.prevMove = currentNode
          if (!arrayIncludes(treeData, moveNode.data)) {
            currentNode.moveSet.push(moveNode)
            q.push(moveNode)
          }
        }
      }

      q.shift()
    }

    return root
  }

  // const connectTree = (treeData) => {
  //   //
  //   const data = treeData[0]
  //   const node = newNode({ data: data })
  //   const moveSet = nextKnightMove(data)
  //   for (const move of moveSet) {
  //     node.moveSet.push(connectTree(move))
  //   }

  //   return node
  // }

  // const buildTree = (nodeData) => {
  //   root = nodeToTree(nodeData)
  //   return root
  // }

  const levelOrder = (func) => {
    let q = [root]
    let dataArray = []

    while (q.length != 0) {
      const currentNode = q[0]

      if (func) {
        func(currentNode)
      }
      if (currentNode) {
        dataArray.push(currentNode.data)

        if (currentNode.moveSet) {
          for (const move of currentNode.moveSet) {
            q.push(move)
          }
        }
      }

      q.shift()
    }

    if (!func) {
      return dataArray
    }
  }

  const findPath = (destSquare) => {
    let allPrevMoves = []
    let prevMoves = []
    let counter = 0
    const getPrevMoves = (node) => {
      if (arraysEqual(node.data, destSquare)) {
        let prevMove = node.prevMove
        counter = 0
        while (prevMove) {
          counter++
          prevMoves.unshift(prevMove.data)
          prevMove = prevMove.prevMove
        }
      }
    }

    levelOrder(getPrevMoves)
    const oneWay = prevMoves.splice(0, counter)
    oneWay.push(destSquare)
    return oneWay
  }

  return {
    getRoot,
    levelOrder,
    generateTree,
    findPath,
  }
}

export default newTree
