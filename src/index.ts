import minimist from "minimist";
import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";
import { day4part2 } from "./day4/part2";
import { day5 } from "./day5";
import { day6 } from "./day6";
import { day7 } from "./day7";

var {
  _: [level],
} = minimist(process.argv.slice(2));

if (level == "1") {
  day1();
}

if (level == "2") {
  day2();
}

if (level == "3") {
  day3();
}

if (level == "4") {
  // day4();
  day4part2();
}

if (level == "5") {
  day5();
}

if (level == "6") {
  day6();
}

if (level == "7") {
  day7();
}
