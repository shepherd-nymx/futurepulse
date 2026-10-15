# Services & Pricing Implementation Plan

Future Pulse Investments requires a dedicated, professional, mobile-friendly **Services & Pricing** experience showcasing all digital and engineering offerings with transparent USD starting rates, interactive quotation requests via WhatsApp and Email, and a secure PIN-protected admin rate generator.

***

### User Review & Critical Decisions

> [!IMPORTANT]
> The following design and architectural choices incorporate the user's clarifying answers:

*   **Confirmed Decision 1: Dedicated Full-Page View with Navbar Navigation**: The Services & Pricing experience will be rendered as a dedicated full-page view within the React SPA, synced with the URL hash (`#services-pricing`) and navbar navigation so users can toggle between the corporate landing page and the pricing catalog cleanly.
*   **Confirmed Decision 2: Instant WhatsApp & Email Draft Handoff**: The quotation request modal captures client name, contact details, selected services, budget bracket, timeline, and project description, then offers one-click dispatch via formatted WhatsApp message to founder Shepherd Mutevedzi (`+263 78 262 7990`) and an email draft to `shepherdmutevedzi@gmail.com`.
*   **Confirmed Decision 3: Secure PIN-Protected Admin Quotation Generator**: A discreet admin portal trigger (with default PIN `2026`) opens an editable live quotation builder where the founder can adjust base rates, toggle add-ons, add custom hardware/labor costs, calculate totals automatically, and copy or print a formal proposal.
*   **Confirmed Decision 4: Transparent Estimates & Disclaimer**: Every price is clearly badged with a "+" or starting label; a prominent disclaimer clarifies that final costs depend on scope, and third-party fees (hosting, domains, cloud subscriptions, app store developer fees, and IoT hardware components) are billed separately. SEO ranking guarantees are explicitly disclaimed.

***

## 1. Overview & Core Concept

*   **What It Does**: Provides a dedicated, responsive catalog of Future Pulse Investments' engineering services across 5 distinct tiers:
    1.  **Website Development**: Starter Website ($150+), Business Website ($300+), Professional Website ($600+), Custom Web Applications ($800+).
    2.  **Mobile App Development**: Simple App Prototype ($500+), Business Mobile App ($1,200+), Cross-Platform iOS & Android ($1,500+), Advanced Mobile Applications ($2,500+), Custom Applications (Individually Quoted).
    3.  **SEO Services**: Basic SEO Setup ($50+), Professional SEO Setup ($120+), SEO Content Optimization ($150+), covering metadata, sitemaps, indexing checks, technical audits, keyword research, and Google Search Console setup.
    4.  **Additional Digital Services**: Website Maintenance ($40/mo), Mobile App Maintenance ($50/mo), Business Email Setup ($30+), Website Migration ($100+), Additional Web Pages ($30+), Payment Gateway Integration ($200+), Map Integration ($150+), App Store Submission Assistance ($100/platform).
    5.  **IoT & Electronics**: Custom quotations for IoT prototypes, smart monitoring systems, electronics projects, automation, and hardware-software integration based on component bills-of-materials and project complexity.
*   **Target Audience**: Local Zimbabwean enterprises, international clients, startups, and institutions seeking transparent, upfront engineering rates and reliable maintenance partnerships.
*   **Key Value**: Replaces guesswork with upfront pricing, builds client trust with realistic technical scopes, and streamlines inbound lead qualification directly into WhatsApp and email.

***

## 2. User Experience & Visual Design

### Key User Flows

1.  **Navigation & Discovery**:
    *   Visitor arrives on the Future Pulse website and clicks **"Services & Pricing"** in the top navigation bar, the mobile menu, or the hero/footer links.
    *   The view smoothly switches to the full-page **Services & Pricing** view (with a quick return link to the homepage and active URL hash support).
2.  **Category Filtering & Service Inspection**:
    *   Interactive segmented category filter bar allowing visitors to view **All Services**, **Web Development**, **Mobile Apps**, **SEO Services**, **Digital Add-ons**, or **IoT & Electronics**.
    *   Each card features the service name, clean starting price in USD (with tabular figures), ideal use-case tag, key included features with bullet checkmarks, and a high-intent **"Request a Quote"** button.
3.  **Quotation Request Modal Flow**:
    *   Clicking **"Request a Quote"** on any card opens an interactive slide-over/modal with the chosen service automatically pre-selected.
    *   The client inputs their name, organization, email, WhatsApp number, budget bracket, desired timeline, and project description.
    *   Upon submission, the client can choose **"Send via WhatsApp"** (opens WhatsApp directly with pre-formatted message text) or **"Send via Email"** (opens their default email client with structured mailto body).
4.  **Admin Rate Calculator (PIN-Protected)**:
    *   Accessed via an "Admin Rate Calculator" link in the footer or top action bar.
    *   User enters security PIN (`2026`). Once unlocked, the admin can add/remove line items, customize unit prices and quantities, specify custom hardware or travel costs, apply client discounts, and instantly generate a formatted text/printable estimate.

### Visual Identity & Theme

*   **Aesthetic Direction**: High-tech minimalist, professional engineering studio aesthetic matching Future Pulse's dark navy/obsidian motif (`#05070B` and `#0A0E17`).
*   **Palette & Mood**:
    *   Background: Deep dark space (`#05070B`) with subtle tech grid and living pulse canvas.
    *   Surfaces: Translucent card surfaces (`bg-slate-900/60`, `border-white/10`) with subtle hover highlight.
    *   Accents: Electric Blue (`#3B82F6` / `#2563EB`) for primary CTAs and Emerald/Cyan highlights for price tags.
