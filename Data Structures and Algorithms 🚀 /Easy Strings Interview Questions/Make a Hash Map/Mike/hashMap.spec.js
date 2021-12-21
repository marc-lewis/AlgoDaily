import { Hashmap } from "./hashMap";

describe("Hashmap", () => {
  it("checks the set method and get method returns correct data", () => {
    var dir = new Hashmap();
    dir.set("james", "123-456-7890");
    dir.set("jessica", "213-559-6749");
    expect(dir.get("james")).toBe("123-456-7890");
  });

  it("checks the set method and get method returns correct data", () => {
    var dir = new Hashmap();
    dir.set("james", "123-456-7890");
    dir.set("jessica", "213-559-6749");
    expect(dir.get("jake")).toBe(undefined);
  });

});