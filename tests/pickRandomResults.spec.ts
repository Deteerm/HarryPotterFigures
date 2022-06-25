import { expect } from "chai";
import pickRandomResults from "../src/utils/pickRandomResults";
import { it } from "mocha";

describe("pickRandomResults", () => {
  it("Given 3 as 2nd arg, should return list of 3 random results", () => {
    const results = pickRandomResults([1, 2, 3, 4, 5], 3);
    expect(results.length).to.equal(3);
  });

  it("Should work with multiple types", () => {
    const results = pickRandomResults(["string", 3, true], 3);
    expect(results).to.contain("string");
    expect(results).to.contain(3);
    expect(results).to.contain(true);
  });
});
