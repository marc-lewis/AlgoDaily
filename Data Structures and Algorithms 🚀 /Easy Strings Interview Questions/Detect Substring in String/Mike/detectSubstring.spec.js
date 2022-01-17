import { detectSubstring } from "./detectSubstring";

describe("detectSubstring", () => {
  it("should return 1 for 'ggraph' and 'graph'", () => {
    expect(detectSubstring('ggraph', 'graph')).toBe(1);
  });

  it("should return 6 for 'thepigflewwow' and 'flew'", () => {
    expect(detectSubstring('thepigflewwow', 'flew')).toBe(6);
  });

  it("should return -1 for 'wherearemyshorts' and 'pork'", () => {
    expect(detectSubstring('wherearemyshorts', 'pork')).toBe(-1);
  });

  it("should return 0 for 'twocanplay' and 'two'", () => {
    expect(detectSubstring('twocanplay', 'two')).toBe(0);
  });
});