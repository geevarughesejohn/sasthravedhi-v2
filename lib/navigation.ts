export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  priority?: "flagship";
  children?: NavLink[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Sasthram Munnott",
    href: "/sasthram-munnott",
    priority: "flagship",
    children: [
      { label: "Latest Issue", href: "/sasthram-munnott/latest" },
      { label: "Archive", href: "/sasthram-munnott/archive" },
      { label: "Featured Articles", href: "/sasthram-munnott/featured" },
      { label: "Editorials", href: "/sasthram-munnott/editorials" },
    ],
  },
  {
    label: "Publications",
    href: "/publications",
    children: [
      { label: "Books", href: "/publications/books" },
      { label: "Educational Materials", href: "/publications/educational" },
      { label: "Campaign Publications", href: "/publications/campaigns" },
      { label: "Featured Publications", href: "/publications/featured" },
    ],
  },
  {
    label: "Yuva Sasthra Vedhi",
    href: "/yuva-sasthra-vedhi",
    priority: "flagship",
    children: [
      { label: "About", href: "/yuva-sasthra-vedhi/about" },
      { label: "Activities", href: "/yuva-sasthra-vedhi/activities" },
      { label: "Student Chapters", href: "/yuva-sasthra-vedhi/chapters" },
      {
        label: "Leadership Programs",
        href: "/yuva-sasthra-vedhi/leadership",
      },
      {
        label: "Innovation Challenges",
        href: "/yuva-sasthra-vedhi/challenges",
      },
      { label: "Join Yuva Sasthra Vedhi", href: "/yuva-sasthra-vedhi/join" },
    ],
  },
  {
    label: "Science in Action",
    href: "/science-in-action",
    children: [
      { label: "Science Camps", href: "/science-in-action/science-camps" },
      { label: "Science in 60 seconds", href: "/science-in-action/science-in-60-seconds" },
      {
        label: "Science Dreaming",
        href: "/science-in-action/science-dreaming",
      },
      { label: "School Outreach", href: "/science-in-action/school-outreach" },
      {
        label: "Community Outreach",
        href: "/science-in-action/community-outreach",
      },
      {
        label: "Environmental Initiatives",
        href: "/science-in-action/environment",
      },
    ],
  },
  {
    label: "Talks & Learning",
    href: "/talks-and-learning",
    children: [
      { label: "Wednesday Talks", href: "/talks-and-learning/wednesday-talks" },
      { label: "Video Archive", href: "/talks-and-learning/videos" },
      {
        label: "Science Book Reading Circle",
        href: "/talks-and-learning/reading-circle",
      },
      {
        label: "Learning Resources",
        href: "/talks-and-learning/resources",
      },
    ],
  },
  {
    label: "Engage",
    href: "/engage",
    children: [
      { label: "Policy Positions", href: "/engage/policy" },
      { label: "Resolutions", href: "/engage/resolutions" },
      { label: "Public Statements", href: "/engage/statements" },
      { label: "Campaigns", href: "/engage/campaigns" },
      { label: "Science & Society", href: "/engage/science-and-society" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "History", href: "/about/history" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Milestones & Awards", href: "/about/milestones" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Photo Gallery", href: "/media/gallery" },
      { label: "Videos", href: "/media/videos" },
      { label: "Event Highlights", href: "/media/events" },
      { label: "News Coverage", href: "/media/news" },
    ],
  },
];

export const mobileBottomNav = [
  {
    label: "Sasthram Munnott",
    href: "/sasthram-munnott",
    shortLabel: "Munnott",
  },
  {
    label: "Yuva Sasthra Vedhi",
    href: "/yuva-sasthra-vedhi",
    shortLabel: "YSV",
  },
  { label: "Join", href: "/join-us/membership", shortLabel: "Join" },
] as const;

export const footerNav = {
  read: [
    { label: "Sasthram Munnott", href: "/sasthram-munnott" },
    { label: "Publications", href: "/publications" },
    { label: "Wednesday Talks", href: "/talks-and-learning/wednesday-talks" },
    {
      label: "Reading Circle",
      href: "/talks-and-learning/reading-circle",
    },
  ],
  participate: [
    { label: "Yuva Sasthra Vedhi", href: "/yuva-sasthra-vedhi" },
    { label: "Science in Action", href: "/science-in-action" },
    { label: "Membership", href: "/join-us/membership" },
    { label: "Volunteer", href: "/join-us/volunteer" },
  ],
  organization: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Engage", href: "/engage" },
    { label: "Contact", href: "/contact" },
  ],
  connect: [
    { label: "Media Center", href: "/media" },
    { label: "Support Our Work", href: "/join-us/support" },
    { label: "Partner With Us", href: "/join-us/partner" },
  ],
};

export const joinCta = {
  href: "/join-us/membership",
  munnottLatest: "/sasthram-munnott/latest",
};
