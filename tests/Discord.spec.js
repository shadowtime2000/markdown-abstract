/* eslint-disable no-undef */
const { expect } = require("chai");

const { DiscordEngine } = require("../dist/index");

const engine = new DiscordEngine();

describe("#DiscordEngine", () => {
  it("should return properly underlined text for text 'underline'", () => {
    expect(engine.underline("underline")).to.equal("__underline__");
  });

  it("should return properly spoilered text for text 'spoilered'", () => {
    expect(engine.spoiler("spoilered")).to.equal("||spoilered||");
  });

  it("should return proper inline code 'var a = \"b\"'", () => {
    expect(engine.inlineCode('var a = "b"')).to.equal('`var a = "b"`');
  });

  it("should return a proper blockquote 'Blockquote here'", () => {
    expect(engine.blockQuote("Blockquote here")).to.equal("> Blockquote here");
  });

  it("should return proper strikethrough of text 'strikethroughed text'", () => {
    expect(engine.strikethrough("strikethroughed text")).to.equal(
      "~~strikethroughed text~~"
    );
  });

  it("should return a proper code block for code 'var a = \"b\"' with language javascript", () => {
    expect(engine.codeBlock('var a = "b"', "javascript")).to.equal(
      '```javascript\nvar a = "b"\n```'
    );
  });
});
