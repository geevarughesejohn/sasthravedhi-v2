import { YsvSubpage } from "@/components/content/YsvSubpage";
import { ysvPages } from "@/lib/content/ysv-pages";
import { createPageMetadata } from "@/lib/metadata";

const page = ysvPages.about;

export const metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: "/yuva-sasthra-vedhi/about",
});

export default function YsvAboutPage() {
  return (
    <YsvSubpage
      title={page.title}
      description={page.description}
      breadcrumbLabel="About"
    >
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-text-muted">
        {page.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </YsvSubpage>
  );
}
