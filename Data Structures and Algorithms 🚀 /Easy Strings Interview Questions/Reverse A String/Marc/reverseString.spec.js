import { reverseStringOnePointer, reverseStringTwoPointers } from './reverseString';

describe("reverseStringOnePointer", () => {
  it("should reverse even length words", () => {
    expect(reverseStringOnePointer("jake")).toBe("ekaj");
  });

  it("should reverse odd length words", () => {
    expect(reverseStringOnePointer("jakes")).toBe("sekaj");
  });
});

describe("reverseStringTwoPointers", () => {
  it("should reverse even length words", () => {
    expect(reverseStringTwoPointers("jake")).toBe("ekaj");
  });

  it("should reverse odd length words", () => {
    expect(reverseStringTwoPointers("jakes")).toBe("sekaj");
  });
});