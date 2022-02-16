import { subarraySum } from "./contigousSubArraySum";

describe("subarraySum", () => {
  it("should return true for ([1, 2, 3], 3)", () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(true);
  });

  it("should return false for ([], 3))", () => {
    expect(subarraySum([], 3)).toBe(false);
  });

  it("should return true for ([3, 6, 12, 35], 47)", () => {
    expect(subarraySum([3, 6, 12, 35], 47)).toBe(true);
  });

});