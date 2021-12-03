import minimist from "minimist";
import { day1 } from "./day1";

var {
  _: [level],
} = minimist(process.argv.slice(2));

if (level == "1") {
  day1();
}
