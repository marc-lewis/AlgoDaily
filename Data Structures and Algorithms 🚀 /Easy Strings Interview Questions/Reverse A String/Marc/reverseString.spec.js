import { reverseString } from './reverseString';

describe("reverseString", () => {
  it("should return 'ekaj' for 'jake'", () => {
    expect(reverseString("jake")).toBe("ekaj");
  });
});