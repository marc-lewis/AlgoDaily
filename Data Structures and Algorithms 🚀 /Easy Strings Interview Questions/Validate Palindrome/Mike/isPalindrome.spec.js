import { isPalindrome } from "./isPalindrome";

describe("isAnagram", () => {
  it("returns true for palendromes", () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('A Santa Lived As a Devil At NASA')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
  });

  it("returns false for non palendromes", () => {
    expect(isPalindrome('gold')).toBe(false);
  });
});