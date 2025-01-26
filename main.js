function knightMoves(start = [0, 0], end = [7, 7]) {
  start.forEach((coord) => {
    if (coord < 0 || coord > 7) throw Error('out of board range');
  });
  end.forEach((coord) => {
    if (coord < 0 || coord > 7) throw Error('out of board range');
  });

  let waysToMove = [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-2, 1],
    [-2, -1],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [[start]];
  const visited = new Set();
  while (queue.length !== 0) {
    const currPath = queue.shift();
    const currPathLen = currPath.length;
    const currVert = currPath[currPathLen - 1];
    if (currVert === end) {
      console.log(currPath);
      break;
    }

    waysToMove.forEach((move) => {
      console.log(move);
      const movedToVertex = move.map((num, idx) => num + currVert[idx]);
      if (7 < movedToVertex[0] < 0 || 7 < movedToVertex[1] < 0) return;
      if (visited.has(movedToVertex)) return;
      visited.add(movedToVertex);
      const newPath = currPath.push(movedToVertex);
      queue.push(newPath);
    });
  }
}

knightMoves([0, 0], [3, 3]);

// ways to move
// [+2, +1], [+2, -1]
// [+1, +2], [+1, -2]
// [-2, +1], [-2, -1]
// [-1, +2], [-1, -2]

// given start and end, get all possible ways to move
// stop once we've found the end target and have gone through all the moves
// there may be more than 1 shortest path

// queue to line up next moves
//
