import { sumDigits } from "./sumDigitsUntilOne";

describe("sumDigits", () => {
  it("should return 1 for 1", () => {
    expect(sumDigits(1)).toBe(1);
  });

  it("should return 4 for 49", () => {
    expect(sumDigits(49)).toBe(4);
  });

  it("should return 3 for 439230", () => {
    expect(sumDigits(439230)).toBe(3);
  });
});