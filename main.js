function knightMoves(start = [0, 0], end = [7, 7]) {
  const [startX, startY] = start;
  const [endX, endY] = end;

  if (startX < 0 || startX > 7 || startY < 0 || startY > 7) {
    throw Error('out of board range');
  }
  if (endX < 0 || endX > 7 || endY < 0 || endY > 7) {
    throw Error('out of board range');
  }

  const waysToMove = [
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
  while (queue.length !== 0) {
    const currPath = queue.shift();
    const currPathLen = currPath.length;
    const currVert = currPath[currPathLen - 1];

    const newVerts = waysToMove.flatMap(([x, y]) => {
      const [i, j] = [x + currVert[0], y + currVert[1]];
      return i >= 0 && i <= 7 && j >= 0 && j <= 7 ? [[i, j]] : [];
    });

    newVerts.map((newVert) => {
      visited.add(`${newVert[0]},${newVert[1]}`);
      const path = [...currPath, newVert];
      if (newVert[0] === endX && newVert[1] === endY) {
        paths.push(path);
      } else {
        queue.push(path);
      }
    });

    if (paths.length > 0 && queue[0]?.length === paths[0].length) break;
  }

  console.log(
    `You made it in ${
      paths[0].length - 1
    } moves! Here are the possible paths: \n`,
    paths
  );
}

knightMoves([1, 2], [3, 4]);
