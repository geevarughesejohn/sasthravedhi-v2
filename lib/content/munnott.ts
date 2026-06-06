import { images } from "@/lib/images";

export type MunnottArticle = {
  slug: string;
  issueSlug: string;
  title: string;
  author: string;
  excerpt: string;
  readMinutes: number;
  body: string[];
  type: "article" | "editorial";
  featured: boolean;
};

export type MunnottIssue = {
  slug: string;
  number: number;
  year: number;
  month: string;
  theme: string;
  coverLabel?: string;
  editorNote: string;
  publishedAt: string;
  coverImage: string;
  purchaseUrl?: string;
};

export const munnottIntro = {
  title: "Sasthram Munnott",
  description:
    "Discover our latest popular science magazine, thoughtfully crafted for readers of all backgrounds. We also publish Scitech Keralam (young adults) and Kutty Sasthram (children).",
};

export const relatedMagazines = [
  {
    title: "Scitech Keralam",
    description: "Science magazine for young adults.",
  },
  {
    title: "Kutty Sasthram",
    description: "Popular science for children.",
  },
];

export const munnottArticles: MunnottArticle[] = [
  {
    slug: "evidence-in-public-life",
    issueSlug: "latest",
    title: "Why Evidence Still Matters in Public Life",
    author: "Editorial Board",
    excerpt:
      "Scientific temper begins with the willingness to revise our views when facts change.",
    readMinutes: 8,
    type: "editorial",
    featured: true,
    body: [
      "Public debate in a democracy depends on more than passion and persuasion. It depends on a shared commitment to evidence—to checking claims, comparing sources, and updating conclusions when new information arrives.",
      "Scientific temper is often misunderstood as cold skepticism. In practice, it is disciplined curiosity: the habit of asking how we know what we think we know.",
      "When communities practice this habit together, they become harder to mislead and better equipped to act on environmental, health, and social challenges that affect daily life in Kerala.",
    ],
  },
  {
    slug: "climate-and-coastal-kerala",
    issueSlug: "latest",
    title: "Climate Realities Along Coastal Kerala",
    author: "Contributors",
    excerpt:
      "Local environmental change demands local scientific literacy and collective action.",
    readMinutes: 6,
    type: "article",
    featured: true,
    body: [
      "Coastal Kerala faces a combination of rising seas, changing rainfall patterns, and pressures on fisheries and agriculture. Global models matter, but so do local observation and community memory.",
      "Popular science writing can bridge expert research and public action by translating data into stories people can use—without exaggeration or fatalism.",
    ],
  },
  {
    slug: "youth-and-rational-inquiry",
    issueSlug: "latest",
    title: "Youth and the Habit of Rational Inquiry",
    author: "Yuva Sasthra Vedhi",
    excerpt:
      "Student chapters and campus conversations are shaping the next generation of scientific citizens.",
    readMinutes: 5,
    type: "article",
    featured: true,
    body: [
      "Yuva Sasthra Vedhi brings students into the science movement not as passive audiences but as organizers, readers, and questioners.",
      "The habit of rational inquiry grows through practice. Youth programs are where that practice begins for many members.",
    ],
  },
  {
    slug: "editorial-science-as-civic-duty",
    issueSlug: "latest",
    title: "Science as Civic Duty",
    author: "Editorial Board",
    excerpt:
      "Popular science is not entertainment—it is part of how a society governs itself wisely.",
    readMinutes: 4,
    type: "editorial",
    featured: false,
    body: [
      "Every issue of Sasthram Munnott is an invitation to read critically, think clearly, and participate in public life with greater confidence.",
      "We publish for teachers, students, workers, parents, and citizens who believe Kerala's future depends on minds that question with care.",
    ],
  },
];

export const munnottIssues: MunnottIssue[] = [
  {
    slug: "latest",
    number: 6,
    year: 2025,
    month: "June 2025",
    theme: "Sasthram Munnot — June 2025",
    coverLabel: "Latest Issue",
    editorNote:
      "Regular issues of Sasthram Munnot have been released consistently since 2024. Some issues have been acclaimed by a Nobel Laureate. Purchase the latest issue or browse the archive below.",
    publishedAt: "June 2025",
    coverImage: images.munnott.june2025,
  },
  {
    slug: "may-2025",
    number: 5,
    year: 2025,
    month: "May 2025",
    theme: "Sasthram Munnot — May 2025",
    editorNote: "May 2025 issue of our flagship popular science magazine.",
    publishedAt: "May 2025",
    coverImage: images.munnott.may2025,
  },
  {
    slug: "april-2025",
    number: 4,
    year: 2025,
    month: "April 2025",
    theme: "Sasthram Munnot — April 2025",
    editorNote: "April 2025 issue — available on Amazon.",
    publishedAt: "April 2025",
    coverImage: images.munnott.april2025,
    purchaseUrl: "https://amzn.in/d/eRxTMMZ",
  },
  {
    slug: "march-2025",
    number: 3,
    year: 2025,
    month: "March 2025",
    theme: "Sasthram Munnot — March 2025",
    editorNote: "March 2025 issue — available on Amazon.",
    publishedAt: "March 2025",
    coverImage: images.munnott.march2025,
    purchaseUrl: "https://amzn.in/d/fxT9V0H",
  },
  {
    slug: "feb-2025",
    number: 2,
    year: 2025,
    month: "February 2025",
    theme: "Sasthram Munnot — February 2025",
    editorNote: "February 2025 issue — available on Amazon.",
    publishedAt: "February 2025",
    coverImage: images.munnott.feb2025,
    purchaseUrl: "https://amzn.in/d/gMkfTX8",
  },
  {
    slug: "jan-2025",
    number: 1,
    year: 2025,
    month: "January 2025",
    theme: "Sasthram Munnot — January 2025",
    editorNote: "January 2025 issue — available on Amazon.",
    publishedAt: "January 2025",
    coverImage: images.munnott.jan2025,
    purchaseUrl: "https://amzn.in/d/5IEXLz2",
  },
];

export const latestIssue = munnottIssues[0];

export const archiveIssues = munnottIssues.filter(
  (issue) => issue.slug !== "latest",
);

export function getMunnottIssue(slug: string): MunnottIssue | undefined {
  return munnottIssues.find((issue) => issue.slug === slug);
}

export function getMunnottArticle(slug: string): MunnottArticle | undefined {
  return munnottArticles.find((article) => article.slug === slug);
}

export function getAllMunnottArticleSlugs(): string[] {
  return munnottArticles.map((article) => article.slug);
}

export function getAllMunnottIssueSlugs(): string[] {
  return munnottIssues.map((issue) => issue.slug);
}

export function getArticlesForIssue(issueSlug: string): MunnottArticle[] {
  return munnottArticles.filter((article) => article.issueSlug === issueSlug);
}

export function getFeaturedArticles(): MunnottArticle[] {
  return munnottArticles.filter((article) => article.featured);
}

export function getEditorials(): MunnottArticle[] {
  return munnottArticles.filter((article) => article.type === "editorial");
}
