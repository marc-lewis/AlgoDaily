import { missingNumbers } from "./missingNumbers";

describe("missingNumbers", () => {
  it("should return [2] for ([0, 1, 3])", () => {
    expect(missingNumbers([0, 1, 3])).toStrictEqual([2]);
  });

  it("should return [12, 13, 15, 16] for ([10, 11, 14, 17])", () => {
    expect(missingNumbers([10, 11, 14, 17])).toStrictEqual([12, 13, 15, 16]);
  });

  it("should return [4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18] for ([3, 7, 9, 19])", () => {
    expect(missingNumbers([3, 7, 9, 19])).toStrictEqual([4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
  });

});