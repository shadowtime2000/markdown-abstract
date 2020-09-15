import BaseEngine from "./Base";

class GithubFlavoredMarkdownEngine
  extends BaseEngine
  implements GithubFlavoredMarkdownSpecification {
  public thematicBreak(): string {
    return "---";
  }

  public heading(
    text: string,
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 1
  ): string {
    return `${"#".repeat(headingLevel)} ${text}`;
  }

  public codeBlock(code: string, language = ""): string {
    return `\`\`\`${language}\n${code}\n\`\`\``;
  }

  public rawHTML(text: string): string {
    return text;
  }

  public link(text: string, url: string): string {
    return `[${text}](${url})`;
  }

  public paragraph(text: string): string {
    return text;
  }

  public blockQuote(text: string): string {
    return `> ${text}`;
  }

  public list(items: string[], ordered = false): string {
    let counter = ordered ? 0 : null;
    const template: string = items
      .map((item) => {
        if (counter === null) {
          return `- ${item}`;
        } else {
          counter = counter + 1;
          return `${counter}. ${item}`;
        }
      })
      .join("\n");
    return template;
  }

  public inlineCode(text: string): string {
    return `\`${text}\``;
  }

  public strikethrough(text: string): string {
    return `~${text}~`;
  }

  public image(url: string): string {
    return `![](${url})`;
  }

  public autolink(url: string): string {
    return `<${url}>`;
  }

  public hardLineBreak(): string {
    return `  `;
  }
}

export = GithubFlavoredMarkdownEngine;
