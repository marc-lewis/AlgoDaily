import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuzz", () => {
  it("should return '' for 0", () => {
    expect(fizzBuzz(0)).toBe("");
  });

  it("should return '1' for 1", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("should return '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz' for 15", () => {
    expect(fizzBuzz(15)).toBe("12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz");
  });
});