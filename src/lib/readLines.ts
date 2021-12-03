import { createReadStream } from "fs";
import { createInterface } from "readline";

export const readLines = async (path: string): Promise<string[]> => {
  const lines: string[] = [];

  const fileStream = createReadStream(path);

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    lines.push(line);
  }

  return lines;
};
