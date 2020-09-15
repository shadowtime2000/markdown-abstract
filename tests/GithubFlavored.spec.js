/* eslint-disable no-undef */
const { expect } = require("chai");

const { GithubFlavoredEngine } = require("../dist/index");

const engine = new GithubFlavoredEngine();

describe("#GithubFlavoredEngine", () => {
  it("should return a proper thematic break", () => {
    expect(engine.thematicBreak()).to.equal("---");
  });

  describe(".heading", () => {
    [1, 2, 3, 4, 5, 6].map((num) =>
      it(`should return the proper heading with level ${num} using "Heading here"`, () => {
        expect(engine.heading("Heading here", num)).to.equal(
          `${"#".repeat(num)} Heading here`
        );
      })
    );
  });

  it("should return a proper code block for code 'var a = \"b\"' with language javascript", () => {
    expect(engine.codeBlock('var a = "b"', "javascript")).to.equal(
      '```javascript\nvar a = "b"\n```'
    );
  });

  it("should return proper html '<p>Text here</p>'", () => {
    expect(engine.rawHTML("<p>Text here</p>")).to.equal("<p>Text here</p>");
  });

  it("should return a proper link with text 'Link here' and url '/link/here'", () => {
    expect(engine.link("Link here", "/link/here")).to.equal(
      "[Link here](/link/here)"
    );
  });

  it("should return a proper paragraph 'A paragraph here'", () => {
    expect(engine.paragraph("A paragraph here")).to.equal("A paragraph here");
  });

  it("should return a proper blockquote 'Blockquote here'", () => {
    expect(engine.blockQuote("Blockquote here")).to.equal("> Blockquote here");
  });

  describe(".list", () => {
    it("should return a proper list 1. 'List item 1 here' 2. 'List item 2 here' unordered", () => {
      expect(engine.list(["List item 1 here", "List item 2 here"])).to.equal(
        "- List item 1 here\n- List item 2 here"
      );
    });

    it("should return a proper list 1. 'List item 1 here' 2. 'List item 2 here' ordered", () => {
      expect(
        engine.list(["List item 1 here", "List item 2 here"], true)
      ).to.equal("1. List item 1 here\n2. List item 2 here");
    });
  });

  it("should return proper inline code 'var a = \"b\"'", () => {
    expect(engine.inlineCode('var a = "b"')).to.equal('`var a = "b"`');
  });

  it("should return a proper strikethrough 'Strikethrough here'", () => {
    expect(engine.strikethrough("Strikethrough here")).to.equal(
      "~Strikethrough here~"
    );
  });

  it("should return the proper img src 'https://foo.bar/foo/bar.png'", () => {
    expect(engine.image("https://foo.bar/foo/bar.png")).to.equal(
      "![](https://foo.bar/foo/bar.png)"
    );
  });

  it("should return a proper autolink src 'https://foo.bar'", () => {
    expect(engine.autolink("https://foo.bar")).to.equal("<https://foo.bar>");
  });

  it("should return a proper hard line break", () => {
    expect(engine.hardLineBreak()).to.equal("  ");
  });
});
