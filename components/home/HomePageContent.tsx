import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/ui/CTA";
import { Card } from "@/components/ui/Card";
import { VisualCard } from "@/components/ui/VisualCard";
import { HeroRecentHighlight } from "@/components/home/HeroRecentHighlight";
import {
  ImpactStatsCountUp,
  MagazineShelfAnimated,
  ScienceIn60Spotlight,
} from "@/components/home/HomeMotion";
import { OpenNowBanner } from "@/components/home/OpenNowBanner";
import { Section } from "@/components/ui/Section";
import {
  announcement,
  featuredPublications,
  ideologyBlock,
  impactStats,
  joinPaths,
  latestEventHighlight,
  mediaHighlights,
  scienceIn60Seconds,
  scienceInActionPrograms,
  scientificThinkingEssay,
  talksLearning,
  upcomingEvents,
} from "@/lib/content/home";
import { munnottMagazines, otherMagazines } from "@/lib/content/munnott-covers";
import { latestIssue } from "@/lib/content/munnott";
import { ysvContent } from "@/lib/content/ysv";
import { images } from "@/lib/images";
import { joinCta } from "@/lib/navigation";
import { site } from "@/lib/site";
import type { HeroEventImage } from "@/lib/hero-events";

type HomePageContentProps = {
  heroEventImages: HeroEventImage[];
};

