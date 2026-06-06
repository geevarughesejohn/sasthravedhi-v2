export type ProgramSlug =
  | "science-camps"
  | "science-in-60-seconds"
  | "science-dreaming"
  | "school-outreach"
  | "community-outreach"
  | "environment";

export type Program = {
  slug: ProgramSlug;
  title: string;
  description: string;
  summary: string;
  body: string[];
  highlights: string[];
};

export const programsIntro = {
  title: "Science in Action",
  description:
    "Hands-on programs that bring scientific temper into camps, schools, communities, and environmental action across Kerala.",
};

export const programs: Program[] = [
  {
    slug: "science-camps",
    title: "Science Camps",
    description: "Hands-on learning experiences for students and communities.",
    summary:
      "Science camps combine experiments, discussions, and team activities to make inquiry tangible for participants of all ages.",
    body: [
      "Sasthra Vedhi science camps create spaces where curiosity is encouraged and method matters. Participants work together on experiments, group projects, and guided discussions led by experienced organizers.",
      "Camps are held across Kerala for students and community groups, often in partnership with schools, colleges, and local volunteers.",
      "The goal is not only to teach facts but to build confidence in asking questions, testing ideas, and sharing what is learned.",
    ],
    highlights: [
      "Experiments and group learning",
      "Student and community participants",
      "Seasonal camps across Kerala",
    ],
  },
  {
    slug: "science-in-60-seconds",
    title: "Science in 60 seconds",
    description:
      "Bring science to life in one minute — a statewide reel contest for school students.",
    summary:
      "Science in 60 seconds challenges young people to communicate science creatively through short video reels.",
    body: [
      "Science in 60 seconds is one of Sasthra Vedhi's signature youth programs — a reel contest that brings science to life in just one minute.",
      "Over 700 school students across Kerala have participated, showcasing creativity in science communication.",
      "Winners are recognised at public events, including presentations by distinguished guests from India's science community.",
    ],
    highlights: [
      "One-minute science reel contest",
      "700+ student entries statewide",
      "Creative science communication",
    ],
  },
  {
    slug: "science-dreaming",
    title: "Science Dreaming",
    description:
      "Imaginative programs connecting curiosity with scientific method.",
    summary:
      "Science Dreaming invites participants to explore bold questions and connect wonder with disciplined inquiry.",
    body: [
      "Science begins with wonder. Science Dreaming programs nurture that wonder while teaching the discipline of testing ideas and revising conclusions.",
      "Sessions blend storytelling, discussion, and exploratory activities suited to schools and community gatherings.",
      "The program is especially effective at reaching audiences who may not yet see themselves as part of the science movement.",
    ],
    highlights: [
      "Imagination meets method",
      "School and community sessions",
      "Accessible entry to scientific thinking",
    ],
  },
  {
    slug: "school-outreach",
    title: "School Outreach",
    description: "Taking scientific temper into classrooms across Kerala.",
    summary:
      "School outreach brings publications, talks, and activities directly into educational settings.",
    body: [
      "Teachers and volunteers use Sasthra Vedhi materials—including readers, booklets, and discussion guides—to enrich classroom and club activities.",
      "Outreach visits and sustained partnerships help schools build cultures of questioning and evidence-based discussion.",
      "This work connects the movement's publications and youth programs to the everyday life of students.",
    ],
    highlights: [
      "Classroom and club partnerships",
      "Educational publications in use",
      "Volunteer-led sessions",
    ],
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    description: "Public programs that meet people where they live and work.",
    summary:
      "Community outreach extends the science movement beyond institutions into neighborhoods and public spaces.",
    body: [
      "Public meetings, study circles, and local campaigns bring scientific temper to audiences who may never attend a formal lecture.",
      "Community outreach emphasizes respect, clarity, and relevance—connecting global science to local concerns.",
      "These programs often intersect with environmental awareness, public health literacy, and civic education.",
    ],
    highlights: [
      "Public meetings and study circles",
      "Local relevance and accessibility",
      "Links to campaigns and publications",
    ],
  },
  {
    slug: "environment",
    title: "Environmental Initiatives",
    description: "Awareness and action for ecological responsibility.",
    summary:
      "Environmental programs connect ecological science to responsible citizenship and collective action.",
    body: [
      "From coastal awareness to conservation education, environmental initiatives translate scientific understanding into community responsibility.",
      "Materials from the Environmental Awareness Series and related campaign publications support these programs.",
      "Participants learn to evaluate claims, understand local impacts, and act with informed commitment.",
    ],
    highlights: [
      "Coastal and inland environmental focus",
      "Campaign publications and field activities",
      "Community-based awareness",
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}

export function getAllProgramSlugs(): ProgramSlug[] {
  return programs.map((program) => program.slug);
}
