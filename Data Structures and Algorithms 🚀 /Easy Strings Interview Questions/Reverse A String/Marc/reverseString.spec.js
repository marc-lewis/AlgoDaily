import { reverseStringOnePointer, reverseStringTwoPointers } from './reverseString';

describe("reverseStringOnePointer", () => {
  it("should return 'ekaj' for 'jake'", () => {
    expect(reverseStringOnePointer("jake")).toBe("ekaj");
  });
});

describe("reverseStringTwoPointers", () => {
  it("should return 'ekaj' for 'jake'", () => {
    expect(reverseStringTwoPointers("jake")).toBe("ekaj");
  });
})