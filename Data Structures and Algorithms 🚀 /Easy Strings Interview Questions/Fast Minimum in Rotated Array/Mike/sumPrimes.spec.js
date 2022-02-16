import { sumPrimes } from "./sumPrimes";

describe("sumPrimes", () => {
  it("should return 2 for (2)", () => {
    expect(sumPrimes(2)).toBe(2);
  });

  it("should return 129 for (30)", () => {
    expect(sumPrimes(30)).toBe(129);
  });

  it("should return 381 for (55)", () => {
    expect(sumPrimes(55)).toBe(381);
  });

});