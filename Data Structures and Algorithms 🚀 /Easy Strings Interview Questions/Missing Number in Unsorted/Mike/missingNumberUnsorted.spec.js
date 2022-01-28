import { missingNumberUnsorted } from "./missingNumberUnsorted";

describe("missingNumberUnsorted", () => {
  it("should return 8 for ([2, 5, 1, 4, 9, 6, 3, 7], 1, 9)", () => {
    expect(missingNumberUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9)).toBe(8);
  });

  it("should return 17 for ([20, 9, 14, 18, 7, 12, 21, 16, 15, 19, 13, 8, 10, 11], 7, 21)", () => {
    expect(missingNumberUnsorted([20, 9, 14, 18, 7, 12, 21, 16, 15, 19, 13, 8, 10, 11], 7, 21)).toBe(17);
  });
});