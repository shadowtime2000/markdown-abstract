/* eslint-disable no-undef */
const { expect } = require("chai");

const { BaseEngine } = require("../dist/index");

const engine = new BaseEngine();

//const engine = new BaseEngine();

describe("#BaseEngine", () => {
  it('should properly bold "text here"', () => {
    expect(engine.bold("text here")).to.equal("**text here**");
  });

  it('should properly italicize "text here"', () => {
    expect(engine.italicize("text here")).to.equal("_text here_");
  });
});
