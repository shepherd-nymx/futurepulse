import { PillarDetail, ProductShowcase, JourneyStep, Principle } from '../types';

export const COMPANY_INFO = {
  name: 'Future Pulse',
  legalName: 'Future Pulse Investments',
  tagline: 'Building & Maintaining Technology. Solving Real Problems.',
  location: 'Zimbabwe',
  headquarters: 'Harare, Zimbabwe',
  foundedYear: '2026',
  stage: 'Newly Registered · Early Stage Development',
  servicesSummary:
    'We develop and maintain bespoke software platforms, iOS & Android mobile apps, online AI agents, and connected IoT systems.',
  logo: '/future-pulse-logo.png',
  symbol: '/future-pulse-symbol.png',
  founder: {
    name: 'Shepherd Mutevedzi',
    title: 'Founder',
    institution: 'National University of Science and Technology (NUST), Zimbabwe',
    phone: '+263 78 262 7990',
    whatsapp: '+263 78 262 7990',
    email: 'unilinkbase@gmail.com',
    bio: 'Shepherd Mutevedzi is an Electronic Engineering student at the National University of Science and Technology (NUST) in Zimbabwe and technology entrepreneur focused on developing and maintaining software, mobile applications, online AI agents, and electronic engineering solutions around real-world problems.',
    focus: 'Practical Software, Mobile Apps, Online AI Agents & Embedded Systems',
    quote:
      'We believe genuine technological progress in Zimbabwe starts by observing real everyday frictions, prototyping without excuses, and building and maintaining systems resilient enough to make a lasting difference.',
  },
  compliance: {
    legalEntityName: 'Future Pulse Investments',
    registrationNumberPlaceholder: '[Company Registration Number: Pending Official Registrar Filing / Placeholder]',
    taxIdentificationPlaceholder: '[TIN / BP Number: Pending Registration / In Process]',
    registeredOfficePlaceholder: '[Physical Registered Address: Harare, Zimbabwe / Street Address Pending Formal Lease Documentation]',
    primaryPhone: '+263 78 262 7990',
    whatsappNumber: '+263 78 262 7990',
    officialEmail: 'unilinkbase@gmail.com',
    legalEmail: 'unilinkbase@gmail.com',
    privacyEmail: 'unilinkbase@gmail.com',
    dpoDesignationPlaceholder: '[Data Protection Officer: Shepherd Mutevedzi (Contact: unilinkbase@gmail.com) / Formal Regulatory Notification Pending POTRAZ Guidelines]',
    regulatoryAuthority: 'Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ)',
    consumerCommission: 'Consumer Protection Commission of Zimbabwe (CPC)',
    applicableLaws: [
      'Cyber and Data Protection Act [Chapter 12:07] (Act No. 5 of 2021)',
      'Consumer Protection Act [Chapter 14:14] (Act No. 5 of 2019)',
      'Postal and Telecommunications Act [Chapter 12:05]',
      'Companies and Other Business Entities Act [Chapter 24:31]',
    ],
  },
  socialPlaceholders: {
    linkedin: 'https://linkedin.com/company/future-pulse-tech',
    x: 'https://x.com/futurepulsetech',
    instagram: 'https://www.instagram.com/unili.nk',
    tiktok: 'https://www.tiktok.com/@unilinkgd',
    instagramHandle: 'unili.nk',
    tiktokHandle: '@unilinkgd',
  },
};