export function HomePageContent({ heroEventImages }: HomePageContentProps) {
  return (
    <>
      {/* Hero — mission, recent highlights, CTAs */}
      <section className="hero-pattern relative overflow-hidden border-b border-white/10 text-white">
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:items-start lg:gap-10 lg:px-8 lg:py-16">
          <div className="min-w-0 lg:pt-1">
            <div className="mb-5 flex items-center gap-4">
              <Image
                src={images.brand.logo}
                alt={site.name}
                width={64}
                height={64}
                className="rounded-full shadow-md ring-1 ring-white/20"
                priority
              />
              <div>
                <p className="font-display text-xl font-bold md:text-2xl">
                  {site.name}
                </p>
                <p className="text-sm text-white/70">
                  Established {site.established} · Kerala science movement
                </p>
              </div>
            </div>
            <h1 className="font-display max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:max-w-2xl lg:text-4xl">
              {site.tagline}
            </h1>
            <p className="font-malayalam mt-3 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:max-w-2xl">
              {ideologyBlock.ml}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base lg:max-w-2xl">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
              <CTA href={joinCta.href} variant="primary">
                Join the Movement
              </CTA>
              <CTA
                href={joinCta.munnottLatest}
                variant="ghost"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Read Latest Issue
              </CTA>
              <CTA
                href="/science-in-action/science-in-60-seconds"
                variant="ghost"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Science in 60 seconds
              </CTA>
            </div>
          </div>

          <HeroRecentHighlight
            highlight={latestEventHighlight}
            eventPhotos={heroEventImages}
          />
        </div>
      </section>

      <OpenNowBanner announcement={announcement} />

      {/* Science in 60 seconds — autoplay reel spotlight */}
      <ScienceIn60Spotlight data={scienceIn60Seconds} />

      {/* Sasthram Munnott — animated shelf */}
      <Section
        id="sasthram-munnott"
        eyebrow="Digital magazine"
        title="Sasthram Munnott"
        description="Popular science for every reader — scroll to browse recent issues."
        actions={
          <CTA href="/sasthram-munnott/latest" variant="secondary">
            Latest issue
          </CTA>
        }
      >
        <MagazineShelfAnimated
          issues={munnottMagazines}
          totalCount={munnottMagazines.length}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {otherMagazines.map((mag) => (
            <span
              key={mag.title}
              className="rounded-full border border-border bg-surface-muted px-4 py-2 text-sm"
            >
              <strong className="text-primary">{mag.title}</strong>
              <span className="text-text-muted"> — {mag.description}</span>
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface-muted/60 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Now reading
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-foreground">
              {latestIssue.theme}
            </p>
            <p className="mt-1 text-sm text-text-muted">{latestIssue.editorNote}</p>
          </div>
          <div className="mt-4 flex shrink-0 flex-wrap gap-3 sm:mt-0">
            <CTA href="/sasthram-munnott/latest" variant="secondary">
              Read this issue
            </CTA>
            <CTA href="/sasthram-munnott/archive" variant="ghost">
              Full archive
            </CTA>
          </div>
        </div>
      </Section>

      {/* Publications — cover art grid */}
      <Section
        id="publications"
        eyebrow="Knowledge shelf"
        title="Featured publications"
        description="Books and campaign materials from the Sasthra Vedhi library."
        muted
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPublications.map((item) => (
            <VisualCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              imageSrc={item.cover}
              meta={item.category}
            />
          ))}
        </div>
        <div className="mt-8">
          <CTA href="/publications" variant="secondary">
            View All Publications
          </CTA>
        </div>
      </Section>

      {/* Editorial */}
      <Section id="scientific-thinking" eyebrow="What we stand for">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
          <blockquote className="border-l-4 border-accent pl-6">
            <p className="font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
              {scientificThinkingEssay.excerpt}
            </p>
            <footer className="mt-6">
              <Link
                href={scientificThinkingEssay.href}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Our vision & mission →
              </Link>
            </footer>
          </blockquote>
          <div className="rounded-2xl bg-primary-dark p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Ideology
            </p>
            <p className="font-malayalam mt-3 text-lg leading-relaxed">
              {ideologyBlock.ml}
            </p>
            <p className="mt-3 text-sm text-white/75">{ideologyBlock.en}</p>
          </div>
        </div>
      </Section>

      {/* YSV */}
      <Section
        id="yuva-sasthra-vedhi"
        eyebrow="Youth community"
        title="Yuva Sasthra Vedhi"
        description={ysvContent.description}
        muted
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <VisualCard
            title="Lead and learn with the youth wing"
            description={ysvContent.joinNote}
            href="/yuva-sasthra-vedhi/join"
            imageSrc={images.programs.scienceIn60Seconds}
            meta="Youth"
          />
          <div className="grid gap-4">
            {ysvContent.activities.map((activity) => (
              <Card
                key={activity.title}
                title={activity.title}
                description={activity.description}
              />
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <CTA href="/yuva-sasthra-vedhi/join" variant="primary">
                Join Yuva Sasthra Vedhi
              </CTA>
              <CTA href="/yuva-sasthra-vedhi" variant="ghost">
                Explore YSV
              </CTA>
            </div>
          </div>
        </div>
      </Section>

      {/* Science in Action — distinct photos */}
      <Section
        id="science-in-action"
        eyebrow="On the ground"
        title="Science in Action"
        description="Camps, Science in 60 seconds, outreach, and environmental initiatives across Kerala."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scienceInActionPrograms.map((program) => (
            <VisualCard
              key={program.title}
              title={program.title}
              description={program.description}
              href={program.href}
              imageSrc={program.image}
            />
          ))}
        </div>
      </Section>

      {/* Talks & Learning */}
      <Section
        id="talks-learning"
        eyebrow="Weekly rhythm"
        title="Talks & Learning"
        description="Wednesday Talks, reading circles, and recorded sessions."
        muted
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title={talksLearning.nextTalk.title}
            description={`${talksLearning.nextTalk.topic} · ${talksLearning.nextTalk.date}`}
            meta={talksLearning.nextTalk.speaker}
            href={talksLearning.nextTalk.href}
          />
          <Card
            title={talksLearning.readingCircle.title}
            description={talksLearning.readingCircle.book}
            href={talksLearning.readingCircle.href}
          />
          <Card
            title="Video archive"
            description={talksLearning.videoArchive.title}
            href={talksLearning.videoArchive.href}
          />
        </div>
      </Section>

      {/* Impact — count-up on scroll */}
      <Section id="impact" eyebrow="Our reach" title="Impact across Kerala">
        <ImpactStatsCountUp stats={impactStats} />
      </Section>

      {/* Upcoming */}
      <Section
        id="upcoming"
        eyebrow="What's next"
        title="Upcoming & ongoing"
        muted
      >
        <ul className="divide-y divide-border rounded-2xl border border-border bg-surface shadow-sm">
          {upcomingEvents.map((event) => (
            <li key={event.title}>
              <Link
                href={event.href}
                className="flex flex-col gap-1 px-6 py-4 transition-colors hover:bg-surface-muted sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground">{event.title}</p>
                  <p className="text-sm text-text-muted">{event.type}</p>
                </div>
                <span className="text-sm font-medium text-primary">
                  {event.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Join */}
      <Section
        id="join"
        eyebrow="Participate"
        title="Join the movement"
        description="Membership, youth leadership, volunteering, and support."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {joinPaths.map((path) => (
            <Card
              key={path.title}
              title={path.title}
              description={path.description}
              href={path.href}
            />
          ))}
        </div>
      </Section>

      {/* Media */}
      <Section
        id="media"
        eyebrow="In pictures"
        title="Media highlights"
        muted
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mediaHighlights.map((item) => (
            <VisualCard
              key={item.label}
              title={item.label}
              href={item.href}
              imageSrc={item.image}
              meta={item.type}
            />
          ))}
        </div>
        <div className="mt-8">
          <CTA href="/media" variant="secondary">
            Visit Media Center
          </CTA>
        </div>
      </Section>
    </>
  );
}
