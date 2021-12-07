import { readLines } from "../lib/readLines";

interface ICount {
  [index: number]: number;
}

const fibonacciCount: ICount = {};

const fibonacci = (n: number): number => {
  if (n === 0) {
    return 0;
  } else if (fibonacciCount[n]) {
    return fibonacciCount[n];
  }

  const answer = n + fibonacci(n - 1);

  fibonacciCount[n] = answer;

  return answer;
};

export const day7 = async () => {
  const linesRaw: string[] = await readLines("./src/day7/data.txt");
  const numbers = linesRaw[0].split(",").map((n) => parseInt(n));
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  const count: ICount = {};

  for (let index = min; index < max; index++) {
    count[index] = 0;
  }

  Object.keys(count).forEach((key) => {
    const keyNum = parseInt(key);

    let counter = 0;

    numbers.forEach((n) => {
      counter += fibonacci(Math.abs(n - keyNum));
    });

    count[keyNum] = counter;
  });

  let smallestShift = -1;
  let smallestShiftIndex = 0;

  Object.entries(count).forEach(([k, v]) => {
    if (v < smallestShift || smallestShift === -1) {
      smallestShift = v;
      smallestShiftIndex = parseInt(k);
    }
  });

  console.log({ smallestShift, smallestShiftIndex });
};
