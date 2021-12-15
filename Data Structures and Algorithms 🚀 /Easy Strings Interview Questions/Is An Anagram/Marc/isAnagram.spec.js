import { isAnagram } from "./isAnagram";

describe("isAnagram", () => {
  it("returns true for anagrams", () => {
    expect(isAnagram('Mary', 'Army')).toBe(true);
    expect(isAnagram('cinema', 'iceman')).toBe(true);
  });

  it("returns false for non anagrams", () => {
    expect(isAnagram("Jake", "Jay")).toBe(false);
  });
});