import { readLines } from "../lib/readLines";

export const day1 = async () => {
  const linesRaw: string[] = await readLines("./src/day1/data.txt");
  const lines: number[] = linesRaw.map((l) => parseInt(l, 10));

  let count = 0;

  for (let index = 0; index < lines.length - 1; index++) {
    const line = lines[index];

    if (line < lines[index + 1]) {
      count++;
    }
  }

  console.log(count);
  day1Part2();
};

export const day1Part2 = async () => {
  const linesRaw: string[] = await readLines("./src/day1/data.txt");
  const lines: number[] = linesRaw.map((l) => parseInt(l, 10));

  let count = 0;

  for (let index = 0; index < lines.length - 3; index++) {
    const line1 = lines[index] + lines[index + 1] + lines[index + 2];
    const line2 = lines[index + 1] + lines[index + 2] + lines[index + 3];

    if (line1 < line2) {
      count++;
    }
  }

  console.log(count);
};
