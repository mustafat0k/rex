
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { HorizontalRuleNode } from "@lexical/markdown";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { CodeNode } from "@lexical/code";
// import { HeadingNode } from "@lexical/heading"; import { QuoteNode } from "@lexical/quote";
export const nodes = [ListNode, ListItemNode, LinkNode, AutoLinkNode, TableNode, TableCellNode, TableRowNode,
    CodeNode
]
export default nodes
// HeadingNode, QuoteNode, HorizontalRuleNode