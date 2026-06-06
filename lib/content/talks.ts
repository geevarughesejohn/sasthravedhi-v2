export type TalkSession = {
  slug: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  status: "upcoming" | "recorded";
  imageSrc?: string;
};

export type VideoEntry = {
  slug: string;
  title: string;
  speaker: string;
  duration: string;
  description: string;
  videoUrl?: string;
  externalUrl?: string;
  imageSrc?: string;
};

export type LearningResource = {
  title: string;
  description: string;
  href: string;
  type: string;
};

export const talksIntro = {
  title: "Talks & Learning",
  description:
    "Science Vedhi Online Talk Series — over 30 Wednesday Talks — plus the Science Book Reading Group and learning resources.",
};

export const wednesdayTalksIntro = {
  title: "Science Vedhi Online Talk Series",
  description:
    "We have successfully conducted over 30 Wednesday Talks, featuring unique guests and covering a wide range of topics accessible to both experts and laypersons. Each session typically draws an engaged audience of 60–80 participants.",
  signupNote: "Contact us or visit sasthravedhi.in to join the next session.",
  signupUrl: "https://sasthravedhi.in/sasthravedhionlinetalks/",
};

export const readingCircle = {
  title: "Science Book Reading Group",
  description:
    "Join our group science book reading held monthly with fresh, upcoming authors at our State Committee headquarters in Thiruvananthapuram.",
  currentBook: "Selection announced at each meeting",
  schedule: "Monthly at State Committee headquarters, Thiruvananthapuram",
  contactNote: "Want your book to be read? Contact us!",
  pastBooks: [
    "Popular science classics and contemporary science communication",
    "Works on environment, public health, and scientific temper",
    "Titles from the Visionary Indian Leaders series",
  ],
};

export const wednesdayTalks: TalkSession[] = [
  {
    slug: "weekly-wednesday-talk",
    title: "Weekly Wednesday Talk",
    speaker: "Rotating guest speakers",
    date: "Every Wednesday",
    description:
      "Open to experts and laypersons — 60–80 participants per session on science, society, and public issues.",
    status: "upcoming",
  },
  {
    slug: "richard-walding",
    title: "Talk by Dr. Richard Walding",
    speaker: "Dr. Richard Walding",
    date: "2025",
    description:
      "Featured guest at the Science Vedhi Online Talk Series.",
    status: "recorded",
  },
  {
    slug: "science-popularisation-kerala",
    title: "Science, Humour, and Popularisation",
    speaker: "Kerala Opposition Leader (event speaker)",
    date: "2025",
    description:
      "At a Sasthra Vedhi event — the need for science, humour, and popularisation in public life.",
    status: "recorded",
  },
];

export const videoArchive: VideoEntry[] = [
  {
    slug: "opposition-leader-event",
    title: "Science, Humour, and Popularisation",
    speaker: "Sasthra Vedhi Event",
    duration: "Recorded",
    description:
      "Kerala's Opposition Leader on the need for science communication and popularisation.",
    videoUrl: "https://www.youtube.com/watch?v=klG63Q8RZ8w",
  },
  {
    slug: "online-talk-series",
    title: "Science Vedhi Online Talk Series",
    speaker: "Various guests",
    duration: "30+ sessions",
    description:
      "Browse all Wednesday Talk sessions and join upcoming meetings.",
    externalUrl: "https://sasthravedhi.in/sasthravedhionlinetalks/",
  },
  {
    slug: "richard-walding",
    title: "Talk by Dr. Richard Walding",
    speaker: "Dr. Richard Walding",
    duration: "Recorded session",
    description: "Featured science talk from the online series.",
    externalUrl: "https://sasthravedhi.in/sasthravedhionlinetalks/",
  },
];

export const learningResources: LearningResource[] = [
  {
    title: "Sasthram Munnott",
    description: "Read popular science articles and purchase magazine issues.",
    href: "/sasthram-munnott",
    type: "Magazine",
  },
  {
    title: "Publications",
    description: "Books and educational materials from our library.",
    href: "/publications",
    type: "Library",
  },
  {
    title: "Science Book Reading Group",
    description: "Monthly readings with fresh authors at headquarters.",
    href: "/talks-and-learning/reading-circle",
    type: "Community",
  },
  {
    title: "Wednesday Talks",
    description: "Weekly talks — 30+ sessions conducted so far.",
    href: "/talks-and-learning/wednesday-talks",
    type: "Talks",
  },
];
