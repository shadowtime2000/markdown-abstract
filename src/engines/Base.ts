class BaseEngine implements BaseMarkdownSpecification {
  public bold(text: string): string {
    return `**${text}**`;
  }

  public italicize(text: string): string {
    return `_${text}_`;
  }
}

export = BaseEngine;
