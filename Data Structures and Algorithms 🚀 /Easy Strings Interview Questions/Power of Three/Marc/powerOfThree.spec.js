import { powerOfThree } from "./powerOfThree";

describe("powerOfThree", () => {
  it("should return true for 9", () => {
    expect(powerOfThree(9)).toBe(true);
  });

  it("should return false for 7", () => {
    expect(powerOfThree(7)).toBe(false);
  });

  it("should return true for 729", () => {
    expect(powerOfThree(729)).toBe(true);
  });
});