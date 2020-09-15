import BaseEngine from "./Base";

class DiscordMarkdownEngine
  extends BaseEngine
  implements DiscordMarkdownSpecification {
  public underline(text: string): string {
    return `__${text}__`;
  }

  public strikethrough(text: string): string {
    return `~~${text}~~`;
  }

  public spoiler(text: string): string {
    return `||${text}||`;
  }

  public codeBlock(code: string, language = ""): string {
    return `\`\`\`${language}\n${code}\n\`\`\``;
  }

  public inlineCode(text: string): string {
    return `\`${text}\``;
  }

  public blockQuote(text: string): string {
    return `> ${text}`;
  }
}

export = DiscordMarkdownEngine;
