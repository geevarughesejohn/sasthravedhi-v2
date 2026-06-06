import { AboutSubpage } from "@/components/content/JoinAboutTemplates";
import { visionMissionContent } from "@/lib/content/org";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: visionMissionContent.title,
  description: visionMissionContent.mission,
  path: "/about/vision-mission",
});

export default function VisionMissionPage() {
  return (
    <AboutSubpage
      title={visionMissionContent.title}
      intro={visionMissionContent.mission}
      breadcrumbs={[{ label: visionMissionContent.title }]}
    >
      <div className="max-w-3xl space-y-8">
        <div>
          <h2 className="font-display text-xl font-semibold">Vision</h2>
          <p className="mt-2 leading-relaxed text-text-muted">
            {visionMissionContent.vision}
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">Mission</h2>
          <p className="mt-2 leading-relaxed text-text-muted">
            {visionMissionContent.mission}
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold">Principles</h2>
          <ul className="mt-3 space-y-2">
            {visionMissionContent.principles.map((principle) => (
              <li key={principle} className="flex gap-2 text-text-muted">
                <span className="text-primary">·</span>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AboutSubpage>
  );
}
