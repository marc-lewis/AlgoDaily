import { reverseString2, reverseString3 } from './reverseString';

describe("reverseStringOnePointer", () => {
  it("'njnschnjkdasn j32 uida' should return 'adiu 23j nsadkjnhcsnjn'", () => {
    expect(reverseString2("njnschnjkdasn j32 uida")).toBe("adiu 23j nsadkjnhcsnjn");
  });

  it("'timbuktu12' should return '21utkubmit'", () => {
    expect(reverseString2("timbuktu12")).toBe("21utkubmit");
  });

  it("'' should return ''", () => {
    expect(reverseString2("")).toBe("");
  });

  it("'reverseastring' should return 'gnirtsaesrever'", () => {
    expect(reverseString2("reverseastring")).toBe("gnirtsaesrever");
  });
});

describe("reverseStringTwoPointers", () => {
  it("'njnschnjkdasn j32 uida' should return 'adiu 23j nsadkjnhcsnjn'", () => {
    expect(reverseString3("njnschnjkdasn j32 uida")).toBe("adiu 23j nsadkjnhcsnjn");
  });

  it("'timbuktu12' should return '21utkubmit'", () => {
    expect(reverseString3("timbuktu12")).toBe("21utkubmit");
  });

  it("'' should return ''", () => {
    expect(reverseString3("")).toBe("");
  });

  it("'reverseastring' should return 'gnirtsaesrever'", () => {
    expect(reverseString3("reverseastring")).toBe("gnirtsaesrever");
  });
});