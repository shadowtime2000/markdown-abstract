declare interface MarkdownFeature {
  (text: string): string;
}

declare interface VoidMarkdownFeature extends MarkdownFeature {
  (): string;
}

declare interface HeadingMarkdownFeature extends MarkdownFeature {
  (text: string, headingLevel: 1 | 2 | 3 | 4 | 5 | 6): string;
}

declare interface CodeBlockMarkdownFeature extends MarkdownFeature {
  (code: string, language: string): string;
}

declare interface AutoLinkMarkdownFeature extends MarkdownFeature {
  (url: string): string;
}

declare interface ImageMarkdownFeature extends MarkdownFeature {
  (url: string): string;
}
