declare interface BaseMarkdownSpecification {
  bold: MarkdownFeature;
  italicize: MarkdownFeature;
}

declare interface GithubFlavoredMarkdownSpecification
  extends BaseMarkdownSpecification {
  thematicBreak: VoidMarkdownFeature;
  heading: HeadingMarkdownFeature;
  codeBlock: CodeBlockMarkdownFeature;
  rawHTML: MarkdownFeature;
  link: (text: string, url: string) => string;
  paragraph: MarkdownFeature;
  blockQuote: MarkdownFeature;
  list: (items: string[], ordered: boolean) => string;
  inlineCode: MarkdownFeature;
  strikethrough: MarkdownFeature;
  image: ImageMarkdownFeature;
  autolink: AutoLinkMarkdownFeature;
  hardLineBreak: VoidMarkdownFeature;
}
