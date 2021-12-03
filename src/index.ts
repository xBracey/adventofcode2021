import minimist from "minimist";
import { day1 } from "./day1";
import { day2 } from "./day2";

var {
  _: [level],
} = minimist(process.argv.slice(2));

if (level == "1") {
  day1();
}

if (level == "2") {
  day2();
}
