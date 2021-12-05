import { readLines } from "../lib/readLines";

interface ILineSegment {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const day5 = async () => {
  const linesRaw: string[] = await readLines("./src/day5/data.txt");

  const lineSegments1: ILineSegment[] = linesRaw.map((line) => {
    const [part1, part2] = line.split(" -> ");
    const [x1, y1] = part1.split(",");
    const [x2, y2] = part2.split(",");

    return {
      x1: parseInt(x1),
      y1: parseInt(y1),
      x2: parseInt(x2),
      y2: parseInt(y2),
    };
  });

  const lineSegments = lineSegments1;

  const maxX = Math.max(
    ...lineSegments.map((segment) => [segment.x1, segment.x2]).flat()
  );
  const maxY = Math.max(
    ...lineSegments.map((segment) => [segment.y1, segment.y2]).flat()
  );

  const board: number[][] = [];

  for (let index = 0; index < maxY + 1; index++) {
    board[index] = [];
    for (let index2 = 0; index2 < maxX + 1; index2++) {
      board[index][index2] = 0;
    }
  }

  for (let index = 0; index < lineSegments.length; index++) {
    const { x1, x2, y1, y2 } = lineSegments[index];

    // Vertical
    if (x1 === x2) {
      const yPairs = [Math.min(y1, y2), Math.max(y1, y2)];

      for (let index2 = yPairs[0]; index2 <= yPairs[1]; index2++) {
        board[index2][x1]++;
      }
    }

    // Horizontal
    else if (y1 === y2) {
      const xPairs = [Math.min(x1, x2), Math.max(x1, x2)];

      for (let index2 = xPairs[0]; index2 <= xPairs[1]; index2++) {
        board[y1][index2]++;
      }
    }

    // Diagonal
    else {
      const xdiff = x1 - x2;
      const ydiff = y1 - y2;
      const xmin = Math.min(x1, x2);
      const ymin = Math.min(y1, y2);
      const diagonalLength = Math.abs(x1 - x2);

      if (xdiff === ydiff) {
        for (let index2 = 0; index2 <= diagonalLength; index2++) {
          board[ymin + index2][xmin + index2]++;
        }
      } else if (xdiff < ydiff) {
        for (let index2 = 0; index2 <= diagonalLength; index2++) {
          board[y1 - index2][x1 + index2]++;
        }
      } else if (xdiff > ydiff) {
        for (let index2 = 0; index2 <= diagonalLength; index2++) {
          board[y1 + index2][x1 - index2]++;
        }
      }
    }
  }

  console.log(board.flat().filter((n) => n >= 2).length);
};
