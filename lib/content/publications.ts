import { images } from "@/lib/images";

export type PublicationCategory =
  | "books"
  | "educational"
  | "campaigns"
  | "featured";

export type Publication = {
  slug: string;
  title: string;
  category: PublicationCategory;
  categoryLabel: string;
  description: string;
  author?: string;
  year?: number;
  coverImage?: string;
  purchaseUrl?: string;
  license?: string;
  body: string[];
};

export const publicationsIntro = {
  title: "Publications",
  description:
    "Our celebrated book series on visionary Indian leaders and science-driven nation building — plus campaign booklets and educational readers.",
  seriesBlurb:
    "Explore thought-provoking titles on the need for nuclear energy, economic progress, and the scientific spirit that shaped modern India.",
};

export const categoryMeta: Record<
  PublicationCategory,
  { title: string; description: string; path: string }
> = {
  books: {
    title: "Books",
    description:
      "Visionary Indian Leaders series and science writing from Sasthra Vedhi authors.",
    path: "/publications/books",
  },
  educational: {
    title: "Educational Materials",
    description:
      "Resources for schools, study circles, and young readers across Kerala.",
    path: "/publications/educational",
  },
  campaigns: {
    title: "Campaign Publications",
    description:
      "Booklets and guides supporting public science and awareness campaigns.",
    path: "/publications/campaigns",
  },
  featured: {
    title: "Featured Publications",
    description:
      "Highlighted works from across the Sasthra Vedhi catalogue.",
    path: "/publications/featured",
  },
};

