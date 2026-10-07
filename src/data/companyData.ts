import { PillarDetail, ProductShowcase, JourneyStep, Principle } from '../types';

export const COMPANY_INFO = {
  name: 'Future Pulse',
  tagline: 'Building Technology. Solving Real Problems.',
  location: 'Zimbabwe',
  headquarters: 'Harare, Zimbabwe',
  foundedYear: '2026',
  stage: 'Newly Registered · Early Stage Development',
  founder: {
    name: 'Shepherd Mutevedzi',
    title: 'Founder',
    institution: 'National University of Science and Technology (NUST), Zimbabwe',
    phone: '+263 78 262 7990',
    whatsapp: '+263 78 262 7990',
    email: 'shepherdmutevedzi@gmail.com',
    bio: 'Shepherd Mutevedzi is an Electronic Engineering student at the National University of Science and Technology (NUST) in Zimbabwe and technology entrepreneur focused on building software, electronics and technology solutions around real-world problems.',
    focus: 'Electronic Systems, Embedded Architecture & Practical Software Platforms',
    quote:
      'We believe genuine technological progress in Zimbabwe starts by observing real everyday frictions, prototyping without excuses, and building systems resilient enough to make a lasting difference.',
  },
  socialPlaceholders: {
    linkedin: 'https://linkedin.com/company/future-pulse-tech',
    x: 'https://x.com/futurepulsetech',
    instagram: 'https://www.instagram.com/unili.ink',
    tiktok: 'https://www.tiktok.com/@unilinkgd',
    instagramHandle: 'unili.ink',
    tiktokHandle: '@unilinkgd',
  },
};

export const WHAT_WE_BUILD: PillarDetail[] = [
  {
    id: 'software',
    title: 'Software',
    tagline: 'High-utility digital infrastructure',
    description:
      'Digital platforms, web applications and software products designed around real user needs.',
    iconName: 'Code2',
    focusAreas: [
      'Web & mobile applications',
      'Logistics & dispatch logic',
      'API-first modular architectures',
      'Offline-tolerant data sync',
    ],
    engineeringApproach:
      'Building performant, lightweight digital platforms that function reliably across diverse connectivity conditions and device capabilities.',
  },
  {
    id: 'iot-electronics',
    title: 'IoT & Electronics',
    tagline: 'Physical hardware engineered for purpose',
    description:
      'Connected devices, sensors, monitoring systems and smart electronic solutions.',
    iconName: 'Cpu',
    focusAreas: [
      'Microcontroller prototyping',
      'Environmental & utility sensors',
      'Low-power telemetry links',
      'Custom circuit development',
    ],
    engineeringApproach:
      'Bridging physical sensors with digital dashboards to capture granular telemetry, monitor vital resources, and solve localized infrastructure bottlenecks.',
  },
  {
    id: 'automation',
    title: 'Automation',
    tagline: 'Streamlining repetitive processes',
    description:
      'Technology systems that automate processes, improve efficiency and reduce unnecessary manual work.',
    iconName: 'Workflow',
    focusAreas: [
      'Process workflow engines',
      'Automated dispatch & routing',
      'Telemetry-triggered triggers',
      'Smart operational controls',
    ],
    engineeringApproach:
      'Eliminating friction points in physical and digital operations by designing automated logic that increases throughput and reduces human error.',
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technology',
    tagline: 'Forward-looking applied R&D',
    description:
      'Experimental products, prototypes and new technology concepts designed to solve emerging problems.',
    iconName: 'Sparkles',
    focusAreas: [
      'Smart systems prototyping',
      'Applied R&D testbeds',
      'Decentralized sensor networks',
      'Next-generation interfaces',
    ],
    engineeringApproach:
      'Investigating nascent technologies through pragmatic experiments, evaluating viability before integrating them into deployable products.',
  },
];

