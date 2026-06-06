export type EngageType =
  | "policy"
  | "resolution"
  | "statement"
  | "campaign"
  | "science-society";

export type EngageDocument = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  type: EngageType;
};

export const engageIntro = {
  title: "Engage",
  description:
    "Policy positions, resolutions, public statements, and campaigns that reflect Sasthra Vedhi's voice in civic and scientific discourse.",
};

export const engageSections: Record<
  EngageType,
  { title: string; description: string; path: string }
> = {
  policy: {
    title: "Policy Positions",
    description:
      "Organized views on public policy issues where scientific evidence and rational inquiry matter.",
    path: "/engage/policy",
  },
  resolution: {
    title: "Resolutions",
    description: "Formal resolutions adopted by the state committee and organizational bodies.",
    path: "/engage/resolutions",
  },
  statement: {
    title: "Public Statements",
    description:
      "Public statements on issues of science, society, environment, and responsible citizenship.",
    path: "/engage/statements",
  },
  campaign: {
    title: "Campaigns",
    description:
      "Active and past public science campaigns supported by Sasthra Vedhi.",
    path: "/engage/campaigns",
  },
  "science-society": {
    title: "Science & Society",
    description:
      "Essays and documents exploring the relationship between science and public life.",
    path: "/engage/science-and-society",
  },
};

export const engageDocuments: EngageDocument[] = [
  {
    slug: "asha-workers-strike",
    title: "ASHA Workers Strike",
    date: "March 2025",
    type: "resolution",
    excerpt:
      "Asha workers represent an important pillar of Kerala's achievements in the health sector.",
    body: [
      "Sasthra Vedhi resolves that the fair demands of ASHA workers should be considered favorably and urgently.",
      "ASHA workers are a vital part of Kerala's public health achievements and deserve equitable treatment.",
    ],
  },
  {
    slug: "deep-sea-excavation",
    title: "Deep Sea Excavation",
    date: "March 2025",
    type: "resolution",
    excerpt:
      "Deep-sea excavation for 725 million tonnes of construction-grade sand along Kerala's coast is highly detrimental.",
    body: [
      "The proposed excavation in five zones along Kerala's coast is highly detrimental to the environment and society.",
      "Sasthra Vedhi calls for this project to be called off in favour of sustainable alternatives.",
    ],
  },
  {
    slug: "light-pollution",
    title: "Light Pollution",
    date: "March 2025",
    type: "resolution",
    excerpt:
      "Legislation by local self-governments is required to manage light pollution from unscientific lighting.",
    body: [
      "Unscientific use of lighting contributes to light pollution affecting health, ecology, and astronomy.",
      "Local self-governments should enact legislation to manage and regulate outdoor lighting responsibly.",
    ],
  },
  {
    slug: "human-animal-conflict",
    title: "Human–Animal Conflict",
    date: "January 2025",
    type: "resolution",
    excerpt:
      "Human–animal conflict should be addressed using new-generation technologies and proven global models.",
    body: [
      "Escalating human–animal conflict requires evidence-based, technology-assisted solutions.",
      "Sasthra Vedhi advocates adapting successful models from around the world while respecting local ecology.",
    ],
  },
  {
    slug: "nuclear-energy-kerala",
    title: "Nuclear Energy in Kerala",
    date: "October 2024",
    type: "resolution",
    excerpt:
      "A nuclear power station in Kerala is not a necessity at present.",
    body: [
      "Solar energy coupled with pumped storage projects can meet Kerala's power needs.",
      "Sasthra Vedhi holds that nuclear power is not necessary for Kerala at the present time.",
    ],
  },
  {
    slug: "right-to-disconnect",
    title: "Right to Disconnect",
    date: "October 2024",
    type: "resolution",
    excerpt:
      "Right-to-disconnect legislation should prevent work pressure from spilling into personal time.",
    body: [
      "Sasthra Vedhi supports legislation to protect workers from after-hours work demands.",
      "A legal right to disconnect strengthens work-life balance and mental health.",
    ],
  },
  {
    slug: "misinformation-public-statement",
    title: "Statement on Misinformation and Public Discourse",
    date: "2024",
    type: "statement",
    excerpt:
      "Misinformation threatens public health, democracy, and social trust.",
    body: [
      "Sasthra Vedhi calls on citizens, educators, and media to prioritize verification, source transparency, and corrective dialogue.",
      "Popular science communication is a necessary response to misinformation—not optional, but essential civic work.",
    ],
  },
  {
    slug: "public-health-literacy-campaign",
    title: "Lehari Bheeshani Anti-Drug Campaign",
    date: "2024",
    type: "campaign",
    excerpt:
      "Over 10,000 copies of a comprehensive anti-drug guide for parents distributed under Creative Commons.",
    body: [
      "Lehari Bheeshani is a campaign booklet helping parents understand and address drug abuse among youth.",
      "More than 10,000 copies have been distributed across Kerala.",
    ],
  },
  {
    slug: "environmental-awareness-campaign",
    title: "Environmental Awareness Campaign",
    date: "2024",
    type: "campaign",
    excerpt:
      "Statewide awareness activities linking ecology to everyday citizenship.",
    body: [
      "The campaign combined publications, public meetings, and youth activities to promote environmental responsibility.",
      "Materials from the Environmental Awareness Series were used in schools and community outreach.",
    ],
  },
  {
    slug: "science-democracy-essay",
    title: "Science and Democracy",
    date: "2024",
    type: "science-society",
    excerpt:
      "Democratic societies depend on citizens who can evaluate evidence and participate thoughtfully.",
    body: [
      "Science and democracy share a foundation: the willingness to question, debate, and revise conclusions in light of evidence.",
      "When scientific temper weakens, public discourse becomes vulnerable to manipulation. Strengthening one strengthens the other.",
    ],
  },
];

export function getEngageDocument(slug: string): EngageDocument | undefined {
  return engageDocuments.find((doc) => doc.slug === slug);
}

export function getEngageDocumentsByType(type: EngageType): EngageDocument[] {
  return engageDocuments.filter((doc) => doc.type === type);
}

export function getAllEngageDocumentSlugs(): string[] {
  return engageDocuments.map((doc) => doc.slug);
}
