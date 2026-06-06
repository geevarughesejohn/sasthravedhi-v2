import { images } from "@/lib/images";
import { site } from "@/lib/site";

export type ImpactStatItem = {
  label: string;
  numericValue: number;
  suffix?: string;
};

export const impactStats: ImpactStatItem[] = [
  { label: "Established", numericValue: 2007 },
  { label: "Wednesday Talks conducted", numericValue: 30, suffix: "+" },
  { label: "Science in 60 seconds entries", numericValue: 700, suffix: "+" },
  {
    label: "Lehari Bheeshani booklets distributed",
    numericValue: 10000,
    suffix: "+",
  },
];

export const scienceIn60Seconds = {
  title: "Science in 60 seconds",
  tagline: "Bring science to life in one minute.",
  description:
    "Our statewide reel contest for school students — over 700 entries showcasing creative science communication across Kerala.",
  href: "/science-in-action/science-in-60-seconds",
  videoUrl: "https://www.youtube.com/watch?v=klG63Q8RZ8w",
  stats: [
    { value: "700+", label: "Student entries" },
    { value: "60 sec", label: "Max reel length" },
    { value: "Statewide", label: "Participation" },
  ],
} as const;

export type ScienceIn60Content = typeof scienceIn60Seconds;

export const announcement = {
  badge: "Open now",
  title: "Sasthra Science Awards & Science Dreaming",
  summary:
    "Nominate science communicators and students. Science Dreaming applications are open.",
  ctaLabel: "Apply & nominate",
  href: "/science-in-action/science-dreaming",
} as const;

export type AnnouncementContent = typeof announcement;

export const latestEventHighlight = {
  label: "Recent highlight",
  title: "Science in 60 seconds Awards",
  subtitle:
    "Dr. S. Somanath presenting awards to winners of the statewide reel contest.",
  date: "2025",
  href: "/media/gallery",
  imageSrc: images.programs.scienceIn60Seconds,
} as const;

export type LatestEventHighlight = typeof latestEventHighlight;

export const featuredPublications = [
  {
    title: "Keralathil Anavanilayam Anivaryamo",
    category: "Book",
    description:
      "On nuclear energy and Kerala's future — by Prof. Dr. Achuthsankar S. Nair.",
    href: "/publications/keralathil-anavanilayam-anivaryamo",
    cover: images.publications.keralathilAnavanilayam,
  },
  {
    title: "Lehari Bheeshani",
    category: "Campaign",
    description:
      "Anti-drug guide for parents — 10,000+ copies distributed under Creative Commons.",
    href: "/publications/lehari-bheeshani",
    cover: images.publications.lehariBheeshani,
  },
  {
    title: "Unnikkuttante Pustakapura",
    category: "Children",
    description: "Children's science reader by Bibina C B.",
    href: "/publications/unnikkuttante-pustakapura",
    cover: images.publications.unnikkuttantePustakapura,
  },
  {
    title: "Puthiya Vazhikal",
    category: "Book",
    description: "From the Visionary Indian Leaders series.",
    href: "/publications/puthiya-vazhikal",
    cover: images.publications.puthiyaVazhikal,
  },
];

export const scienceInActionPrograms = [
  {
    title: "Science Camps",
    description: "Engaging science camps for youth across Kerala.",
    href: "/science-in-action/science-camps",
    image: images.programs.scienceCamps,
  },
  {
    title: "Science in 60 seconds",
    description: "One-minute reel contest — 700+ school students statewide.",
    href: "/science-in-action/science-in-60-seconds",
    image: images.programs.scienceIn60Seconds,
  },
  {
    title: "Science Dreaming",
    description: "Awards nurturing young scientific imagination.",
    href: "/science-in-action/science-dreaming",
    image: images.programs.scienceDreaming,
  },
  {
    title: "School Outreach",
    description: "Scientific temper in classrooms statewide.",
    href: "/science-in-action/school-outreach",
    image: images.programs.schoolOutreach,
  },
  {
    title: "Community Outreach",
    description: "District committees hosting forums and distributing materials.",
    href: "/science-in-action/community-outreach",
    image: images.programs.communityOutreach,
  },
  {
    title: "Environmental Initiatives",
    description: "Environment Day and ecological awareness programmes.",
    href: "/science-in-action/environment",
    image: images.programs.environment,
  },
];

export const talksLearning = {
  nextTalk: {
    title: "Science Vedhi Online Talk Series",
    speaker: "Weekly Wednesday Talks",
    topic: "30+ sessions with 60–80 participants each — experts and laypersons welcome",
    date: "Every Wednesday",
    href: "/talks-and-learning/wednesday-talks",
  },
  readingCircle: {
    title: "Science Book Reading Circle",
    book: "Monthly readings with fresh authors at State Committee headquarters, Thiruvananthapuram",
    href: "/talks-and-learning/reading-circle",
  },
  videoArchive: {
    title: "Recorded talks on YouTube",
    href: "/talks-and-learning/videos",
  },
};

export const upcomingEvents = [
  {
    title: "Wednesday Talk",
    date: "Weekly",
    type: "Talks & Learning",
    href: "/talks-and-learning/wednesday-talks",
  },
  {
    title: "Science in 60 seconds",
    date: "700+ entries",
    type: "Youth programme",
    href: "/science-in-action/science-in-60-seconds",
  },
  {
    title: "Yuva Sasthra Vedhi",
    date: "Campus calendar",
    type: "Youth",
    href: "/yuva-sasthra-vedhi",
  },
];

export const joinPaths = [
  {
    title: "Become a Member",
    description: "Your membership is just a click away — join the science movement.",
    href: "/join-us/membership",
  },
  {
    title: "Join Yuva Sasthra Vedhi",
    description: "Lead and learn with the youth wing.",
    href: "/yuva-sasthra-vedhi/join",
  },
  {
    title: "Volunteer",
    description: "Support camps, talks, and publications.",
    href: "/join-us/volunteer",
  },
  {
    title: "Support Our Work",
    description: "Help sustain science communication across Kerala.",
    href: "/join-us/support",
  },
];

export const mediaHighlights = [
  {
    label: "Science camps across Kerala",
    type: "Photo",
    image: images.programs.scienceCamps,
    href: "/media/gallery",
  },
  {
    label: "Science in 60 seconds awards",
    type: "Event",
    image: images.programs.scienceIn60Seconds,
    href: "/science-in-action/science-in-60-seconds",
  },
  {
    label: "Sasthram Munnot",
    type: "Magazine",
    image: images.munnott.may2025,
    href: "/sasthram-munnott",
  },
  {
    label: "Wednesday Talk sessions",
    type: "Talks",
    image: images.programs.wednesdayTalks,
    href: "/talks-and-learning/wednesday-talks",
  },
];

export const scientificThinkingEssay = {
  title: "Why scientific thinking matters",
  excerpt:
    "We communicate science in a simple, non-dogmatic language that resonates with today's youth. Sasthra Vedhi brings science closer to people through publications, camps, and community projects — promoting scientific thinking, sustainable development, and social responsibility across Kerala.",
  href: "/about/vision-mission",
};

export const ideologyBlock = {
  ml: site.taglineMl,
  en: "Development and social progress through non-violent science and technology.",
};
