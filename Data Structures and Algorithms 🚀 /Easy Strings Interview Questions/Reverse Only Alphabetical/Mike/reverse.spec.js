import { reverseOnlyAlphabetical } from "./reverse";

describe("reverseOnlyAlphabetical", () => {
  it("should return 'sll!$ehaes3' for sea!$hells3", () => {
    expect(reverseOnlyAlphabetical("sea!$hells3")).toBe("sll!$ehaes3");
  });

  it("should return '1kas90jda3' for 1adj90sak3", () => {
    expect(reverseOnlyAlphabetical("1adj90sak3")).toBe("1kas90jda3");
  });
});