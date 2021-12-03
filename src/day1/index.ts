import { createReadStream } from "fs";
import { createInterface } from "readline";

const processLineByLine = async (): Promise<number[]> => {
  const lines: number[] = [];

  const fileStream = createReadStream("./src/day1/data.txt");

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    lines.push(parseInt(line, 10));
  }

  return lines;
};

export const day1 = async () => {
  const lines = await processLineByLine();

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
  const lines = await processLineByLine();

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
