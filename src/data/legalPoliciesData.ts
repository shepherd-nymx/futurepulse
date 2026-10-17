/**
 * Future Pulse Investments — Legal & Regulatory Compliance Data
 * Formulated under Zimbabwean statutory frameworks:
 * - Cyber and Data Protection Act [Chapter 12:07] (Act No. 5 of 2021)
 * - Consumer Protection Act [Chapter 14:14] (Act No. 5 of 2019)
 * - Postal and Telecommunications Act [Chapter 12:05]
 * - Companies and Other Business Entities Act [Chapter 24:31]
 *
 * NOTE: Unverified corporate information is marked with explicit placeholders.
 * These policies contain zero blanket liability waivers that attempt to extinguish statutory consumer rights.
 */

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: {
    subtitle: string;
    text: string[];
  }[];
  regulatoryNotice?: string;
}

export interface LegalPolicy {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  applicableLaw: string;
  lastUpdated: string;
  statusBadge: string;
  verificationNotice: string;
  overview: string;
  sections: LegalSection[];
}

export const LEGAL_POLICIES: LegalPolicy[] = [
  // =========================================================================
  // 1. PRIVACY POLICY
  // =========================================================================
  {
    id: 'privacy-policy',
    slug: 'privacy-policy',
    title: 'Privacy Policy & Data Protection Notice',
    shortTitle: 'Privacy Policy',
    applicableLaw: 'Cyber and Data Protection Act [Chapter 12:07] (Zimbabwe)',
    lastUpdated: 'October 2026',
    statusBadge: 'CDPA [Chapter 12:07] Compliant Draft',
    verificationNotice:
      'REGULATORY VERIFICATION NOTICE: Future Pulse Investments is an early-stage technology company registered/in process of registration in Zimbabwe. Formal registration as a Data Controller and notification of our Data Protection Officer (DPO) with the Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ) is currently being processed in accordance with the Cyber and Data Protection (Data Protection and Privacy) Regulations. Users are advised of their statutory rights under Part III of the Cyber and Data Protection Act.',
    overview:
      'Future Pulse Investments ("we", "us", or "our") respects the privacy and fundamental data protection rights of our clients, website visitors, and platform users. This Privacy Policy outlines how we collect, process, store, disclose, retain, and protect your personal information when you access our website, utilize our software, mobile applications, online AI agents, quotation portals, or contract our engineering services.',
    sections: [
      {
        id: 'legal-framework',
        title: '1. Legislative Framework & Data Protection Principles',
        paragraphs: [
          'This Privacy Policy is prepared and operated pursuant to the Cyber and Data Protection Act [Chapter 12:07] of Zimbabwe (Act No. 5 of 2021), and the Constitution of Zimbabwe Amendment (No. 20) Act, 2013 (Section 57 — Right to Privacy).',
          'In handling all personal data, Future Pulse Investments adheres to the core data protection principles set out in Section 14 of the Cyber and Data Protection Act:',
        ],
        bulletPoints: [
          'Lawfulness, Fairness, and Transparency: Data is processed only with valid legal grounds and without deceptive practices.',
          'Purpose Limitation: Data is collected for explicit, specified, and legitimate engineering and business purposes.',
          'Data Minimization: We restrict data collection strictly to what is adequate, relevant, and necessary for the services requested.',
          'Accuracy: Reasonable steps are taken to ensure personal information remains accurate, complete, and up to date.',
          'Storage Limitation: Personal identifiers are kept only for as long as necessary to fulfill the stated purposes or statutory periods.',
          'Integrity and Confidentiality: We enforce appropriate technical and organizational safeguards to guard against unauthorized access, loss, or destruction.',
        ],
      },
      {
        id: 'data-collected',
        title: '2. Personal Information We Collect',
        paragraphs: [
          'We collect information directly from you when you submit a quotation inquiry, contact our engineering team, or interact with our digital platforms:',
        ],
        subsections: [
          {
            subtitle: 'A. Direct Inquiries & Quotation Data',
            text: [
              'Full Name, Organization or Trading Name, WhatsApp/phone number, email address, proposed project budget, desired timeline, and technical project requirements submitted through our quotation request forms or email communications.',
            ],
          },
          {
            subtitle: 'B. Technical Usage & Essential Browser Storage',
            text: [
              'Technical device metadata, including internet protocol (IP) address, browser type and version, operating system, preferred language, view state hashes (e.g. #services-pricing), and essential local storage tokens utilized for session rendering and view navigation.',
            ],
          },
          {
            subtitle: 'C. Third-Party Communication Metadata',
            text: [
              'When you initiate contact through WhatsApp or standard email clients, your telephone number and email header metadata are transmitted via the respective messaging provider networks (Meta Platforms Ireland Limited / WhatsApp LLC, and your email service provider).',
            ],
          },
          {
            subtitle: 'D. Sensitive Personal Data Prohibited',
            text: [
              'We do NOT solicit, collect, or process sensitive personal data as defined under Section 16 of the Cyber and Data Protection Act (such as genetic, biometric, health, religious, political, or sexual orientation data) through this website.',
            ],
          },
        ],
      },
      {
        id: 'purposes-processing',
        title: '3. Legal Grounds and Purposes of Processing',
        paragraphs: [
          'Under Section 15 of the Cyber and Data Protection Act, we only process your personal information under the following lawful bases:',
        ],
        bulletPoints: [
          'Contractual Necessity: To evaluate engineering specifications, generate tailored service quotations, execute project agreements, deliver milestones, and administer software maintenance contracts.',
          'Explicit Consent: Where you have freely given consent by submitting a contact form, requesting quote handoffs, or subscribing to communication channels.',
          'Legitimate Business Interests: To protect platform cybersecurity, diagnose infrastructure errors, prevent fraudulent impersonation, and optimize our digital interface.',
          'Legal Compliance: To fulfill statutory accounting, taxation, and company record obligations under Zimbabwean law.',
        ],
      },
      {
        id: 'data-storage-security',
        title: '4. Data Storage, Cross-Border Transfers & Security',
        paragraphs: [
          'Personal data collected through this website is stored securely on protected cloud infrastructure and local encrypted development devices managed by Future Pulse Investments engineering personnel.',
          'Security Safeguards: We implement industry-standard cryptographic protocols (TLS/HTTPS 256-bit encryption in transit), strict role-based access controls, sanitized input validation against SQL injection and cross-site scripting (XSS), and periodic credential rotation.',
          'Cross-Border Transfers: In delivering cloud platforms, software builds, and website hosting (e.g., via global content delivery networks such as Cloudflare), data may traverse or be cached on servers outside Zimbabwe. In accordance with Section 28 of the Cyber and Data Protection Act, we ensure cross-border transfers utilize jurisdictions or providers providing adequate data protection standards or standard contractual safeguards.',
        ],
      },
      {
        id: 'data-sharing',
        title: '5. Sharing and Disclosure of Information',
        paragraphs: [
          'We do not sell, rent, lease, or trade personal data to third parties for marketing or advertising purposes under any circumstances.',
          'Personal information is only disclosed under the following strictly defined conditions:',
        ],
        bulletPoints: [
          'Essential Technical Sub-processors: Verified cloud infrastructure, hosting (e.g., Cloudflare), and communication rails (WhatsApp API / email servers) solely for executing service delivery.',
          'Payment Gateway Partners: Where clients initiate payments, transaction details are processed by verified gateways (e.g., Paynow Zimbabwe, EcoCash, direct bank rails) under their own regulated security frameworks.',
          'Statutory & Legal Requirements: Where required by a competent court of law, police warrant, or regulatory order pursuant to the laws of Zimbabwe.',
        ],
      },
      {
        id: 'retention-periods',
        title: '6. Data Retention Schedule',
        paragraphs: [
          'We retain personal information only for the minimum duration necessary to satisfy the purposes for which it was obtained:',
        ],
        bulletPoints: [
          'General Inquiries & Unconverted Quotes: Retained for up to six (6) months following the last communication, after which records are purged.',
          'Contracted Client Records & Project Deliverables: Retained for the duration of the active engineering contract plus five (5) years to satisfy statutory tax, accounting, and warranty audit requirements under the Companies and Other Business Entities Act and ZIMRA guidelines.',
          'Technical Server Logs: Anonymized or deleted within ninety (90) days.',
        ],
      },
      {
        id: 'data-subject-rights',
        title: '7. Your Statutory Rights Under the Cyber and Data Protection Act',
        paragraphs: [
          'Under Part III of the Cyber and Data Protection Act [Chapter 12:07], every data subject possesses enforceable rights regarding their personal information:',
        ],
        bulletPoints: [
          'Right to Access (Section 17): You have the right to request confirmation of whether we hold personal data concerning you and receive an intelligible copy.',
          'Right to Rectification (Section 18): You may demand correction of inaccurate, incomplete, or misleading personal data without undue delay.',
          'Right to Erasure / "To Be Forgotten" (Section 19): You may request the deletion of data processed unlawfully or no longer necessary for the original purpose.',
          'Right to Object to Processing (Section 20): You may object on legitimate grounds to the processing of your data, including direct marketing.',
          'Right to Restrict Processing: You may request limitation of processing pending verification of data accuracy or legal claims.',
          'Right to Lodge a Regulatory Complaint: If you believe your data rights have been infringed, you are entitled to file a complaint with the Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ), designated as the Data Protection Authority under the Act.',
        ],
      },
      {
        id: 'privacy-contact',
        title: '8. Data Controller Contact & Data Protection Officer Details',
        paragraphs: [
          'To exercise any of your statutory data rights or raise inquiries regarding this Privacy Policy, please contact our designated privacy desk:',
        ],
        bulletPoints: [
          'Data Controller: Future Pulse Investments',
          'Registration Placeholder: [Company Registration Number: Pending Official Registrar Filing]',
          'Physical Address: [Harare, Zimbabwe / Registered Office Street Address Pending Formal Lease Documentation]',
          'Designated Data Protection Contact: Shepherd Mutevedzi (Founder / Technical Lead)',
          'Official Privacy Email: unilinkbase@gmail.com',
          'Direct Phone / WhatsApp: +263 78 262 7990',
          'Supervisory Authority: Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ) — Data Protection Authority, Harare, Zimbabwe (potraz@potraz.gov.zw / www.potraz.gov.zw).',
        ],
      },
    ],
  },

  // =========================================================================
  // 2. TERMS AND CONDITIONS
  // =========================================================================
  {
    id: 'terms-and-conditions',
    slug: 'terms',
    title: 'Terms and Conditions of Website Use',
    shortTitle: 'Terms & Conditions',
    applicableLaw: 'Laws of Zimbabwe · Consumer Protection Act [Chapter 14:14]',
    lastUpdated: 'October 2026',
    statusBadge: 'Binding Website Agreement',
    verificationNotice:
      'STATUTORY COMPLIANCE NOTE: These terms govern the public use of this website. Nothing in these terms excludes, restricts, or modifies any statutory rights or consumer guarantees guaranteed under the Consumer Protection Act [Chapter 14:14] of Zimbabwe that cannot lawfully be disclaimed. Where verified company corporate registration is finalized, details will replace the indicated placeholders.',
    overview:
      'Welcome to the Future Pulse Investments website. By browsing, accessing, or utilizing any portion of this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of the site immediately.',
    sections: [
      {
        id: 'website-ownership',
        title: '1. Ownership and Intellectual Property',
        paragraphs: [
          'This website and all its original contents, including but not limited to source code, HTML/CSS architectures, UI components, graphic assets, brand crests, logos, typography arrangements, and written documentation, are the intellectual property of Future Pulse Investments (and/or Shepherd Mutevedzi) protected under the Copyright and Neighboring Rights Act [Chapter 26:05] and the Trade Marks Act [Chapter 26:04] of Zimbabwe.',
          'You are granted a limited, revocable, non-exclusive license to view and navigate this website for personal or legitimate prospective commercial evaluation. You may not decompile, reverse engineer, scrape, reproduce, sell, or exploit any portion of this website code without prior written consent from Future Pulse Investments.',
        ],
      },
      {
        id: 'acceptable-use',
        title: '2. Acceptable Use Policy',
        paragraphs: [
          'In accessing our digital properties, you agree to comply with all applicable local, national, and international laws, including the Cyber and Data Protection Act [Chapter 12:07]. You expressly agree NOT to:',
        ],
        bulletPoints: [
          'Introduce viruses, trojans, worms, logic bombs, or any malicious or technologically harmful software to the site.',
          'Attempt unauthorized access to our hosting accounts, servers, databases, administrative modals, or infrastructure.',
          'Execute automated scraping, data extraction, or denial-of-service (DoS/DDoS) attacks against this website.',
          'Impersonate Future Pulse Investments, our founder, our staff, or any third party.',
          'Submit fraudulent quotation requests, abusive communications, or spam through our interactive forms.',
          'Use the website in any manner that contravenes the laws of Zimbabwe.',
        ],
      },
      {
        id: 'quotations-accuracy',
        title: '3. Pricing & Technical Quotations Notice',
        paragraphs: [
          'Prices displayed across this website (including the Services & Pricing catalog) are starting baseline estimates in United States Dollars (USD) intended for preliminary budgeting purposes only.',
          'The display of starting rates does not constitute a binding legal offer. A binding contract is formed solely upon the mutual execution of an official, itemized Future Pulse Service Agreement or written milestone quotation signed by both parties.',
        ],
      },
      {
        id: 'liability-limitation',
        title: '4. Limitation of Liability and Statutory Consumer Guarantees',
        paragraphs: [
          'Subject to the mandatory provisions of the Consumer Protection Act [Chapter 14:14] of Zimbabwe:',
          '1. This website is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, regarding uninterrupted availability or total freedom from technical errors.',
          '2. Future Pulse Investments, its officers, employees, and founder shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your inability to access the site or reliance on informational content.',
          '3. STATUTORY PRESERVATION: Under Section 10 and Part III of the Consumer Protection Act, consumers have non-waivable statutory rights to fair value, good quality, and safety. Nothing in these Terms attempts to waive, limit, or defeat these rights or any legal liability that cannot be excluded under Zimbabwean law.',
        ],
      },
      {
        id: 'external-links',
        title: '5. Third-Party Links and External Services',
        paragraphs: [
          'This website may contain links to third-party services and social channels (such as WhatsApp, Instagram, TikTok, LinkedIn, or external client projects like UniLink).',
          'Future Pulse Investments exercises no editorial control over the terms, privacy practices, or content of external third-party sites and accepts no responsibility for them. Your engagement with external sites is governed by their respective terms.',
        ],
      },
      {
        id: 'governing-law',
        title: '6. Governing Law and Dispute Jurisdiction',
        paragraphs: [
          'These Terms and Conditions and any dispute or claim arising out of or in connection with them (including non-contractual disputes) shall be governed by and construed in accordance with the laws of the Republic of Zimbabwe.',
          'The High Court and Magistrates Courts of Zimbabwe shall have exclusive jurisdiction to settle any dispute, subject to the preliminary informal dispute procedures outlined in our Complaints and Dispute Resolution Policy.',
        ],
      },
      {
        id: 'terms-modifications',
        title: '7. Amendments to Terms',
        paragraphs: [
          'We reserve the right to revise these Terms and Conditions at our discretion. Any changes will be posted on this page with an updated "Last Updated" revision date. Your continued access to the site after revisions constitutes acceptance of the amended terms.',
        ],
      },
    ],
  },

  // =========================================================================
  // 3. REFUND AND CANCELLATION POLICY
  // =========================================================================
  {
    id: 'refund-and-cancellation',
    slug: 'refund-policy',
    title: 'Refund and Cancellation Policy',
    shortTitle: 'Refunds & Cancellation',
    applicableLaw: 'Consumer Protection Act [Chapter 14:14] (Zimbabwe)',
    lastUpdated: 'October 2026',
    statusBadge: 'Consumer Rights Aligned',
    verificationNotice:
      'CONSUMER PROTECTION DISCLOSURE: In accordance with Sections 11, 16, and 42 of the Consumer Protection Act [Chapter 14:14] of Zimbabwe, consumers have the legal right to cancel advance reservations, bookings, or contracts, subject to reasonable deduction for goods or services already delivered. Future Pulse Investments strictly respects statutory cooling-off rights and quality warranties.',
    overview:
      'This Refund and Cancellation Policy outlines the financial terms governing engineering project cancellations, service milestone deposits, recurring maintenance subscriptions, and client withdrawal procedures.',
    sections: [
      {
        id: 'milestone-refunds',
        title: '1. Bespoke Software, Web & Mobile App Projects',
        paragraphs: [
          'Our engineering projects operate on structured milestone schedules (typically 50% project initiation deposit and 50% upon final milestone delivery and client acceptance):',
        ],
        bulletPoints: [
          'Project Initiation Deposit: Covers preliminary architecture discovery, design drafting, code scaffolding, and server environment provisioning. If a client cancels before development kick-off commences, the deposit is refundable less reasonable administrative fees (not exceeding 10%).',
          'Work in Progress Cancellations: If a project is cancelled after active software engineering has commenced, Future Pulse will calculate pro-rata work completed against agreed milestones. Any unexpended portion of funds will be promptly refunded to the client.',
          'Delivered and Accepted Milestones: Where a technical deliverable (e.g. Phase 1 frontend, prototype build, or database schema) has been reviewed, tested, and formally signed off by the client, fees attributable to that approved milestone are non-refundable.',
        ],
      },
      {
        id: 'maintenance-refunds',
        title: '2. Ongoing System Maintenance Subscriptions',
        paragraphs: [
          'Monthly maintenance agreements (e.g. Website Maintenance at $40/mo, Mobile App Maintenance at $50/mo) are billed on a recurring 30-day cycle:',
        ],
        bulletPoints: [
          'Cancellation Notice: Clients may cancel ongoing maintenance agreements at any time by providing seven (7) business days written notice prior to the upcoming renewal date.',
          'Pro-Rata Refunds: If a client cancels mid-cycle, fees for the remaining unused calendar days will be credited or refunded upon request, minus any emergency patching hours already rendered during that cycle.',
          'Service Suspension: Failure to remit monthly SLA fees after thirty (30) days notice may result in suspension of monitoring and non-emergency update services.',
        ],
      },
      {
        id: 'third-party-disclaimer',
        title: '3. Third-Party Costs & Disclaimed Fees',
        paragraphs: [
          'Certain disbursements paid directly to external vendors cannot be refunded by Future Pulse Investments:',
        ],
        bulletPoints: [
          'Domain Name Registrations: Domain registries (e.g., ZISPA for .co.zw, ICANN registrars for .com) treat domain registrations as final and non-refundable.',
          'Cloud Hosting & API Subscriptions: Cloud hosting fees (AWS, Google Cloud, DigitalOcean, Cloudflare), SMS gateway credits, or commercial API keys paid directly to external vendors are governed by those vendors’ respective refund policies.',
          'App Store Developer Fees: Fees paid directly to Google ($25 one-time) or Apple ($99/yr) are non-refundable by app store policy.',
        ],
      },
      {
        id: 'consumer-statutory-rights',
        title: '4. Preservation of Statutory Consumer Rights',
        paragraphs: [
          'Under the Consumer Protection Act [Chapter 14:14] of Zimbabwe:',
          'Defective Performance: If services rendered fail to comply with agreed written specifications or fall below the standard of reasonable engineering skill, the client has the statutory right under Section 16 to require correction of the defect at no additional cost, or receive a proportionate refund.',
          'Cooling-Off Period: Where transactions are concluded via electronic commerce or distance communications, consumers are entitled to statutory cooling-off protections where applicable under Zimbabwean electronic transactions and consumer protection law.',
        ],
      },
      {
        id: 'refund-procedure',
        title: '5. How to Request a Cancellation or Refund',
        paragraphs: [
          'To request a project cancellation or refund review, please submit a written notice to our administration team:',
        ],
        bulletPoints: [
          'Email: unilinkbase@gmail.com',
          'WhatsApp: +263 78 262 7990',
          'Include: Project/Invoice Reference Number, Reason for Cancellation, and Bank / Mobile Money details for processing.',
          'Processing Time: Approved refunds are processed within ten (10) business days via the original payment method (Bank Transfer or Mobile Money rails).',
        ],
      },
    ],
  },

  // =========================================================================
  // 4. COOKIE POLICY
  // =========================================================================
  {
    id: 'cookie-policy',
    slug: 'cookie-policy',
    title: 'Cookie and Browser Storage Policy',
    shortTitle: 'Cookie Policy',
    applicableLaw: 'Cyber and Data Protection Act [Chapter 12:07] (Zimbabwe)',
    lastUpdated: 'October 2026',
    statusBadge: 'Transparent Privacy Architecture',
    verificationNotice:
      'PRIVACY ASSURANCE: Future Pulse Investments is committed to lean, privacy-first software architecture. We do NOT deploy intrusive third-party cross-site advertising trackers or surveillance pixel beacons on this corporate website. Browser storage is restricted to essential functional and navigational requirements.',
    overview:
      'This Cookie Policy explains what cookies, web storage, and local caching technologies are, how Future Pulse Investments utilizes them on our web properties, and how you can exercise control over your browser storage settings.',
    sections: [
      {
        id: 'what-are-cookies',
        title: '1. What Are Cookies and Local Storage Technologies?',
        paragraphs: [
          'Cookies are small text files placed on your computer or mobile device when you visit a website. Modern web applications also use Local Storage and Session Storage (HTML5 Web Storage) to store client-side state efficiently without repeatedly transmitting data over the network.',
        ],
      },
      {
        id: 'technologies-we-use',
        title: '2. Technologies Used on This Website',
        paragraphs: [
          'Future Pulse Investments believes in data minimization. We classify all browser storage utilized on this site into the following transparent categories:',
        ],
        subsections: [
          {
            subtitle: 'A. Strictly Essential Functional Storage',
            text: [
              '• Navigation State & URL Hash: Stores view state (e.g. #services-pricing, #privacy-policy) to ensure smooth browser back/forward transitions without full page reloads.',
              '• User Consent Record: A simple client-side flag (e.g. fp_cookie_consent) recording whether you have acknowledged our compliance and privacy notice, avoiding repetitive popups.',
              '• Admin Session Storage: For authorized management accessing the PIN-protected rate calculator, a temporary session token is maintained solely within the active browser tab session and wiped upon tab closure.',
            ],
          },
          {
            subtitle: 'B. Performance and Asset Caching',
            text: [
              '• Static Assets: Fonts (Google Fonts / CDN), vector icons, and optimized logo imagery are cached locally by your browser to reduce network bandwidth and accelerate page load speeds on mobile networks.',
            ],
          },
          {
            subtitle: 'C. Third-Party External Interactions',
            text: [
              '• WhatsApp Direct Handoff: When you click "Send via WhatsApp", your browser opens wa.me. Any cookies or identifiers set on that domain are governed exclusively by Meta Platforms Ireland Limited / WhatsApp LLC.',
              '• External Social Handles: Links to Instagram (@unili.nk) or TikTok are outbound navigation links. We do not embed intrusive third-party tracking iframes on this site.',
            ],
          },
        ],
      },
      {
        id: 'no-advertising-cookies',
        title: '3. No Cross-Site Ad Retargeting',
        paragraphs: [
          'We do NOT use Google AdSense, Meta/Facebook Pixel, third-party data broker beacons, or cross-site tracking cookies. We do not sell your browsing behaviors or monetize user telemetry.',
        ],
      },
      {
        id: 'managing-cookies',
        title: '4. How You Can Manage or Clear Browser Storage',
        paragraphs: [
          'You have the legal right to accept, reject, or purge browser storage at any time through your browser settings:',
          '• Chrome / Edge / Brave: Settings → Privacy and Security → Third-party cookies / Clear browsing data.',
          '• Safari: Preferences → Privacy → Manage Website Data.',
          '• Firefox: Options → Privacy & Security → Cookies and Site Data.',
          'Note: Disabling essential functional storage may affect dynamic tab navigation and view-switching within the Single Page Application.',
        ],
      },
    ],
  },

  // =========================================================================
  // 5. SERVICE AGREEMENT TERMS
  // =========================================================================
  {
    id: 'service-agreement-terms',
    slug: 'service-agreement',
    title: 'Standard Service Agreement & Engineering Terms',
    shortTitle: 'Service Agreement',
    applicableLaw: 'Laws of Zimbabwe · Contracts & Intellectual Property Law',
    lastUpdated: 'October 2026',
    statusBadge: 'Commercial Engineering Terms',
    verificationNotice:
      'CONTRACTUAL SCOPE: These terms outline the baseline contractual provisions that govern formal software development, mobile application, online AI agent, and IoT electronics projects undertaken by Future Pulse Investments. Individual projects are formally confirmed with a signed Scope of Work (SOW) or written quotation.',
    overview:
      'These Service Agreement Terms set out the rights, obligations, milestone delivery standards, payment schedules, intellectual property rights, and warranty commitments between Future Pulse Investments and our clients.',
    sections: [
      {
        id: 'project-scoping-quotations',
        title: '1. Project Scoping and Quotation Validity',
        paragraphs: [
          '1. Prior to commencing billable development, Future Pulse provides a formal itemized quotation detailing deliverables, technical specifications, and timeline milestones.',
          '2. Quotations provided by Future Pulse Investments remain valid for thirty (30) calendar days from the date of issuance, unless mutually extended in writing.',
          '3. Modifications to project scope requested by the client after milestone kick-off ("Scope Creep") will be evaluated and quoted via a formal Change Request (CR) before engineering execution.',
        ],
      },
      {
        id: 'payment-milestones',
        title: '2. Payment Terms and Currency',
        paragraphs: [
          '1. Currency: All commercial quotations and rates are denominated in United States Dollars (USD). Payments in local currency (ZiG / RTGS) or mobile money are accepted only where mutually agreed in writing at prevailing statutory exchange rates or merchant invoice values.',
          '2. Standard Milestone Structure:',
        ],
        bulletPoints: [
          'Milestone 1 (Kick-off Deposit): 50% upon contract execution and technical requirements sign-off.',
          'Milestone 2 (Final Delivery & UAT Acceptance): 50% upon staging review, user acceptance testing (UAT), and deployment to production.',
          'Alternative Milestone Schedules: For complex or enterprise projects exceeding $2,500 USD, payments may be partitioned into 3 or 4 phased milestone releases.',
        ],
      },
      {
        id: 'delivery-client-responsibilities',
        title: '3. Delivery Timelines and Client Responsibilities',
        paragraphs: [
          '1. Future Pulse will make all reasonable commercial and engineering efforts to deliver project milestones within the estimated schedules agreed in the Scope of Work.',
          '2. Client Responsibilities: The client agrees to provide necessary brand assets, copywriting, API keys, credentials, and feedback in a timely manner. Delays in client provision of required assets shall extend the delivery timeline proportionally.',
          '3. User Acceptance Testing (UAT): Upon deployment to a staging environment, the client has ten (10) business days to inspect the build and report discrepancies against agreed specifications.',
        ],
      },
      {
        id: 'ip-ownership',
        title: '4. Ownership of Deliverables & Intellectual Property Rights',
        paragraphs: [
          '1. Bespoke Client Code: Upon full settlement of all invoiced milestone fees, all proprietary rights, copyright, and title in the bespoke custom software code, UI designs, and database schemas crafted specifically for the client transfer to the client.',
          '2. Pre-existing Tooling & Open-Source Libraries: Future Pulse retains ownership of its pre-existing core libraries, scaffolding engines, and developer utilities. Open-source libraries (e.g. React, Tailwind CSS, TypeScript, Linux kernels) remain subject to their respective open-source licenses (MIT, Apache 2.0).',
          '3. Portfolio Rights: Unless governed by a formal Non-Disclosure Agreement (NDA), Future Pulse reserves the right to showcase the completed project in our public portfolio and case studies.',
        ],
      },
      {
        id: 'warranty-maintenance',
        title: '5. Warranty Period & Maintenance Support',
        paragraphs: [
          '1. Post-Launch Warranty: Future Pulse provides a thirty (30) day defect warranty starting from the date of final production launch. During this period, we rectify any reproducible bugs or coding errors that deviate from agreed specifications at zero cost.',
          '2. Exclusions from Warranty: The warranty does not cover defects caused by third-party modifications, unauthorized server adjustments, upstream API deprecations, or malware introduced after handoff.',
          '3. Ongoing Maintenance: Ongoing feature enhancements, security patches, and OS upgrades beyond the 30-day warranty require an active Future Pulse Maintenance SLA ($40/mo for websites, $50/mo for mobile apps).',
        ],
      },
    ],
  },

  // =========================================================================
  // 6. DISCLAIMER
  // =========================================================================
  {
    id: 'website-disclaimer',
    slug: 'disclaimer',
    title: 'General Website & Technical Disclaimer',
    shortTitle: 'Disclaimer',
    applicableLaw: 'Laws of Zimbabwe',
    lastUpdated: 'October 2026',
    statusBadge: 'General Legal Notice',
    verificationNotice:
      'GENERAL NOTICE: Content published on this website is for general informational and demonstration purposes. It does not constitute formal engineering, architectural, financial, or legal advice.',
    overview:
      'This Disclaimer sets out the limitations of representations, technical warranties, third-party platform dependencies, and search ranking disclaimers applicable across all Future Pulse Investments platforms.',
    sections: [
      {
        id: 'informational-purpose',
        title: '1. Informational & Prototyping Purposes',
        paragraphs: [
          'The information, case studies, technology showcases (such as UniLink), and architecture descriptions provided on this website are presented in good faith for general information and demonstration of our engineering capabilities.',
          'While we endeavor to keep all information current and accurate, we make no representations or warranties of any kind regarding completeness, suitability, or absolute accuracy of web content.',
        ],
      },
      {
        id: 'seo-disclaimer',
        title: '2. SEO Ranking & Organic Traffic Disclaimer',
        paragraphs: [
          'Future Pulse Investments builds websites and web applications conforming to established technical SEO standards, including mobile responsiveness, semantic HTML hierarchy, XML sitemaps, structured schema metadata, and Google Search Console indexing readiness.',
          'CRITICAL NOTICE: We do NOT make, advertise, or guarantee specific numerical rankings (e.g., "#1 on Google") or specific organic traffic volumes. Search algorithms operated by Google and other search engines are proprietary, dynamically altered, and influenced by continuous external competitive factors outside our engineering control.',
        ],
      },
      {
        id: 'app-store-disclaimer',
        title: '3. Third-Party App Store Approval Disclaimer',
        paragraphs: [
          'We engineer mobile applications in rigorous compliance with Google Play Store Developer Guidelines and Apple App Store Review Guidelines.',
          'However, final approval, certification, and listing of any application on Google Play or Apple App Store is at the sole discretion of Google LLC and Apple Inc. Future Pulse assists with submission, review correspondence, and policy alignment, but cannot guarantee approval if the client’s business model or content violates store policies.',
        ],
      },
      {
        id: 'cybersecurity-disclaimer',
        title: '4. Cybersecurity & Network Resilience',
        paragraphs: [
          'While we employ modern industry-standard security measures, no digital platform connected to the internet can be guaranteed 100% impenetrable. Future Pulse Investments disclaims liability for unauthorized intrusion or downtime resulting from global telecom failures, third-party cloud outages, or zero-day vulnerabilities in upstream open-source dependencies.',
        ],
      },
    ],
  },

  // =========================================================================
  // 7. DELIVERY AND RETURNS POLICY (PHYSICAL & IOT GOODS)
  // =========================================================================
  {
    id: 'delivery-and-returns',
    slug: 'delivery-returns',
    title: 'Delivery and Returns Policy (IoT Hardware & Physical Goods)',
    shortTitle: 'Delivery & Returns',
    applicableLaw: 'Consumer Protection Act [Chapter 14:14] (Zimbabwe)',
    lastUpdated: 'October 2026',
    statusBadge: 'Hardware & IoT Terms',
    verificationNotice:
      'PHYSICAL COMMODITIES NOTICE: This policy applies specifically to physical IoT hardware prototypes, embedded electronic components, sensors, microcontrollers, and localized errand deliveries facilitated through UniLink in Zimbabwe. Purely digital software deliverables are governed by our Service Agreement Terms.',
    overview:
      'This Delivery and Returns Policy governs the procurement, shipping, physical inspection, transit risks, warranty, and return procedures for physical electronics, IoT systems, and localized deliveries.',
    sections: [
      {
        id: 'hardware-procurement-delivery',
        title: '1. Hardware Delivery and Handover',
        paragraphs: [
          '1. Delivery Locations: Physical IoT prototypes, assembled circuit units, and electronic components can be handed over via scheduled physical collection in Harare or Bulawayo, or dispatched via recognized courier services across Zimbabwe.',
          '2. Delivery Schedules: Delivery timeframes for custom hardware depend on component availability, global supply chain lead times for microcontrollers/sensors, and PCB fabrication cycles. Clear delivery estimates are stated in individual project quotations.',
          '3. Transit Risks: For items dispatched via third-party courier services, tracking numbers will be provided upon dispatch. Risk of loss passes to the client upon verified carrier delivery.',
        ],
      },
      {
        id: 'inspection-defects',
        title: '2. Physical Inspection Upon Receipt',
        paragraphs: [
          '1. Inspection Window: The client must inspect all physical hardware components and IoT prototypes within forty-eight (48) hours of receipt.',
          '2. Physical Damage in Transit: Any visible physical damage or missing components must be documented with photographic evidence and reported in writing to unilinkbase@gmail.com within 48 hours.',
        ],
      },
      {
        id: 'hardware-returns',
        title: '3. Return Conditions and Statutory Warranties',
        paragraphs: [
          'Under the Consumer Protection Act [Chapter 14:14]:',
          '1. Defective Electronic Components: If a component supplied by Future Pulse is found to possess inherent manufacturing defects prior to unauthorized modification, soldering, or power overvoltage, we will replace or repair the component at no cost.',
          '2. Exclusions from Hardware Return: Components that have suffered electrical overvoltage (burning), improper polarity wiring by the client, physical drops, liquid immersion, or unauthorized firmware modifications are excluded from return or warranty.',
          '3. Custom Bespoke Assembled Enclosures: Specially fabricated custom 3D printed enclosures, custom etched PCBs, or specialized sensors ordered exclusively for a client’s custom specifications cannot be returned for change of mind once fabrication has commenced.',
        ],
      },
      {
        id: 'unilink-deliveries',
        title: '4. UniLink Errand & Local Dispatch Deliveries',
        paragraphs: [
          'For grocery, pharmacy, campus, and small parcel errands delivered under our UniLink platform:',
          '• Errand runners verify item integrity at the store or merchant prior to transit.',
          '• The client inspects perishable goods or merchandise immediately upon delivery. Once accepted and signed for, non-defective merchant goods are governed by the merchant’s standard return policy.',
          '• Errand service fees are earned upon completion of dispatch.',
        ],
      },
    ],
  },

  // =========================================================================
  // 8. COMPLAINTS AND DISPUTE RESOLUTION POLICY
  // =========================================================================
  {
    id: 'complaints-and-dispute-resolution',
    slug: 'dispute-resolution',
    title: 'Complaints and Dispute Resolution Policy',
    shortTitle: 'Dispute Resolution',
    applicableLaw: 'Consumer Protection Act [Chapter 14:14] · Cyber and Data Protection Act [Chapter 12:07]',
    lastUpdated: 'October 2026',
    statusBadge: 'Transparent Redress Mechanism',
    verificationNotice:
      'STATUTORY COMPLAINT MECHANISM: Future Pulse Investments is committed to constructive, fair, and prompt grievance resolution. Customers have the statutory right under Part V of the Consumer Protection Act [Chapter 14:14] and Part III of the Cyber and Data Protection Act to seek formal regulatory redress if internal mechanisms fail to resolve their grievance.',
    overview:
      'We value long-term partnerships and strive for engineering excellence. When friction or misunderstandings occur, this Complaints and Dispute Resolution Policy provides a clear, stepped roadmap to ensure fair, transparent, and prompt resolution.',
    sections: [
      {
        id: 'stepped-procedure',
        title: '1. Three-Tiered Grievance Procedure',
        paragraphs: [
          'We follow a structured 3-tier procedure designed to resolve concerns swiftly and amicably:',
        ],
        subsections: [
          {
            subtitle: 'Tier 1: Informal Direct Resolution (Days 1–5)',
            text: [
              'Clients are encouraged to contact our management team directly via WhatsApp (+263 78 262 7990) or email (unilinkbase@gmail.com). Most technical bugs, scope misunderstandings, or billing queries are resolved within two (2) to five (5) business days at this stage.',
            ],
          },
          {
            subtitle: 'Tier 2: Formal Written Complaint Escalation (Days 5–14)',
            text: [
              'If your concern is not resolved informally, you may submit a Formal Grievance to unilinkbase@gmail.com with the subject line "FORMAL COMPLAINT - [Project Name / Account]". Include:',
              '• Your full name and organization.',
              '• Project, quotation, or invoice reference.',
              '• Detailed summary of the issue, timeline, and requested remedy.',
              'A formal written response and proposed settlement roadmap will be issued by the founder / management within seven (7) business days.',
            ],
          },
          {
            subtitle: 'Tier 3: Independent Mediation & Legal Remedies',
            text: [
              'If the dispute remains unresolved following Tier 2, the parties agree to seek amicable mediation before an independent mediator accredited by the Commercial Arbitration Centre in Harare, Zimbabwe, prior to initiating formal litigation.',
            ],
          },
        ],
      },
      {
        id: 'regulatory-bodies',
        title: '2. External Regulatory Redress Channels in Zimbabwe',
        paragraphs: [
          'Nothing in this policy restricts your right to approach authorized statutory bodies established under Zimbabwean law:',
        ],
        bulletPoints: [
          'Consumer Protection Commission of Zimbabwe (CPC): Established under the Consumer Protection Act [Chapter 14:14] to protect consumers from unfair business practices and adjudicate unresolved commercial complaints.',
          'Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ): The statutory authority governing telecommunications, electronic commerce, and data privacy under the Cyber and Data Protection Act [Chapter 12:07]. (Website: www.potraz.gov.zw / Email: potraz@potraz.gov.zw).',
          'Courts of Zimbabwe: Competent jurisdiction resides with the Magistrates Courts or High Court of Zimbabwe.',
        ],
      },
      {
        id: 'dispute-contact',
        title: '3. Complaints Contact Information',
        paragraphs: [
          'Please direct all complaints, dispute notices, and compliance queries to:',
        ],
        bulletPoints: [
          'Compliance Officer / Management Desk: Future Pulse Investments',
          'Email: unilinkbase@gmail.com',
          'Direct Phone / WhatsApp: +263 78 262 7990',
          'Physical Address Placeholder: [Harare, Zimbabwe / Formal Office Address to be updated upon physical registry recording]',
        ],
      },
    ],
  },
];
