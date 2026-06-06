import { AboutSubpage } from "@/components/content/JoinAboutTemplates";
import { leadershipContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: leadershipContent.title,
  description: leadershipContent.intro,
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <AboutSubpage
      title={leadershipContent.title}
      intro={leadershipContent.intro}
      breadcrumbs={[{ label: leadershipContent.title }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {leadershipContent.bodies.map((body) => (
          <div
            key={body.title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <h2 className="font-display text-lg font-semibold">{body.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {body.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-text-muted">{leadershipContent.note}</p>
    </AboutSubpage>
  );
}
