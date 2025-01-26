function knightMoves(start, end) {
  start.forEach((coord) => {
    if (coord < 0 || coord > 7) throw Error('out of board range');
  });
  end.forEach((coord) => {
    if (coord < 0 || coord > 7) throw Error('out of board range');
  });
}

// ways to move
// [+2, +1], [+2, -1]
// [+1, +2], [+1, -2]
// [-2, +1], [-2, -1]
// [-1, +2], [-1, -2]

// given start and end, get all possible ways to move
