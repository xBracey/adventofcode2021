import { add } from "../lib/add";
import { readLines } from "../lib/readLines";

const loops = 256;
const size = 9;
// const numbers = [3, 4, 3, 1, 2];

const cycle = (count: number[]) => {
  const newCount: number[] = [...count];

  for (let index = 0; index < size; index++) {
    if (index === 8 || index === 6) {
      newCount[6] = count[7] + count[0];
      newCount[8] = count[0];
    } else {
      newCount[index] = count[index + 1];
    }
  }

  return newCount;
};

export const day6 = async () => {
  const linesRaw: string[] = await readLines("./src/day6/data.txt");
  let numbers: number[] = linesRaw[0].split(",").map((l) => parseInt(l, 10));

  let counter: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  numbers.forEach((n) => {
    counter[n]++;
  });

  for (let index = 0; index < loops; index++) {
    counter = cycle(counter);
  }

  console.log(counter);

  console.log(counter.reduce(add, 0));
};

//345793
