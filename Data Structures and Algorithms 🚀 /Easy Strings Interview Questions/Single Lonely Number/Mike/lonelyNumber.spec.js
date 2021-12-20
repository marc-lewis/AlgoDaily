import { lonelyNumber } from "./lonelyNumber";

describe("lonelyNumber", () => {
  it("should return 9 from [1, 2, 4, 9, 4, 2, 1]", () => {
    expect(lonelyNumber([1, 2, 4, 9, 4, 2, 1])).toBe(9);
  })

  it("should return 6 from [4, 4, 6, 1, 3, 1, 3]", () => {
    expect(lonelyNumber(4, 4, 6, 1, 3, 1, 3)).toBe(6);
  })

  it("should return 1 from [1]", () => {
    expect(lonelyNumber([1])).toBe(1);
  })
})