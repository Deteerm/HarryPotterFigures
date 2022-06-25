import { expect } from "chai";

describe("Dummy App", () => {
  it("should pass", (): void => {
    const bool: boolean = true;
    expect(typeof bool).to.equal("boolean");
  });
});
