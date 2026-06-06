import { AboutSubpage } from "@/components/content/JoinAboutTemplates";
import { historyContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: historyContent.title,
  description: historyContent.intro,
  path: "/about/history",
});

export default function HistoryPage() {
  return (
    <AboutSubpage
      title={historyContent.title}
      intro={historyContent.intro}
      breadcrumbs={[{ label: historyContent.title }]}
    >
      <ol className="max-w-3xl space-y-8">
        {historyContent.timeline.map((entry) => (
          <li key={entry.period} className="border-l-4 border-primary pl-6">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {entry.period}
            </h2>
            <p className="mt-2 leading-relaxed text-text-muted">{entry.text}</p>
          </li>
        ))}
      </ol>
    </AboutSubpage>
  );
}
