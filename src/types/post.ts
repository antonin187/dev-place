type PostType = {
  id: string;
  notionId: string;
  blocks: Blocktype[];
  name: string;
  cover: string;
  description: string;
  createdBy: string;
  isPublished: boolean;
  publishedAt?: PublishedAt;
  propertyTags: string[];
  slug: string;
};

type PublishedAt = {
  start?: string | null;
  end?: string | null;
  time_zone?: string | null;
};

type Blocktype =
  | { type: "heading_1"; content: HeadingContent }
  | { type: "heading_2"; content: HeadingContent }
  | { type: "heading_3"; content: HeadingContent }
  | { type: "paragraph"; content: ParagraphContent }
  | { type: "bulleted_list_item"; content: ListContent }
  | { type: "numbered_list_item"; content: ListContent }
  | { type: "callout"; content: CalloutContent }
  | { type: "quote"; content: QuoteContent }
  | { type: "table"; content: TableContent }
  | { type: "code"; content: CodeContent }
  | { type: "divider"; content: DividerContent };

type HeadingContent = {
  is_toggleable?: boolean;
  color?: string;
  text?: TextBlock[];
};

type ParagraphContent = {
  color?: string;
  text?: TextBlock[];
};

type ListContent = {
  color?: string;
  text?: TextBlock[];
};

type CalloutContent = {
  icon?: { type: string; emoji?: string };
  color?: string;
  text?: TextBlock[];
};

type QuoteContent = {
  color?: string;
  text?: TextBlock[];
};

type TableContent = {
  table_width: number;
  has_column_header: boolean;
  has_row_header: boolean;
};

type CodeContent = {
  caption?: string[];
  language?: string;
  text?: TextBlock[];
};

type DividerContent = Record<string, never>; // Objet vide pour éviter TypeScript errors

type TextBlock = {
  type: string;
  text: { content: string; link?: { url?: string } | null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href?: string | null;
};

type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};
