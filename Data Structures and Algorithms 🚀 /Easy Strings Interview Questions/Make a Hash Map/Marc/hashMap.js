/** 
 * Implement a Hash Map
*/

export class Hashmap {
  constructor() {
    this._storage = [];
  }

  set(key, val) {
    // write setter here
  }

  get(key) {
    // write getter here
  }

  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    return finalHash;
  }
}

// var dir = new Hashmap();
// dir.set("james", "123-456-7890");
// dir.set("jessica", "213-559-6749");
// const result = dir.get("james");
// console.log(result);