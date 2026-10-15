import { PricingItem } from '../types';

export const PRICING_CATEGORIES = [
  { id: 'all', label: 'All Services', count: 21 },
  { id: 'web', label: 'Website Development', count: 4 },
  { id: 'mobile', label: 'Mobile App Development', count: 5 },
  { id: 'seo', label: 'SEO Services', count: 3 },
  { id: 'addons', label: 'Additional Digital Services', count: 8 },
  { id: 'iot', label: 'IoT & Electronics', count: 1 },
] as const;

export const SERVICES_PRICING_ITEMS: PricingItem[] = [
  // ==========================================
  // 1. WEBSITE DEVELOPMENT
  // ==========================================
  {
    id: 'web-starter',
    category: 'web',
    categoryLabel: 'Website Development',
    title: 'Starter Website',
    subtitle: 'Up to 3 pages',
    startingPrice: 150,
    priceDisplay: '$150+',
    billingCycle: 'one-time',
    description:
      'Ideal for small ventures, single practitioners, portfolios, and startups needing a sharp, modern online presence.',
    highlights: [
      'Up to 3 fully responsive pages (e.g. Home, About, Contact)',
      'Mobile-first layout optimized for speed & touch devices',
      'Clean contact form with direct WhatsApp/email routing',
      'Fast loading speeds & modern visual typography',
      'Initial deployment & DNS configuration assistance',
    ],
    scopeNote: 'Domain registration & cloud hosting subscriptions billed separately.',
  },
  {
    id: 'web-business',
    category: 'web',
    categoryLabel: 'Website Development',
    title: 'Business Website',
    subtitle: 'Up to 6 pages',
    startingPrice: 300,
    priceDisplay: '$300+',
    billingCycle: 'one-time',
    description:
      'Comprehensive digital front for growing companies and service firms wanting to present their brand and offerings with authority.',
    highlights: [
      'Up to 6 custom-designed responsive pages',
      'Detailed service showcases & interactive portfolio/catalogs',
      'Lead generation forms with WhatsApp & email notifications',
      'Basic on-page SEO metadata & social share previews (OpenGraph)',
      'Interactive location maps and direct social links',
    ],
    isPopular: true,
    badge: 'Popular for Businesses',
    scopeNote: 'Includes content upload for up to 6 structured sections.',
  },
  {
    id: 'web-professional',
    category: 'web',
    categoryLabel: 'Website Development',
    title: 'Professional Website',
    subtitle: 'Up to 10 pages',
    startingPrice: 600,
    priceDisplay: '$600+',
    billingCycle: 'one-time',
    description:
      'Engineered for established enterprises, institutions, and organizations requiring extensive structure, branding depth, and client portals.',
    highlights: [
      'Up to 10 custom responsive pages and templates',
      'Enhanced interactive UI components & dynamic tabs',
      'Search engine indexing readiness and XML sitemap setup',
      'Cross-browser optimization & performance audit',
      'Multi-channel contact integration and inquiry management',
    ],
    scopeNote: 'Full architecture review and responsive testing across all device viewports.',
  },
  {
    id: 'web-custom-apps',
    category: 'web',
    categoryLabel: 'Website Development',
    title: 'Custom Web Applications',
    subtitle: 'Full-stack bespoke platforms',
    startingPrice: 800,
    priceDisplay: '$800+',
    billingCycle: 'one-time',
    description:
      'Tailor-made software platforms, custom client portals, administrative dashboards, booking systems, or automated internal tools.',
    highlights: [
      'Bespoke React/TypeScript frontend with modern UX flows',
      'Secure backend APIs, role-based authentication & database schemas',
      'Custom workflows, analytics dashboards & data reporting',
      'Third-party REST API integrations (messaging, billing, webhooks)',
      'Thorough testing, error handling & deployment automation',
    ],
    scopeNote: 'Detailed technical specification agreed upon prior to project milestone kick-off.',
  },

  // ==========================================
  // 2. MOBILE APP DEVELOPMENT
  // ==========================================
  {
    id: 'mobile-prototype',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    title: 'Simple App Prototype',
    subtitle: 'Interactive MVP & concept validation',
    startingPrice: 500,
    priceDisplay: '$500+',
    billingCycle: 'one-time',
    description:
      'Working interactive prototype designed to test user flows, pitch to investors, or validate a digital product concept with real users.',
    highlights: [
      'Core user flows & primary interactive user journeys',
      'Clean mobile UI aligned with modern iOS & Android ergonomics',
      'Sample data simulation and working transitions',
      'Ideal for investor demonstrations and user-testing pilots',
      'Exportable test build or browser-preview PWA package',
    ],
    scopeNote: 'Focuses on core functionality and user validation before full production scaling.',
  },
  {
    id: 'mobile-business',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    title: 'Business Mobile App',
    subtitle: 'Production mobile solution for single platform',
    startingPrice: 1200,
    priceDisplay: '$1,200+',
    billingCycle: 'one-time',
    description:
      'Polished mobile app built for customer engagement, order tracking, loyalty, or internal field operations for Android or iOS.',
    highlights: [
      'Native-feel performance & touch-optimized mobile navigation',
      'User authentication, profile management & push alerts',
      'Database synchronization and secure cloud API integration',
      'Offline caching for resilient performance on volatile connections',
      'Comprehensive error handling and crash protection',
    ],
    scopeNote: 'Targeted for Android or iOS deployment; developer account fees charged by stores.',
  },
  {
    id: 'mobile-cross-platform',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    title: 'Cross-Platform Android & iOS App',
    subtitle: 'Unified codebase for both major stores',
    startingPrice: 1500,
    priceDisplay: '$1,500+',
    billingCycle: 'one-time',
    description:
      'Engineered to run seamlessly on both Android smartphones and Apple iOS devices from a synchronized, high-performance codebase.',
    highlights: [
      'Simultaneous dual deployment for Google Play & Apple App Store',
      'Single maintainable codebase saving long-term maintenance costs',
      'Hardware feature access (Camera, Geolocation, Storage)',
      'Optimized UI themes matching iOS Human Interface & Android Material',
      'End-to-end device testing across varied screen dimensions',
    ],
    isPopular: true,
    badge: 'Recommended for Maximum Reach',
    scopeNote: 'Store developer accounts ($25 one-off for Google, $99/year for Apple) held by client.',
  },
  {
    id: 'mobile-advanced',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    title: 'Advanced Mobile Applications',
    subtitle: 'Complex architectures, real-time & offline sync',
    startingPrice: 2500,
    priceDisplay: '$2,500+',
    billingCycle: 'one-time',
    description:
      'Heavy-duty mobile ecosystems with real-time tracking, live chat/dispatch, payment processing, background services, and complex state.',
    highlights: [
      'Real-time data streaming & instant push notifications',
      'Complex role-based access (drivers, customers, dispatchers, admins)',
      'Integrated payment gateways and digital wallet handling',
      'Encrypted local storage and background synchronizers',
      'High-throughput backend architecture with automated backup',
    ],
    scopeNote: 'Includes architecture blueprint, staging testing, and production launch monitoring.',
  },
  {
    id: 'mobile-custom',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    title: 'Custom Mobile Applications',
    subtitle: 'Individually quoted to your specification',
    startingPrice: null,
    priceDisplay: 'Individually Quoted',
    billingCycle: 'custom',
    description:
      'Unique mobile concepts, hardware-paired apps (BLE/sensors), specialized logistics networks, or enterprise-wide field platforms.',
    highlights: [
      'Tailored discovery phase to map business goals and device constraints',
      'Architectural blueprint and milestone-based quotation',
      'Custom hardware peripheral integration (Bluetooth, NFC, QR)',
      'Dedicated staging environments and custom SLA support',
      'Full source-code delivery upon milestone completions',
    ],
    scopeNote: 'Quotation provided after initial technical requirements consultation.',
  },

  // ==========================================
  // 3. SEO SERVICES
  // ==========================================
  {
    id: 'seo-basic',
    category: 'seo',
    categoryLabel: 'SEO Services',
    title: 'Basic SEO Setup',
    subtitle: 'Foundation indexing & technical hygiene',
    startingPrice: 50,
    priceDisplay: '$50+',
    billingCycle: 'one-time',
    description:
      'Essential search visibility foundation ensuring search engines can discover, crawl, and accurately understand your website.',
    highlights: [
      'Primary meta title and meta description optimization',
      'XML sitemap generation & robots.txt configuration',
      'Google search indexing readiness & crawl error checks',
      'Canonical URL configuration to prevent duplicate content',
      'Favicon and OpenGraph social preview tags verification',
    ],
    scopeNote: 'Best applied during website launch or for existing single-site audits.',
  },
  {
    id: 'seo-professional',
    category: 'seo',
    categoryLabel: 'SEO Services',
    title: 'Professional SEO Setup',
    subtitle: 'Comprehensive audit & Google Search Console setup',
    startingPrice: 120,
    priceDisplay: '$120+',
    billingCycle: 'one-time',
    description:
      'In-depth search optimization including technical audits, Google Search Console integration, and structured metadata across your site.',
    highlights: [
      'Complete Google Search Console & Webmaster Tools setup',
      'Sitemap submission and manual indexing request for key pages',
      'Full technical site audit (broken links, heading hierarchy, 404s)',
      'Schema.org JSON-LD structured data (Organization, LocalBusiness)',
      'Mobile-friendliness & Core Web Vitals speed inspection',
    ],
    isPopular: true,
    badge: 'Popular for Businesses',
    scopeNote: 'Includes post-setup verification and indexing status confirmation report.',
  },
  {
    id: 'seo-content',
    category: 'seo',
    categoryLabel: 'SEO Services',
    title: 'SEO Content Optimization',
    subtitle: 'Keyword research & strategic copy alignment',
    startingPrice: 150,
    priceDisplay: '$150+',
    billingCycle: 'one-time',
    description:
      'Refines your website copy and content structure around the authentic terms prospective clients in your market use to search for solutions.',
    highlights: [
      'Targeted keyword research tailored to local & regional intent',
      'H1, H2, H3 heading hierarchy restructuring for readability',
      'Image alt text optimization and semantic image naming',
      'Internal linking strategy to guide crawl bots and visitors',
      'Practical content recommendations for ongoing relevance',
    ],
    scopeNote: 'Applies to existing web copy; does not guarantee arbitrary search ranking positions.',
  },

  // ==========================================
  // 4. ADDITIONAL DIGITAL SERVICES
  // ==========================================
  {
    id: 'addon-web-maintenance',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'Website Maintenance',
    subtitle: 'Monthly peace of mind & uptime care',
    startingPrice: 40,
    priceDisplay: '$40/month',
    billingCycle: 'monthly',
    description:
      'Keep your web presence fast, secure, and error-free with regular backups, dependency updates, and minor content adjustments.',
    highlights: [
      'Scheduled cloud backups and restore verification',
      'Security patch application and vulnerability checks',
      'Dependency updates (framework, plugins, packages)',
      'Up to 1 hour of monthly content updates or minor tweaks',
      'Uptime monitoring and prompt incident response',
    ],
    isPopular: true,
    badge: 'Monthly SLA',
    scopeNote: 'Unused hours do not roll over; major feature redesigns quoted separately.',
  },
  {
    id: 'addon-mobile-maintenance',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'Mobile App Maintenance',
    subtitle: 'Monthly OS compatibility & stability updates',
    startingPrice: 50,
    priceDisplay: '$50/month',
    billingCycle: 'monthly',
    description:
      'Ensures your iOS and Android apps remain compatible with annual OS updates, API changes, and app store compliance policies.',
    highlights: [
      'Quarterly SDK updates and OS compatibility rebuilds',
      'Crash log monitoring & critical bug rectification',
      'App store policy and compliance monitoring',
      'Backend API sync checks and uptime observation',
      'Monthly health report and recommendation log',
    ],
    badge: 'Monthly SLA',
    scopeNote: 'Essential for preventing store takedowns caused by outdated target SDKs.',
  },
  {
    id: 'addon-business-email',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'Business Email Configuration',
    subtitle: 'Branded professional mailboxes',
    startingPrice: 30,
    priceDisplay: '$30+',
    billingCycle: 'one-time',
    description:
      'Professional email addresses matching your domain name (e.g. info@yourcompany.com) configured for reliable inbox delivery.',
    highlights: [
      'Domain DNS configuration (MX, SPF, DKIM, DMARC records)',
      'Integration with Google Workspace, Zoho Mail, or custom mail servers',
      'Spam prevention and inbox deliverability validation',
      'Client device setup guidance (phone and desktop email apps)',
    ],
    scopeNote: 'Third-party mailbox subscription fees (e.g. Google Workspace) paid to provider.',
  },
  {
    id: 'addon-website-migration',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'Website Migration',
    subtitle: 'Safe transfer with zero data loss',
    startingPrice: 100,
    priceDisplay: '$100+',
    billingCycle: 'one-time',
    description:
      'Transfer your existing website, databases, and assets between hosting providers or servers with minimum downtime.',
    highlights: [
      'Full database, media file, and code repository export',
      'Destination server provisioning and environment verification',
      'DNS records cutover with TTL management to avoid downtime',
      'Post-migration link validation and SSL certificate reinstall',
    ],
    scopeNote: 'Subject to source host access permissions and database size.',
  },
  {
    id: 'addon-additional-page',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'Additional Website Page',
    subtitle: 'Expand an existing website layout',
    startingPrice: 30,
    priceDisplay: '$30+',
    billingCycle: 'one-time',
    description:
      'Add a new custom landing page, detailed service breakdown, career listing, or policy section to your existing website.',
    highlights: [
      'Responsive design matching your existing brand style guide',
      'Copy formatting, image optimization & responsive layout',
      'Navigation menu and internal link integration',
      'Meta tags and sitemap update for the new page',
    ],
    scopeNote: 'Client provides copy and media assets unless copy assistance is requested.',
  },
  {
    id: 'addon-payment-gateway',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'Payment Gateway Integration',
    subtitle: 'Online checkout & local currency rails',
    startingPrice: 200,
    priceDisplay: '$200+',
    billingCycle: 'one-time',
    description:
      'Integrate seamless online payment options to collect revenue via local Zimbabwe mobile money rails or international credit cards.',
    highlights: [
      'Integration of supported payment processors (e.g. Paynow, Stripe, PayPal)',
      'Mobile money rails (EcoCash, OneMoney, InnBucks where API permits)',
      'Secure webhook handling and automated transaction verification',
      'Customer payment confirmation emails & digital receipt generation',
      'Sandbox testing and live environment cutover',
    ],
    scopeNote: 'Requires verified merchant account with chosen gateway provider.',
  },
  {
    id: 'addon-map-integration',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'Map Integration',
    subtitle: 'Interactive maps & store locators',
    startingPrice: 150,
    priceDisplay: '$150+',
    billingCycle: 'one-time',
    description:
      'Custom interactive Google Maps, branch locators, coverage zones, or route visualizers integrated into your digital platform.',
    highlights: [
      'Interactive map container with custom branded markers',
      'Location search, branch filtering, and directions handoff',
      'Mobile-optimized touch zooming and pan controls',
      'Google Maps Platform API key setup and security restriction',
    ],
    scopeNote: 'Google Maps monthly API quota covered under Google’s free monthly credit.',
  },
  {
    id: 'addon-app-store-submission',
    category: 'addons',
    categoryLabel: 'Additional Digital Services',
    title: 'App Store Submission Assistance',
    subtitle: 'Google Play & Apple App Store publishing',
    startingPrice: 100,
    priceDisplay: '$100 / platform',
    billingCycle: 'per platform',
    description:
      'Complete end-to-end support preparing, signing, and submitting your mobile application to Google Play or Apple App Store.',
    highlights: [
      'App package compilation, signing keys, and certificate handling',
      'Store listing metadata (descriptions, keywords, privacy policies)',
      'Screenshot preparation across required device display resolutions',
      'Store review questionnaire assistance and rejection troubleshooting',
    ],
    scopeNote: 'Store fees ($25 one-time for Google Play, $99/year for Apple) paid directly to stores.',
  },

  // ==========================================
  // 5. IoT AND ELECTRONICS
  // ==========================================
  {
    id: 'iot-electronics-custom',
    category: 'iot',
    categoryLabel: 'IoT & Electronics',
    title: 'IoT & Electronics Engineering',
    subtitle: 'Smart systems, hardware-software integration & telemetry',
    startingPrice: null,
    priceDisplay: 'Individually Quoted',
    billingCycle: 'custom',
    description:
      'Bespoke hardware prototypes, embedded controllers, smart telemetry sensors, automation systems, and connected electronic devices tailored to real-world operational challenges.',
    highlights: [
      'Custom IoT prototypes & proof-of-concept development',
      'Microcontroller firmware programming (ESP32, STM32, Arduino, Raspberry Pi)',
      'Smart environmental & operational monitoring systems (temperature, power, fluid)',
      'Hardware-to-Cloud telemetry pipelines and real-time web dashboards',
      'Circuit schematic design, PCB layout & hardware component sourcing',
      'Automation triggers, relay controls & edge-device logic',
    ],
    isPopular: true,
    badge: 'Hardware & Embedded Systems',
    scopeNote:
      'IoT and electronic systems require custom quotations based on component costs (BOM), sensor specifications, enclosure requirements, and project engineering complexity.',
  },
];

