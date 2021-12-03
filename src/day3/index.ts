import { readLines } from "../lib/readLines";

export const day3 = async () => {
  const linesRaw: string[] = await readLines("./src/day3/data.txt");
  const rowLength = linesRaw[0].length;
  const columnLength = linesRaw.length;

  let mostCommonBits = "";

  for (let index = 0; index < rowLength; index++) {
    let zeroCount = 0;
    let oneCount = 0;

    for (let index2 = 0; index2 < columnLength; index2++) {
      const char = linesRaw[index2][index];

      if (char === "0") zeroCount++;
      if (char === "1") oneCount++;
    }

    if (zeroCount > oneCount) {
      mostCommonBits += "0";
    } else {
      mostCommonBits += "1";
    }
  }

  const mostCommonDec = parseInt(mostCommonBits, 2);
  const leastCommonDec = Math.pow(2, rowLength) - 1 - mostCommonDec;

  console.log(mostCommonDec * leastCommonDec);
};