export const UNILINK_PRODUCT: ProductShowcase = {
  id: 'unilink',
  name: 'UniLink',
  category: 'Software / Logistics Technology',
  tagline: 'YOUR GROCERIES. OUR LINK.',
  slogan: 'Groceries, Delivered. Simple.',
  websiteUrl: 'https://www.unilinkbase.com',
  whatsappSupport: '+263 78 262 7990',
  deliveryPromise: 'Delivery in as little as 45 minutes!',
  description:
    'UniLink is an errand and grocery delivery platform that connects customers with messengers who purchase goods from local shops and deliver them to the customer’s chosen location.',
  image: '/assets/images/unilink_product_mockup_1791396500695.jpg',
  status: 'In Development',
  problemSolved:
    'In university hubs like NUST Main Campus and neighborhood communities across Zimbabwe, acquiring everyday groceries, snacks, and toiletries takes hours due to transit friction. UniLink connects shoppers with local merchants and trusted messengers who deliver in minutes.',
  howItWorks: [
    'Register: Create your account in seconds',
    'Order: Add items, choose payment, shop & delivery type',
    'We Shop: Your dedicated messenger visits your chosen local shop to purchase items',
    'Track: Track your order live until it arrives',
    'Receive: Get your groceries delivered to your door in as little as 45 minutes',
  ],
  stepsDetailed: [
    {
      stepNumber: '01',
      title: 'Register',
      desc: 'Create your account in seconds with seamless mobile authentication.',
    },
    {
      stepNumber: '02',
      title: 'Order',
      desc: 'Add groceries, snacks, drinks, and toiletries. Choose payment, local shop & delivery type.',
    },
    {
      stepNumber: '03',
      title: 'We Shop',
      desc: 'Your dedicated messenger visits your chosen local store to shop for your items.',
    },
    {
      stepNumber: '04',
      title: 'Track',
      desc: 'Follow live messenger transit and milestone updates until the order arrives.',
    },
    {
      stepNumber: '05',
      title: 'Receive',
      desc: 'Enjoy fast delivery directly to your doorstep or campus pickup point.',
    },
  ],
  techStack: [
    'Real-time dispatch & messenger routing',
    'Dynamic catalog sync for local retail shops',
    'Low-bandwidth mobile web architecture',
    'Multi-rail payment orchestration (EcoCash & Cash on Delivery)',
  ],
  paymentMethods: ['EcoCash', 'Cash on Delivery'],
  targetAudiences: [
    'Students (NUST & Tertiary Campuses)',
    'Busy Professionals',
    'Families & Households',
    'Offices & Corporate Teams',
    'Hospitals & Healthcare Staff',
    'Retirement Homes & Care Centers',
    'Anyone, Anywhere in Urban Zones',
  ],
  localStores: [
    'Campus & Student Grocers',
    'Neighborhood Mini-Marts',
    'Local Convenience Shops',
    'Fresh Produce Markets',
  ],
  messengerProgram: {
    title: 'Earn as a Messenger',
    benefits: [
      'Flexible hours matching your schedule',
      'Great competitive earnings per delivery',
      'Be your own boss with local community impact',
    ],
  },
};

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Idea',
    description: 'Identifying a genuine bottleneck or inefficiency in everyday life or industry.',
    milestoneDetail: 'Careful observation of how people and local businesses operate without assumptions.',
  },
  {
    step: '02',
    title: 'Experiment',
    description: 'Testing core assumptions through basic software scripts or hardware mockups.',
    milestoneDetail: 'Quickly separating theoretical hypotheses from what works in real operating environments.',
  },
  {
    step: '03',
    title: 'Prototype',
    description: 'Assembling functional circuit boards, breadboards, and interactive software interfaces.',
    milestoneDetail: 'Turning napkin sketches into tangible working devices and operable code.',
  },
  {
    step: '04',
    title: 'Test',
    description: 'Stress-testing in hands-on conditions, identifying failures, and learning from breakdowns.',
    milestoneDetail: 'Iterative refinement: great engineering advances through diagnosing failures.',
  },
  {
    step: '05',
    title: 'Product',
    description: 'Refining the prototype into a dependable, usable product designed for real users.',
    milestoneDetail: 'Hardening ergonomics, user experience, reliability, and edge-case handling.',
  },
  {
    step: '06',
    title: 'Company',
    description: 'Formalizing the governance, long-term vision, and operational home behind the build.',
    milestoneDetail: 'Registered in 2026: Establishing Future Pulse as the parent engineering foundation.',
  },
  {
    step: '07',
    title: "What's Next",
    description: 'Expanding the ecosystem with continuous R&D across software, IoT, and smart automation.',
    milestoneDetail: 'Disciplined long-term execution originating from Zimbabwe with global standard quality.',
  },
];

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Real Problems',
    description: 'We build around problems that people, businesses and communities actually experience.',
    detail: 'We avoid speculative vanity projects. Every line of code and printed circuit board must resolve an authentic friction point.',
  },
  {
    number: '02',
    title: 'Local Understanding',
    description: 'We believe technology should account for the realities of the markets it serves.',
    detail: 'Effective engineering respects bandwidth constraints, power dynamics, local economic systems, and user behavior.',
  },
  {
    number: '03',
    title: 'Build & Learn',
    description: 'We experiment, test, fail, learn and improve.',
    detail: 'Humility and rapid iteration over dogmatic planning. We believe in building hands-on prototypes rather than talking endlessly.',
  },
  {
    number: '04',
    title: 'Long-Term Thinking',
    description: 'We are building technology with a long-term vision rather than chasing short-term trends.',
    detail: 'Deep engineering foundations take patience, craft, and resilience. We are playing the long game for Zimbabwean and African technology.',
  },
];