export const PRICING_DISCLAIMER = {
  title: 'Pricing Transparency & Scope Notice',
  intro:
    'At Future Pulse Investments, we believe in radical transparency. All listed prices are baseline starting rates based on standard project scopes and requirements.',
  points: [
    {
      title: 'Estimates & Custom Scopes',
      text:
        'Displayed figures serve as starting estimates. The final cost of any project is determined by specific technical requirements, feature complexity, custom integrations, design fidelity, and turnaround timelines.',
    },
    {
      title: 'Third-Party Fees Billed Separately',
      text:
        'Ongoing domain registrations, web/cloud hosting subscriptions, commercial database licenses, third-party SMS/API gateways, and developer account fees (e.g. Apple Developer Program $99/yr, Google Play $25 one-off) are external expenses billed directly to or paid by the client.',
    },
    {
      title: 'IoT Hardware & Component Costs',
      text:
        'For IoT and electronic systems, physical hardware components (microcontrollers, sensors, communication modules, PCB manufacturing, power units, and enclosures) are quoted based on prevailing market bill-of-materials (BOM) costs.',
    },
    {
      title: 'Realistic SEO Commitments',
      text:
        'Our SEO services implement established technical standards, semantic structured data, and search engine best practices. We do not make misleading guarantees of specific #1 Google ranking positions, as search algorithms depend on dynamic competitive factors.',
    },
  ],
};
