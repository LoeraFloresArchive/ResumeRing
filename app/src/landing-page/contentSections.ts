import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.png';
import avatarPlaceholder from '../client/static/avatar-placeholder.png';
import { routes } from 'wasp/client/router';

export const navigation = [
  // { name: 'Features', href: '#features' },
  // { name: 'Pricing', href: routes.PricingPageRoute.build() },
  // { name: 'Documentation', href: DocsUrl },
  // { name: 'Blog', href: BlogUrl },
];
export const features = [
  {
    name: 'Review resumes',
    description: "Review and add feedback to other people's resumes. ",
    icon: '🤝',
    href: DocsUrl,
  },
  {
    name: 'ResumeRingAi',
    description: 'AI resume reviews via Llama 3.',
    icon: '🤖',
    href: DocsUrl,
  },
  {
    name: 'Leaderboard',
    description: 'See how your resume ranks against others.',
    icon: '🥞',
    href: DocsUrl,
  },
  {
    name: 'Free to use',
    description: 'I make my money from donations.',
    icon: '💸',
    href: DocsUrl,
  },
];
export const testimonials = [
  {
    name: 'Xavier',
    role: 'Founder',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://www.linkedin.com/in/xavierloeraflores/',
    quote: 'Now my resume can be roasted by fellow engineers.',
  },
  {
    name: 'Miguel',
    role: 'IT Analyst @ KLA',
    avatarSrc: avatarPlaceholder,
    socialUrl: 'https://www.linkedin.com/in/miguelg2023/',
    quote: 'Xavier forced me to say this app is good.',
  },
  {
    name: 'Shawn',
    role: 'Data Center Technician @ Zurka Interactive',
    avatarSrc: avatarPlaceholder,
    socialUrl: 'https://www.linkedin.com/in/shawn-taplin-15a14b140/',
    quote: "Dude, I'm not gonna use your app. Stop asking.",
  },
  {
    name: 'Kevin',
    role: 'Material Handler @ Santa Clara Country Library District',
    avatarSrc: avatarPlaceholder,
    socialUrl: 'https://www.linkedin.com/in/kbanh33/',
    quote: "What's the point of this?",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What's the pint of this?",
    answer: 'I wanted to learn how to use Wasp Lang.',
    href: 'https://wasp-lang.dev',
  },
  {
    id: 1,
    question: 'Ok, but why Resume Ring?',
    answer: 'It seemed like fun.',
  },
];
export const footerNavigation = {
  app: [
    // { name: 'Documentation', href: DocsUrl },
    // { name: 'Blog', href: BlogUrl },
    { name: 'About', href: '/about' },
  ],
  company: [
    // { name: 'About', href: '/about' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms of Service', href: '/tos' },
  ],
};
