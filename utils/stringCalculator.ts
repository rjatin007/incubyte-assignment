import { processDelimeters, checkNumber } from "./helpers";

export function stringCalculator(str: string) {
  try {
    if (str === "") return 0;
    const { delim, newStr } = processDelimeters(str);
    const items = newStr?.replace("\n", delim)?.split(delim);

    let sum = 0;
    items.forEach((item) => {
      const num = checkNumber(item);
      sum += num;
    });
    return sum;
  } catch (e) {
    console.log("error occurred", e);
  }
  return 0;
}
