import { PublicationCategoryPage } from "@/components/content/PublicationCategoryPage";
import { categoryMeta } from "@/lib/content/publications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: categoryMeta.books.title,
  description: categoryMeta.books.description,
  path: categoryMeta.books.path,
});

export default function BooksPage() {
  return <PublicationCategoryPage category="books" />;
}