*   **Typography**: Syne display font for bold section titles, Plus Jakarta Sans for crisp legible body text, and tabular monospace (`font-mono tabular-nums`) for currency figures and calculations.
*   **Anti-Slop Discipline**:
    *   Zero pill badge clutter on cards; metadata rendered as clean unboxed inline text with typographic dots (`·`).
    *   No pulsing decorative status dots or fake uptime tickers.
    *   No thick left accent borders; clean hairline borders throughout.
    *   Single-line button controls with clear action labels.
    *   Fully mobile-optimized touch targets ($\ge 44\text{px}$) with no horizontal clipping.

***

## 3. Key Product Decisions & Trade-Offs

### Decision 1: View State Routing vs Separate Route
*   **Chosen Approach**: React state (`activeView: 'home' | 'services'`) paired with `window.location.hash` (`#services-pricing`) and `popstate`/`hashchange` listeners.
*   **Why**: Enables deep-linking (e.g. sharing the URL directly to the pricing page) and browser Back/Forward support without adding external router dependencies or breaking Vite SPA dev server configurations.
*   **Alternatives Considered**: React Router DOM (would introduce heavy client routing dependency for a 2-view app); Single-page scroll anchor (would clutter the primary landing narrative with an extensive 20+ item pricing catalog).

### Decision 2: Dual WhatsApp & Email Inquiry Handoff
*   **Chosen Approach**: Client-side URL composition for both WhatsApp Web/Mobile API (`wa.me/263782627990?text=...`) and standard RFC 2368 `mailto:` links with subject and formatted body.
*   **Why**: Maximizes conversion in Zimbabwe where WhatsApp is the primary business communication tool, while offering corporate clients a formal email route with zero server backend vulnerability.
*   **Alternatives Considered**: Traditional form submission backend (requires email SMTP keys and database storage, with risk of missed spam or failed deliveries).

### Decision 3: PIN Protection for Admin Rate Calculator
*   **Chosen Approach**: Lightweight PIN prompt modal stored in component/session state with a default access key (`2026`).
*   **Why**: Provides immediate utility for Shepherd to quote clients on-the-go from any phone or laptop without setting up complex user authentication tables.

***

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       App Container                         │
│   (activeView: 'home' | 'services', URL hash synchronization)│
└──────────────────────────────┬──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
     ┌───────────────────┐           ┌───────────────────┐
     │  Home View (SPA)  │           │ Services & Pricing│
     │  - Hero           │           │ View Component    │
     │  - What We Build  │           └─────────┬─────────┘
     │  - Our Work       │                     │
     │  - Contact        │                     │
     └───────────────────┘                     │
                                               ▼
         ┌─────────────────────────────────────────────────────────────┐
         │             Services & Pricing View Architecture            │
         │                                                             │
         │  ┌───────────────────────────────────────────────────────┐  │
         │  │ Header & Category Segmented Tabs (All, Web, App, ...) │  │
         │  └───────────────────────────────────────────────────────┘  │
         │  ┌───────────────────────────────────────────────────────┐  │
         │  │ Pricing Grid: Web (4), Mobile (5), SEO (3),           │  │
         │  │ Digital Addons (8), IoT & Electronics (Custom)        │  │
         │  └───────────────────────────────────────────────────────┘  │
         │  ┌───────────────────────────────────────────────────────┐  │
         │  │ Comprehensive Transparency & Scope Disclaimer         │  │
         │  └───────────────────────────────────────────────────────┘  │
         │  ┌───────────────────────────────────────────────────────┐  │
         │  │ Quotation Request Modal ──> WhatsApp / Email Handoff  │  │
         │  └───────────────────────────────────────────────────────┘  │
         │  ┌───────────────────────────────────────────────────────┐  │
         │  │ PIN-Protected Admin Calculator ──> Live Scope Estimator│  │
         │  └───────────────────────────────────────────────────────┘  │
         └─────────────────────────────────────────────────────────────┘
```

### Data Structures & State Management

*   **`servicesData.ts`**:
    *   Structured arrays of service objects containing: `id`, `category`, `title`, `startingPrice` (number or string for custom), `priceUnit` ('one-time' | 'monthly' | 'custom' | 'per platform'), `description`, `highlights` (array of bullet points), `turnaroundEstimate`, and `isPopular` flag.
    *   Comprehensive breakdown for all 5 categories requested by the user.
*   **Interactive Modal State**:
    *   `selectedService`: Pre-selected service passed into the Quote Request Form.
    *   `formState`: Client details, budget, timeline, project scope description.
*   **Admin Calculator State**:
    *   `unlocked`: Boolean unlocked status upon entering correct PIN (`2026`).
    *   `quoteItems`: Editable line items with item name, quantity, unit rate, and total calculation.
    *   `discountPercent` & `customHardwareCost` inputs.
    *   Formatted output generator for copying to clipboard or printing.

***

## 5. Verification Plan

*   **Compilation & Linting**: Run `compile_applet` and `lint_applet` to ensure zero TypeScript errors and pristine builds.
*   **Responsive Viewport Testing**: Test on mobile (375px/412px width), tablet (768px), and desktop (1440px) to verify zero clipping, single-line control integrity, and touch-target sizing.
*   **Navigation & Deep-Linking**: Test navbar links, URL hash `#services-pricing`, back-to-home navigation, and direct quote buttons.
*   **Form & Handoff Testing**: Validate WhatsApp message URL generation and mailto body generation with test inputs.
*   **Admin PIN & Calculator Testing**: Verify PIN entry, invalid PIN rejection, rate adjustments, item additions, and sum calculations.
