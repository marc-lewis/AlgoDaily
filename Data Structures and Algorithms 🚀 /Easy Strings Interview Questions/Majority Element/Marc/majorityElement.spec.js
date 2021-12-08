import { majorityElement } from "./majorityElement";

describe("majorityElement", () => {
  it("should return 4 for [4, 2, 4]", () => {
    expect(majorityElement([4, 2, 4])).toBe(4);
  });

  it("should return null for [4, 2, 4, 2]", () => {
    expect(majorityElement([4, 2, 4, 2])).toBe(null);
  });

  it("should return 1 for [1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]", () => {
    expect(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])).toBe(1);
  });

  it("should return 4 for [1, 4, 2, 4, 4, 3, 4]", () => {
    expect(majorityElement([1, 4, 2, 4, 4, 3, 4])).toBe(4);
  });
});