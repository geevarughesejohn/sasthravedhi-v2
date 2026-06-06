import { YsvSubpage } from "@/components/content/YsvSubpage";
import { ysvPages } from "@/lib/content/ysv-pages";
import { createPageMetadata } from "@/lib/metadata";

const page = ysvPages.leadership;

export const metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: "/yuva-sasthra-vedhi/leadership",
});

export default function YsvLeadershipPage() {
  return (
    <YsvSubpage
      title={page.title}
      description={page.description}
      breadcrumbLabel="Leadership Programs"
    >
      <ul className="max-w-2xl space-y-3">
        {page.items.map((item) => (
          <li key={item} className="flex gap-2 text-text-muted">
            <span className="text-primary">·</span>
            {item}
          </li>
        ))}
      </ul>
    </YsvSubpage>
  );
}
