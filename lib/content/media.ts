import { images } from "@/lib/images";

export type MediaType = "photo" | "video" | "event" | "news";

export type MediaItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  type: MediaType;
  label: string;
  imageSrc?: string;
  videoUrl?: string;
  externalUrl?: string;
};

export const mediaIntro = {
  title: "Media Center",
  description:
    "Photos, videos, event highlights, and news from Sasthra Vedhi programs across Kerala. Follow us on Facebook for the latest updates.",
  facebookPage: "https://www.facebook.com/395125260354812",
};

export const mediaSections: Record<
  MediaType,
  { title: string; description: string; path: string }
> = {
  photo: {
    title: "Photo Gallery",
    description:
      "Images from science camps, Science in 60 seconds, Environment Day, and public programmes.",
    path: "/media/gallery",
  },
  video: {
    title: "Videos",
    description: "Recorded talks, event coverage, and program highlights.",
    path: "/media/videos",
  },
  event: {
    title: "Event Highlights",
    description: "Recaps from science camps, book releases, and public gatherings.",
    path: "/media/events",
  },
  news: {
    title: "News & Social",
    description:
      "Facebook posts, press coverage, and blog updates from Sasthra Vedhi.",
    path: "/media/news",
  },
};

export const mediaItems: MediaItem[] = [
  {
    slug: "science-in-60-seconds-awards",
    title: "Science in 60 seconds Awards",
    description:
      "Dr. S. Somanath presenting the award to one of the winners of the Science in 60 seconds competition.",
    date: "2025",
    type: "photo",
    label: "Science in 60 seconds",
    imageSrc: images.programs.scienceIn60Seconds,
  },
  {
    slug: "environment-day-mar-ivanios",
    title: "Environment Day at Mar Ivanios College",
    description:
      "Environment Day celebration at Mar Ivanios College, Thiruvananthapuram.",
    date: "2024",
    type: "photo",
    label: "Environment",
    imageSrc: images.media.environmentDay,
  },
  {
    slug: "science-awards-announcement",
    title: "Sasthra Science Awards",
    description:
      "Announcement of Sasthra Science Awards and Science Dreaming initiative.",
    date: "2025",
    type: "photo",
    label: "Awards",
    imageSrc: images.brand.hero,
  },
  {
    slug: "richard-walding-talk",
    title: "Talk by Dr. Richard Walding",
    description: "Featured guest at the Science Vedhi Online Talk Series.",
    date: "2025",
    type: "photo",
    label: "Wednesday Talks",
    imageSrc: images.media.richardWaldingTalk,
  },
  {
    slug: "environment-day-posters",
    title: "Environment Day Posters",
    description: "Poster series for Environment Day outreach programmes.",
    date: "2025",
    type: "photo",
    label: "Environment",
    imageSrc: images.media.envPoster,
  },
  {
    slug: "science-camp-sessions",
    title: "Science Camp Sessions",
    description: "Engaging science camps for youth across Kerala.",
    date: "2025",
    type: "photo",
    label: "Science Camps",
    imageSrc: images.events.scienceCamp,
  },
  {
    slug: "opposition-leader-event",
    title: "Science, Humour, and Popularisation",
    description:
      "At a Sasthra Vedhi event, Kerala's Opposition Leader stressed the need for science, humour, and popularisation.",
    date: "2025",
    type: "video",
    label: "Event Video",
    imageSrc: images.media.oppositionLeaderTalk,
    videoUrl: "https://www.youtube.com/watch?v=klG63Q8RZ8w",
  },
  {
    slug: "wednesday-talk-series",
    title: "Science Vedhi Online Talk Series",
    description:
      "Over 30 Wednesday Talks with 60–80 participants each — experts and laypersons welcome.",
    date: "2025",
    type: "video",
    label: "Wednesday Talks",
    imageSrc: images.media.richardWaldingTalk,
    externalUrl: "https://sasthravedhi.in/sasthravedhionlinetalks/",
  },
  {
    slug: "environment-day-celebration",
    title: "Environment Day Celebration",
    description:
      "Community programme linking ecology to everyday citizenship at Mar Ivanios College.",
    date: "2024",
    type: "event",
    label: "Environment Day",
    imageSrc: images.media.environmentDay,
  },
  {
    slug: "sasthrabodham-kedaruthe-release",
    title: "SasthraBodham Kedaruthe Book Release",
    description:
      "New publication released by Poet Sri Prabha Varma at a Sasthra Vedhi book release function.",
    date: "2026",
    type: "event",
    label: "Book Release",
    imageSrc: images.publications.puthiyaVazhikal,
    externalUrl:
      "https://www.facebook.com/122179378472469996/posts/122204450042469996",
  },
  {
    slug: "icfoss-director-stall-visit",
    title: "ICFOSS Director at Sasthra Vedhi Stall",
    description: "ICFOSS Director Dr. Sunil T visiting the Sasthra Vedhi stall.",
    date: "2026",
    type: "news",
    label: "Facebook",
    externalUrl:
      "https://www.facebook.com/122179378472469996/posts/122204450414469996",
  },
  {
    slug: "book-release-audience",
    title: "Book Release Function",
    description: "Audience at our book release function.",
    date: "2026",
    type: "news",
    label: "Facebook",
    externalUrl:
      "https://www.facebook.com/122179378472469996/posts/122204450138469996",
  },
  {
    slug: "med-in-india-chip",
    title: "ഇനി മെഡ് ഇൻ ഇന്ത്യ ചിപ്പ്",
    description:
      "By Prof. Dr. Achuthsankar S. Nair — on artificial intelligence in action in Kerala.",
    date: "2024",
    type: "news",
    label: "Blog",
    externalUrl:
      "https://sasthravedhi.in/artificial-intelligence-in-action-in-kerala/",
  },
];

export function getMediaByType(type: MediaType): MediaItem[] {
  return mediaItems.filter((item) => item.type === type);
}

export function getMediaItem(slug: string): MediaItem | undefined {
  return mediaItems.find((item) => item.slug === slug);
}

export function getAllMediaSlugs(): string[] {
  return mediaItems.map((item) => item.slug);
}
