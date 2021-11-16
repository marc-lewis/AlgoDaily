import { reverseOnlyAlphabetical } from "./reverseOnlyAlphabetical";

describe("reverseOnlyAlphabetical", () => {
  it("should return 'sll!$ehaes3' for 'sea!$hells3", () => {
    expect(reverseOnlyAlphabetical("sea!$hells3")).toBe("sll!$ehaes3");
  });
});