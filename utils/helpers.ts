import { setNegativeError } from "@/stores/errorStore";

function checkNumber(str: string): number {
  if (str === "") return 0;
  if (Number(str)) {
    const num = parseInt(str);
    if (num > 0) return num;
    else {
      setNegativeError(num);
      return 0;
    }
  }
  return 0;
}
function checkDelimeter(str: string) {
  return str.substr(0, 2) === "//" ? true : false;
}

function getDelimeter(str: string) {
  let delimEnd = str.indexOf("\n");
  let delimLength = delimEnd - 2;
  return str.substr(2, delimLength);
}
function removeDelimeters(str: string) {
  return str.substr(str.indexOf("\n") + 1);
}

function processDelimeters(str: string) {
  let delim = ",";
  let newStr = str;
  if (checkDelimeter(str)) {
    delim = getDelimeter(str);
    newStr = removeDelimeters(str);
  }

  return { delim, newStr };
}
const noAlphabets = (str: string): boolean => {
  const pattern = /[^a-zA-Z]+$/;
  const newStr = str.replace("\n", "");
  return pattern.test(newStr);
};
export { processDelimeters, checkNumber, noAlphabets };