export const WHAT_WE_BUILD: PillarDetail[] = [
  {
    id: 'software',
    title: 'Software Development & Maintenance',
    tagline: 'Resilient digital platforms & managed infrastructure',
    category: 'Software',
    description:
      'We develop and maintain performant web applications, custom enterprise platforms, high-throughput APIs, and mission-critical software systems tailored to client and market needs.',
    iconName: 'Code2',
    focusAreas: [
      'Full-stack web applications & portals',
      'Enterprise workflow & logistics systems',
      'API-first cloud architectures',
      'Continuous bug fixes & code refactoring',
      'Security patches & database optimization',
    ],
    engineeringApproach:
      'Designing clean, maintainable modular architectures from day one. We take complete responsibility for the ongoing health of the codebase — monitoring uptime, updating dependencies, and keeping systems lightning-fast.',
    maintenanceScope: [
      '24/7 uptime & health metric monitoring',
      'Zero-downtime security patch deployments',
      'Database indexing & query performance tuning',
      'Third-party API & dependency compatibility updates',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS / Cloud'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    tagline: 'Native & cross-platform iOS & Android apps',
    category: 'Mobile Apps',
    description:
      'We engineer intuitive, high-speed mobile applications for iOS and Android, optimized for low bandwidth, offline usability, seamless mobile money payments, and ongoing OS updates.',
    iconName: 'Smartphone',
    focusAreas: [
      'iOS & Android native / cross-platform apps',
      'Offline-tolerant data synchronization',
      'Mobile payment integration (EcoCash & cards)',
      'Real-time GPS dispatch & push notifications',
      'Ongoing OS upgrade & app store maintenance',
    ],
    engineeringApproach:
      'Building ultra-smooth user experiences that function reliably across diverse hardware specifications and variable network connectivity, backed by proactive app store lifecycle management.',
    maintenanceScope: [
      'Annual iOS & Android OS version compatibility updates',
      'App Store & Google Play compliance maintenance',
      'Crash analytics triage & rapid patch releases',
      'Low-bandwidth & battery consumption optimization',
    ],
    technologies: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'Firebase', 'WebSockets'],
  },
  {
    id: 'ai-agents',
    title: 'Online Autonomous AI Agents',
    tagline: 'Intelligent online agents & autonomous cloud workflows',
    category: 'AI Agents',
    description:
      'We develop and maintain autonomous AI agents that run online, executing web workflows, intelligent data pipelines, automated web research, and retrieval-augmented reasoning systems (RAG) reliably in production.',
    iconName: 'Bot',
    focusAreas: [
      'Autonomous multi-agent online orchestration',
      'Web-based workflows & online research agents',
      'Enterprise knowledge retrieval & RAG pipelines',
      'Automated online data extraction & decision agents',
      'Continuous prompt tuning & accuracy evaluations',
    ],
    engineeringApproach:
      'Grounding large language models with real structured data, custom tool execution, and deterministic guardrails so online AI agents run reliably in production without hallucinations or runaway compute costs.',
    maintenanceScope: [
      'Continuous accuracy benchmarking & hallucination auditing',
      'Vector database embedding refreshes & index maintenance',
      'API quota, rate-limit & cost-efficiency governance',
      'Safety policy & guardrail boundary calibrations',
    ],
    technologies: ['Gemini API', 'LangChain', 'Vector DBs', 'Python', 'FastAPI', 'Agentic Workflows'],
  },
  {
    id: 'software-maintenance',
    title: 'Continuous System Maintenance',
    tagline: 'Long-term operational stability & SLA support',
    category: 'Maintenance',
    description:
      'Software is a living system. We provide dedicated ongoing maintenance, proactive server monitoring, vulnerability remediation, legacy code modernization, and guaranteed technical support.',
    iconName: 'RefreshCw',
    focusAreas: [
      'Proactive system health & uptime monitoring',
      'Emergency bug fixing & incident response',
      'Security audits & compliance maintenance',
      'Legacy software refactoring & modernization',
      'SLA-backed technical support contracts',
    ],
    engineeringApproach:
      'Preventing downtime before it happens through proactive telemetry, regular automated testing, clean version control, and dependable human engineering support.',
    maintenanceScope: [
      'Guaranteed rapid turnaround for critical defects',
      'Scheduled monthly system health & performance reports',
      'Automated backup redundancy & disaster recovery testing',
      'Continuous cloud cost reduction audits',
    ],
    technologies: ['CI/CD Pipelines', 'Cloud Monitoring', 'Security Hardening', 'Automated Testing', 'Git DevOps'],
  },
  {
    id: 'iot-electronics',
    title: 'IoT & Electronics',
    tagline: 'Physical hardware engineered for purpose',
    category: 'IoT & Hardware',
    description:
      'Connected devices, telemetry sensors, monitoring hardware, and smart electronic solutions bridging the physical world with cloud and mobile software.',
    iconName: 'Cpu',
    focusAreas: [
      'Microcontroller prototyping (ESP32, STM32)',
      'Environmental & utility telemetry sensors',
      'Low-power wireless & cellular data links',
      'Custom circuit development & PCB layout',
      'Over-the-air (OTA) firmware maintenance',
    ],
    engineeringApproach:
      'Bridging physical sensors with digital dashboards and mobile apps to capture granular telemetry, monitor vital resources, and solve localized infrastructure bottlenecks.',
    maintenanceScope: [
      'Over-the-air (OTA) firmware upgrade distribution',
      'Sensor calibration & telemetry drift audits',
      'Hardware battery lifecycle & power optimization',
    ],
    technologies: ['ESP32', 'STM32', 'C/C++', 'MQTT', 'Telemetry Gateways', 'PCB Design'],
  },
  {
    id: 'automation',
    title: 'Operational Automation',
    tagline: 'Streamlining repetitive workflows & operations',
    category: 'Automation',
    description:
      'Technology systems that automate business workflows, eliminate manual data entry, streamline logistics, and improve operational throughput.',
    iconName: 'Workflow',
    focusAreas: [
      'Process workflow engines & triggers',
      'Automated dispatch & messenger routing',
      'Multi-system data integration pipelines',
      'Operational alerting & automated notification pipelines',
    ],
    engineeringApproach:
      'Eliminating friction points in physical and digital operations by designing automated logic that increases throughput and reduces human error.',
    maintenanceScope: [
      'Workflow trigger health monitoring',
      'Edge-case error handling and retry mechanisms',
      'Integration endpoint synchronization',
    ],
    technologies: ['Event-Driven Queues', 'Webhooks', 'Serverless Functions', 'Cron Automation'],
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
