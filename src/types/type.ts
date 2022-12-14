export type BlogPostLanuage = "en" | "zh" | "de";
export interface IBlogPost {
  title: string;
  date: string;
  slug: string;
  content: string;
  language?: BlogPostLanuage;
}
