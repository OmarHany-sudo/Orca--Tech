import { marked } from "marked";

export function markdownToHtml(md: string) {
  return marked.parse(md);
}