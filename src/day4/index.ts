import { readLines } from "../lib/readLines";

function add(accumulator: number, a: number) {
  return accumulator + a;
}

interface IBoardNumber {
  marked: boolean;
  number: number;
}

const boardWidth = 5;

const checkWin = (board: IBoardNumber[][]): number | null => {
  for (let index = 0; index < board.length; index++) {
    const line = board[index];
    const row = board.map((l) => l[index]);

    if (
      line.every((number) => number.marked) ||
      row.every((number) => number.marked)
    ) {
      const unmarkedNumbersSum = board
        .flat()
        .filter((number) => !number.marked)
        .map((n) => n.number)
        .reduce(add, 0);

      return unmarkedNumbersSum;
    }
  }

  return null;
};

export const day4 = async () => {
  const linesRaw: string[] = await readLines("./src/day4/data.txt");

  const numbersToCall = linesRaw[0].split(",").map((l) => parseInt(l));

  const boards: IBoardNumber[][][] = [];

  for (let index = 0; index < linesRaw.length - 2; index += boardWidth + 1) {
    boards.push(
      linesRaw.slice(index + 2, index + boardWidth + 2).map((l) =>
        l.split(/[\s]+/).map((number) => ({
          marked: false,
          number: parseInt(number),
        }))
      )
    );
  }

  for (let index = 0; index < numbersToCall.length; index++) {
    const numberToCall = numbersToCall[index];

    for (let i = 0; i < boards.length; i++) {
      const board = boards[i];
      for (let j = 0; j < board.length; j++) {
        const line = board[j];
        for (let k = 0; k < line.length; k++) {
          const number = line[k];

          if (number.number === numberToCall) {
            number.marked = true;
          }
        }
      }

      const hasWon = checkWin(board);

      if (hasWon) {
        console.log(numberToCall * hasWon);

        return numberToCall * hasWon;
      }
    }
  }

  return 0;
};
