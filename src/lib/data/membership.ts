export interface PlanOption {
  code: string;
  label: string;
  price: number;
  duration: string;
  isStudent?: boolean;
  isSenior?: boolean;
  description?: string;
}

export interface PlanCategory {
  id: string;
  title: string;
  titleMl: string;
  tagline: string;
  badge?: string;
  highlight?: boolean;
  options: PlanOption[];
  benefits: string[];
}

export const planCategories: PlanCategory[] = [
  {
    id: 'annual',
    title: 'Annual Membership',
    titleMl: 'വാർഷിക അംഗത്വം',
    tagline: 'Ideal for individuals and students starting their journey in science activism.',
    options: [
      {
        code: 'F',
        label: 'General Individual',
        price: 250,
        duration: '1 Year',
        isStudent: false,
        description: 'Standard 1-year individual active membership'
      },
      {
        code: 'G',
        label: 'Student',
        price: 200,
        duration: '1 Year',
        isStudent: true,
        description: 'Subsidized rate for school, college & university students'
      }
    ],
    benefits: [
      'Full digital access to monthly Sasthram Munnott Magazine',
      'Participation in district seminars, workshops & public science discussions',
      'Eligibility to join YuvaSasthraVedhi (Youth Wing, up to age 40)',
      'For Students: Access to youth science camps, quizzes & mentor network'
    ]
  },
  {
    id: 'three-year',
    title: '3-Year Membership',
    titleMl: 'ത്രിവത്സര അംഗത്വം',
    tagline: 'Best value multi-year plan with uninterrupted benefits and savings.',
    badge: 'Most Popular',
    highlight: true,
    options: [
      {
        code: 'E',
        label: '3-Year Term',
        price: 600,
        duration: '3 Years',
        isStudent: false,
        description: 'Save ₹150 compared to yearly renewals'
      }
    ],
    benefits: [
      'Uninterrupted 3-year digital access to Sasthram Munnott Magazine (36 monthly issues)',
      'Save ₹150 with a single convenient registration',
      'Priority registration for state conferences and science residential camps',
      'Special concessions on select books and publications brought out by Sasthra Vedhi, subject to applicable releases',
      'Continuous active membership credentials and recognition'
    ]
  },
  {
    id: 'life',
    title: 'Life Membership',
    titleMl: 'ആജീവനാന്ത അംഗത്വം',
    tagline: 'Permanent patron membership supporting Kerala’s progressive science movement.',
    badge: 'Patron',
    options: [
      {
        code: 'D',
        label: 'Regular Patron',
        price: 6000,
        duration: '15 Years',
        isSenior: false,
        description: 'Long-term active commitment as a recognized science patron'
      },
      {
        code: 'C',
        label: 'Senior Citizens (60+)',
        price: 5000,
        duration: 'Lifetime',
        isSenior: true,
        description: 'Special subsidized lifetime tier for elders aged 60 and above'
      }
    ],
    benefits: [
      'Permanent honorary life membership in Sasthra Vedhi',
      'Lifetime digital access to Sasthram Munnott Magazine',
      'Official Life Member Certificate and citation',
      'Special concessions on select books and publications published by Sasthra Vedhi, subject to applicable releases',
      'Active participation and recognition in state-level science initiatives'
    ]
  }
];

export const membershipFaqs = [
  {
    question: 'How do I pay the membership fee?',
    answer: 'Once you select your plan and proceed, scan the official UPI QR code with any UPI app (Google Pay, PhonePe, Paytm, BHIM) or transfer to sastravedi8906@dlb. Enter the 12-digit UPI Transaction ID (UTR) in the registration form.'
  },
  {
    question: 'What additional details are required for Student membership?',
    answer: 'Student applicants are asked for their School/College/University name, Course/Class, and optionally their Student ID or Roll Number to avail the subsidized ₹200 fee.'
  },
  {
    question: 'How does Senior Citizen life membership work?',
    answer: 'Senior citizens aged 60+ can avail Life Membership at a special subsidized fee of ₹5,000 (regular Life Membership is ₹6,000) with all lifetime membership benefits included.'
  },
  {
    question: 'How will I receive the Sasthram Munnott magazine?',
    answer: 'Sasthram Munnott is published digitally. Members receive direct digital access to download and read monthly issues online and via WhatsApp/Email notifications.'
  }
];
