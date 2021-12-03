import { readLines } from "../lib/readLines";

interface IInstruction {
  command: string;
  length: number;
}

export const day2 = async () => {
  const linesRaw: string[] = await readLines("./src/day2/data.txt");

  let horizontalCount = 0;
  let depthCount = 0;
  let aimCount = 0;

  const instructions: IInstruction[] = linesRaw.map((l) => {
    const split = l.split(" ");

    return {
      command: split[0],
      length: parseInt(split[1], 10),
    };
  });

  instructions.forEach((instruction) => {
    if (instruction.command === "forward") {
      horizontalCount += instruction.length;

      depthCount += aimCount * instruction.length;
    } else if (instruction.command === "down") {
      aimCount += instruction.length;
    } else if (instruction.command === "up") {
      aimCount -= instruction.length;
    }
  });

  console.log(horizontalCount * depthCount);
};
