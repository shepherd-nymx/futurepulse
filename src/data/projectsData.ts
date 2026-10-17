/**
 * Future Pulse Investments — Projects Portfolio Data
 *
 * HOW TO ADD OR EDIT PROJECTS:
 * 1. Duplicate one of the project objects below.
 * 2. Set category to: 'web' | 'mobile' | 'software'.
 * 3. Set status to: 'Live Product' | 'Active Prototype' | 'In Development' | 'Ready to Configure'.
 * 4. Add valid live URLs (external links open in a new tab).
 */

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'software';

export type ProjectStatus =
  | 'Live Product'
  | 'Active Prototype'
  | 'In Development'
  | 'Ready to Configure';

export interface ProjectItem {
  id: string;
  name: string;
  category: 'web' | 'mobile' | 'software';
  categoryLabel: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  thumbnail: string;
  technologies: string[];
  liveUrl?: string;
  linkText?: string;
  isExternal?: boolean;
  isPlaceholder?: boolean;
  featured?: boolean;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects', count: 6 },
  { id: 'web', label: 'Websites & Web Apps', count: 2 },
  { id: 'mobile', label: 'Mobile Applications', count: 2 },
  { id: 'software', label: 'Software & Digital Solutions', count: 2 },
] as const;

export const PROJECTS_LIST: ProjectItem[] = [
  // =========================================================================
  // 1. UniLink — Errand and Delivery Platform (Live Product)
  // =========================================================================
  {
    id: 'unilink',
    name: 'UniLink',
    category: 'software',
    categoryLabel: 'Software & Digital Solutions',
    tagline: 'On-demand errand dispatch & campus delivery platform',
    description:
      'Operating logistics and errand dispatch platform tailored for Zimbabwe. Connects university students, busy professionals, and households with verified errand runners for fast grocery procurement, pharmacy pickups, food delivery, and localized errand services.',
    status: 'Live Product',
    thumbnail: '/assets/images/unilink_product_mockup_1791396500695.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'WhatsApp Business API',
      'Cloud Infrastructure',
      'Mobile Money Rails',
    ],
    liveUrl: 'https://www.unilinkbase.com',
    linkText: 'Visit Live Platform (unilinkbase.com)',
    isExternal: true,
    featured: true,
    highlights: [
      'Active local errand runner dispatch network in Zimbabwe',
      'Integrated WhatsApp messenger handoff for immediate order routing',
      'Supports EcoCash, InnBucks, and cash-on-delivery settlements',
      'Serving university campuses and surrounding urban hubs',
    ],
    metrics: [
      { label: 'Status', value: 'Live' },
      { label: 'Market', value: 'Zimbabwe' },
      { label: 'Channel', value: 'Web & WhatsApp' },
    ],
  },

  // =========================================================================
  // 2. UniStay — Student Accommodation Mobile Application (In Development)
  // =========================================================================
  {
    id: 'unistay',
    name: 'UniStay',
    category: 'mobile',
    categoryLabel: 'Mobile Applications',
    tagline: 'Student housing discovery & verified campus accommodation app',
    description:
      'Mobile application engineered to solve the persistent student housing shortage around Zimbabwean universities (such as NUST, UZ, MSU, and CUT). Empowers tertiary students to discover verified off-campus boarding rooms, compare amenities, check pricing in USD, and communicate directly with verified property managers.',
    status: 'In Development',
    thumbnail: '/assets/images/unistay_mobile_app_1792270788693.jpg',
    technologies: [
      'React Native',
      'TypeScript',
      'Firebase Cloud Firestore',
      'Geolocation & Maps API',
      'Cloud Storage',
    ],
    liveUrl: '#unistay-preview',
    linkText: 'View Project Details & Blueprint',
    isExternal: false,
    featured: true,
    highlights: [
      'Verified landlord listings with authenticated room photo audits',
      'Proximity radius mapping matching walking distance to university gates',
      'In-app student-to-landlord inquiries without middleman exploitation',
      'Designed for low-bandwidth resilience on mobile networks',
    ],
    metrics: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Stage', value: 'In Development' },
      { label: 'Focus', value: 'Student Housing' },
    ],
  },

  // =========================================================================
  // 3. Future Pulse Investments — Corporate Website (Live Product)
  // =========================================================================
  {
    id: 'future-pulse-corporate',
    name: 'Future Pulse Investments',
    category: 'web',
    categoryLabel: 'Websites & Web Apps',
    tagline: 'Corporate platform, engineering catalog & compliance center',
    description:
      'Official digital home and engineering portal for Future Pulse Investments. Features an upfront USD services and pricing catalog, interactive quotation generator, instant WhatsApp and email inquiry dispatch, and an extensive legal compliance suite aligned with Zimbabwe’s Cyber and Data Protection Act.',
    status: 'Live Product',
    thumbnail: '/assets/images/future_pulse_web_platform_1792270789589.jpg',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Cloudflare Pages',
      'Motion',
    ],
    liveUrl: '#home',
    linkText: 'Explore Corporate Site',
    isExternal: false,
    featured: true,
    highlights: [
      'Transparent USD pricing tiers across web, mobile, SEO, and IoT',
      'Dual WhatsApp and email inquiry handoff directly to founder',
      'PIN-protected admin rate calculator for formal proposal generation',
      'Zimbabwean Cyber & Data Protection Act [Chapter 12:07] compliance',
    ],
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Hosting', value: 'Cloudflare Pages' },
      { label: 'Design', value: 'Dark Tech Glass' },
    ],
  },

  // =========================================================================
  // 4. Placeholders for other completed projects to populate later
  // =========================================================================
  {
    id: 'placeholder-client-web',
    name: '[Client Web Platform Placeholder]',
    category: 'web',
    categoryLabel: 'Websites & Web Apps',
    tagline: 'Custom business website / client portal (Ready to configure)',
    description:
      'Reserved portfolio slot for your completed client website, corporate portal, or eCommerce store. Edit this entry in src/data/projectsData.ts with your client’s name, screenshot, live domain, and technology stack.',
    status: 'Ready to Configure',
    thumbnail: '/assets/images/future_pulse_web_platform_1792270789589.jpg',
    technologies: [
      'React / Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'REST APIs',
    ],
    liveUrl: 'https://example.com/client-website',
    linkText: 'Configure Live Website URL',
    isExternal: true,
    isPlaceholder: true,
    highlights: [
      'Easily editable in src/data/projectsData.ts',
      'Replace thumbnail with your client website screenshot',
      'Update technologies and customer business outcomes',
    ],
  },
  {
    id: 'placeholder-client-mobile',
    name: '[Client Mobile App Placeholder]',
    category: 'mobile',
    categoryLabel: 'Mobile Applications',
    tagline: 'Cross-platform iOS & Android mobile application (Ready to configure)',
    description:
      'Reserved portfolio slot for a native or cross-platform mobile application. Update with your app title, screenshot, Google Play Store / Apple App Store link, and architecture highlights.',
    status: 'Ready to Configure',
    thumbnail: '/assets/images/unistay_mobile_app_1792270788693.jpg',
    technologies: [
      'Flutter / React Native',
      'iOS & Android',
      'Push Notifications',
      'Offline Caching',
    ],
    liveUrl: 'https://play.google.com/store/apps',
    linkText: 'Configure App Store URL',
    isExternal: true,
    isPlaceholder: true,
    highlights: [
      'Easily editable in src/data/projectsData.ts',
      'Ready for Google Play and Apple App Store links',
      'Set status to "Live Product" or "Active Prototype"',
    ],
  },
  {
    id: 'placeholder-client-software',
    name: '[IoT & Cloud Solution Placeholder]',
    category: 'software',
    categoryLabel: 'Software & Digital Solutions',
    tagline: 'Custom IoT telemetry, embedded system, or automation pipeline',
    description:
      'Reserved portfolio slot for connected IoT hardware prototypes, telemetry sensor networks, automated cloud workflows, or online AI agents built by Future Pulse.',
    status: 'Ready to Configure',
    thumbnail: '/assets/images/software_solution_placeholder_1792270788454.jpg',
    technologies: [
      'ESP32 / MicroPython',
      'MQTT / WebSockets',
      'Cloud Dashboards',
      'Embedded Hardware',
    ],
    liveUrl: 'https://example.com/system-dashboard',
    linkText: 'Configure System URL',
    isExternal: true,
    isPlaceholder: true,
    highlights: [
      'Easily editable in src/data/projectsData.ts',
      'Suitable for physical electronics or cloud workflow engines',
      'Upload schematic or hardware prototype photo to thumbnail',
    ],
  },
];
