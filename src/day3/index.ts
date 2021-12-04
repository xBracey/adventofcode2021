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

  // console.log(mostCommonDec * leastCommonDec);

  const oxygen = await day3part2(true);
  const co2 = await day3part2(false);

  console.log(oxygen * co2);
};

// 1459

export const day3part2 = async (oxygen: boolean) => {
  let linesRaw: string[] = await readLines("./src/day3/data.txt");

  let position = 0;

  while (linesRaw.length > 1) {
    let zeroCount = 0;
    let oneCount = 0;

    for (let index = 0; index < linesRaw.length; index++) {
      const char = linesRaw[index][position];
      if (char === "0") zeroCount++;
      if (char === "1") oneCount++;
    }

    if (oxygen) {
      if (zeroCount > oneCount) {
        linesRaw = linesRaw.filter((l) => l[position] === "0");
      } else {
        linesRaw = linesRaw.filter((l) => l[position] === "1");
      }
    } else {
      if (oneCount < zeroCount) {
        linesRaw = linesRaw.filter((l) => l[position] === "1");
      } else {
        linesRaw = linesRaw.filter((l) => l[position] === "0");
      }
    }

    position++;
  }

  return parseInt(linesRaw[0], 2);
};
