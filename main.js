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
  const paths = [];
  let count = 0;
  while (count !== 3) {
    // while (queue.length !== 0) {
    const currPath = queue.shift();
    const currPathLen = currPath.length;
    const currVert = currPath[currPathLen - 1];
    console.log('currPath: ', currPath);

    if (currVert === end) {
      console.log('made it');
      paths.push(currPath);
      console.log('paths: ', paths);
      break;
    }

    const newVerts = waysToMove.flatMap(([x, y]) => {
      const [i, j] = [x + currVert[0], y + currVert[1]];
      return i >= 0 && i <= 7 && j >= 0 && j <= 7 ? [[i, j]] : [];
    });

    newVerts.map((newVert) => {
      visited.add(`${newVert[0]},${newVert[1]}`);
      queue.push([...currPath, newVert]);
    });

    console.log('queue', queue);
    // waysToMove.forEach((move) => {
    //   const newVert = move.map((num, idx) => num + currVert[idx]);
    //   const [x, y] = newVert;
    //   console.log('newVert: ', newVert);

    //   if (x < 0 || x > 7 || y < 0 || y > 7) return;
    //   if (visited.has(newVert)) return;
    //   visited.add(newVert);

    //   const newPath = currPath;
    //   newPath.push(newVert);
    //   console.log('newPath: ', newPath);
    //   queue.push(newPath);
    // });

    count++;
  }

  return paths;
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
