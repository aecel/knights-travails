const nextKnightMove = ([initX, initY]) => {
  let outputMoves = []

  const arrayMoves = [
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [-2, 1],
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
  ]

  for (const [moveX, moveY] of arrayMoves) {
    const finalX = initX + moveX
    const finalY = initY + moveY
    const output = [finalX, finalY]

    if (0 <= finalX && finalX <= 7 && 0 <= finalY && finalY <= 7) {
      outputMoves.push(output)
    }
  }

  return outputMoves
}

export default nextKnightMove
