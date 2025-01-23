import { stringCalculator } from "@/utils/stringCalculator";

test("tests empty string", () => {
  expect(stringCalculator("")).toBe(0);
});

test("tests single digit", () => {
  expect(stringCalculator("4")).toBe(4);
});
test("tests single comma", () => {
  expect(stringCalculator("4,")).toBe(4);
});

test("tests new line ", () => {
  expect(stringCalculator("1\n,2")).toBe(3);
});

test("tests new line in different numbers", () => {
  expect(stringCalculator("1\n,2\n,3")).toBe(6);
});
test("tests delimeters", () => {
  expect(stringCalculator("//;\n1\n;2\n;3")).toBe(6);
});
