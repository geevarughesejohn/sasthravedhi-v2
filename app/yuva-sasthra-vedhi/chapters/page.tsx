import { YsvSubpage } from "@/components/content/YsvSubpage";
import { ysvPages } from "@/lib/content/ysv-pages";
import { createPageMetadata } from "@/lib/metadata";

const page = ysvPages.chapters;

export const metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: "/yuva-sasthra-vedhi/chapters",
});

export default function YsvChaptersPage() {
  return (
    <YsvSubpage
      title={page.title}
      description={page.description}
      breadcrumbLabel="Student Chapters"
    >
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-text-muted">
        {page.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </YsvSubpage>
  );
}
