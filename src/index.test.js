import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

//Unit Testing
describe("Our first test", () => {
  it("Should pass", () => {
    expect(true).to.equal(true);
  });
});

//DOM Testing
describe("index.html", () => {
  it("should say hello", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hello World!");
    dom.window.close();
  });
});
