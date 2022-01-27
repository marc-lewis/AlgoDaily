import { maxOfMinPairs } from "./maxOfMinPairs";

describe("maxOfMinPairs", () => {
  it("should return 6 for [3, 4, 2, 5]", () => {
    expect(maxOfMinPairs([3, 4, 2, 5])).toBe(6);
  });

  it("should return 9 for [1, 3, 2, 6, 5, 4]", () => {
    expect(maxOfMinPairs([1, 3, 2, 6, 5, 4])).toBe(9);
  });
});