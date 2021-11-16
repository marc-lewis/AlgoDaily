import {
  reverseOnlyAlphabetical,
  reverseOnlyAlphabetical2PointerOnly
} from "./reverseOnlyAlphabetical";

describe("reverseOnlyAlphabetical", () => {
  it("should return 'sll!$ehaes3' for 'sea!$hells3", () => {
    expect(reverseOnlyAlphabetical("sea!$hells3")).toBe("sll!$ehaes3");
  });
});

describe("reverseOnlyAlphabetical2PointerOnly", () => {
  it("should return 'sll!$ehaes3' for 'sea!$hells3", () => {
    expect(reverseOnlyAlphabetical2PointerOnly("sea!$hells3")).toBe("sll!$ehaes3");
  });
});