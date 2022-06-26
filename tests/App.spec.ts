import { expect } from "chai";

describe("Dummy test for App", () => {
  it("should pass", (): void => {
    const bool: boolean = true;
    expect(typeof bool).to.equal("boolean");
  });
});