export const publications: Publication[] = [
  {
    slug: "puthiya-vazhikal",
    title: "Puthiya Vazhikal",
    category: "books",
    categoryLabel: "Book",
    description:
      "A thought-provoking volume from the Visionary Indian Leaders series.",
    author: "Shaji Vellalore",
    year: 2025,
    coverImage: images.publications.puthiyaVazhikal,
    purchaseUrl:
      "https://www.amazon.in/Puthiya-Vazhikal-Shaji-Vellalore/dp/B0FDGWZFSM/",
    body: [
      "Part of Sasthra Vedhi's celebrated series on visionary Indian leaders and science-driven nation building.",
      "Available for purchase on Amazon India.",
    ],
  },
  {
    slug: "keralathil-anavanilayam-anivaryamo",
    title: "Keralathil Anavanilayam Anivaryamo",
    category: "books",
    categoryLabel: "Book",
    description:
      "On the need for nuclear energy and Kerala's energy future — by Prof. Dr. Achuthsankar S. Nair.",
    author: "Prof. Dr. Achuthsankar S. Nair",
    year: 2025,
    coverImage: images.publications.keralathilAnavanilayam,
    purchaseUrl:
      "https://www.amazon.in/Keralathil-Anavanilayam-Anivaryamo-Achuthsankar/dp/B0DV1F51PS/",
    body: [
      "A key title in the Visionary Indian Leaders series exploring nuclear energy, economic progress, and the scientific spirit.",
      "Prof. Dr. Achuthsankar S. Nair is State President of Sasthra Vedhi.",
    ],
  },
  {
    slug: "gandhiji-sustainable-science",
    title: "Gandhiji & Sustainable Science",
    category: "books",
    categoryLabel: "E-book",
    description:
      "Gandhian thought and sustainable science — an ebook by Achuthsankar Nair.",
    author: "Achuthsankar Nair",
    year: 2025,
    coverImage: images.publications.gandhijiSustainableScience,
    purchaseUrl:
      "https://www.amazon.in/Gandhiji-Sustainable-Science-Achuthsankar-Nair-ebook/dp/B0F5116R2W/",
    body: [
      "Explores the intersection of Gandhian values and sustainable scientific development.",
      "Available as a Kindle ebook on Amazon India.",
    ],
  },
  {
    slug: "rajiv-gandhi-typewriters-terabytes",
    title: "Rajiv Gandhi: Typewriters to Terabytes",
    category: "books",
    categoryLabel: "E-book",
    description:
      "Technology, modernisation, and the Rajiv Gandhi era in Indian science policy.",
    year: 2025,
    coverImage: images.publications.rajivGandhi,
    purchaseUrl:
      "https://www.amazon.in/Rajiv-Gandhi-Typewriters-Terabytes-Minds-ebook/dp/B0F51CY9WJ/",
    body: [
      "Part of the Visionary Indian Leaders series on science-driven nation building.",
    ],
  },
  {
    slug: "indira-gandhi-stockholm-silent-valley",
    title: "Indira Gandhi: Stockholm to Silent Valley",
    category: "books",
    categoryLabel: "E-book",
    description:
      "Environmental leadership and the scientific spirit from Stockholm to Silent Valley.",
    year: 2025,
    coverImage: images.publications.indiraGandhi,
    purchaseUrl:
      "https://www.amazon.in/Indira-Gandhi-Stockholm-Silent-Valley-ebook/dp/B0F4ZTZ8HH/",
    body: [
      "Traces Indira Gandhi's role in environmental policy and scientific modernisation.",
    ],
  },
  {
    slug: "unnikkuttante-pustakapura",
    title: "Unnikkuttante Pustakapura",
    category: "educational",
    categoryLabel: "Children's Book",
    description: "A children's science reader from Sasthra Vedhi publications.",
    author: "Bibina C B",
    year: 2025,
    coverImage: images.publications.unnikkuttantePustakapura,
    purchaseUrl:
      "https://www.amazon.in/Unnikkuttante-Pustakapura-Bibina-C-B/dp/B0DV5NP3MV/",
    body: [
      "Designed to introduce young readers to the joy of science and reading.",
      "Available on Amazon India.",
    ],
  },
  {
    slug: "veendum-shastra-karyangal",
    title: "Veendum Shastra Karyangal",
    category: "books",
    categoryLabel: "Book",
    description: "Science in action — essays on contemporary scientific issues.",
    author: "Dr. Praveen Sakhalya",
    year: 2025,
    coverImage: images.publications.veendumShastraKaryangal,
    purchaseUrl:
      "https://www.amazon.in/Veendum-Shastra-Karyangal-Praveen-Sakhalya/dp/B0FDGTXMCP/",
    body: [
      "Dr. Praveen Sakhalya is a State Vice President of Sasthra Vedhi.",
      "Available on Amazon India.",
    ],
  },
  {
    slug: "lehari-bheeshani",
    title: "Lehari Bheeshani",
    category: "campaigns",
    categoryLabel: "Campaign Booklet",
    description:
      "A comprehensive anti-drug guide for parents — over 10,000 copies distributed across Kerala.",
    year: 2024,
    coverImage: images.publications.lehariBheeshani,
    license: "Creative Commons BY-NC-ND 4.0",
    body: [
      "Lehari Bheeshani helps parents understand and address drug abuse among youth.",
      "More than 10,000 copies have been distributed via district committees and partner schools including MGM School Varkala and Gayathri Central School Kayamkulam.",
      "Licensed under Creative Commons BY-NC-ND 4.0 for non-commercial sharing.",
    ],
  },
  {
    slug: "school-science-reader",
    title: "School Science Reader",
    category: "educational",
    categoryLabel: "Educational",
    description:
      "Accessible material reprinted and used in schools across the state.",
    year: 2023,
    body: [
      "The School Science Reader supports teachers and volunteers who lead science clubs, camps, and classroom discussions.",
      "Distributed through district committees and school outreach programs.",
    ],
  },
  {
    slug: "environmental-awareness-series",
    title: "Environmental Awareness Series",
    category: "campaigns",
    categoryLabel: "Campaign",
    description:
      "Booklets supporting community environmental action and Environment Day programmes.",
    year: 2024,
    body: [
      "The Environmental Awareness Series connects global climate science to coastal and inland realities in Kerala.",
      "Used during Environment Day celebrations and community outreach across the state.",
    ],
  },
];

export function getPublication(slug: string): Publication | undefined {
  return publications.find((item) => item.slug === slug);
}

export function getPublicationsByCategory(
  category: PublicationCategory,
): Publication[] {
  return publications.filter((item) => item.category === category);
}

export function getAllPublicationSlugs(): string[] {
  return publications.map((item) => item.slug);
}

export function getFeaturedPublications(): Publication[] {
  return publications.filter((item) => item.coverImage);
}
