import { reverseStringOnePointer, reverseStringTwoPointers } from './reverseString';

describe("reverseStringOnePointer", () => {
  it("'njnschnjkdasn j32 uida' should return 'adiu 23j nsadkjnhcsnjn'", () => {
    expect(reverseStringOnePointer("njnschnjkdasn j32 uida")).toBe("adiu 23j nsadkjnhcsnjn");
  });

  it("'timbuktu12' should return '21utkubmit'", () => {
    expect(reverseStringOnePointer("timbuktu12")).toBe("21utkubmit");
  });

  it("'' should return ''", () => {
    expect(reverseStringOnePointer("")).toBe("");
  });

  it("'reverseastring' should return 'gnirtsaesrever'", () => {
    expect(reverseStringOnePointer("reverseastring")).toBe("gnirtsaesrever");
  });
});

describe("reverseStringTwoPointers", () => {
  it("'njnschnjkdasn j32 uida' should return 'adiu 23j nsadkjnhcsnjn'", () => {
    expect(reverseStringTwoPointers("njnschnjkdasn j32 uida")).toBe("adiu 23j nsadkjnhcsnjn");
  });

  it("'timbuktu12' should return '21utkubmit'", () => {
    expect(reverseStringTwoPointers("timbuktu12")).toBe("21utkubmit");
  });

  it("'' should return ''", () => {
    expect(reverseStringTwoPointers("")).toBe("");
  });

  it("'reverseastring' should return 'gnirtsaesrever'", () => {
    expect(reverseStringTwoPointers("reverseastring")).toBe("gnirtsaesrever");
  });
});