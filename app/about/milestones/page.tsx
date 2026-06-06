import { AboutSubpage } from "@/components/content/JoinAboutTemplates";
import { milestonesContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: milestonesContent.title,
  description: milestonesContent.intro,
  path: "/about/milestones",
});

export default function MilestonesPage() {
  return (
    <AboutSubpage
      title={milestonesContent.title}
      intro={milestonesContent.intro}
      breadcrumbs={[{ label: milestonesContent.title }]}
    >
      <ul className="max-w-3xl space-y-4">
        {milestonesContent.milestones.map((item) => (
          <li
            key={item.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h2 className="font-semibold text-foreground">{item.title}</h2>
            <p className="mt-1 text-sm text-text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-text-muted">{milestonesContent.awardsNote}</p>
    </AboutSubpage>
  );
}
