export interface PillarDetail {
  id: string;
  title: string;
  tagline: string;
  category?: string;
  description: string;
  iconName: string;
  focusAreas: string[];
  engineeringApproach: string;
  maintenanceScope?: string[];
  technologies?: string[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  iconName: string;
  deliverables: string[];
  maintenanceDetails: string[];
  technologies: string[];
}

export interface ProductShowcase {
  id: string;
  name: string;
  category: string;
  tagline: string;
  slogan: string;
  websiteUrl: string;
  whatsappSupport: string;
  deliveryPromise: string;
  description: string;
  image: string;
  status: 'In Development' | 'Prototyping' | 'Active';
  problemSolved: string;
  howItWorks: string[];
  techStack: string[];
  paymentMethods: string[];
  targetAudiences: string[];
  localStores: string[];
  messengerProgram: {
    title: string;
    benefits: string[];
  };
  stepsDetailed: {
    stepNumber: string;
    title: string;
    desc: string;
  }[];
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  milestoneDetail: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  reason: string;
  message: string;
}

export type ServiceCategory = 'all' | 'web' | 'mobile' | 'seo' | 'addons' | 'iot';

export interface PricingItem {
  id: string;
  category: 'web' | 'mobile' | 'seo' | 'addons' | 'iot';
  categoryLabel: string;
  title: string;
  subtitle?: string;
  startingPrice: number | null; // null for custom quote
  priceDisplay: string; // e.g. "$150+", "$40/mo", "$100 per platform", "Custom Quote"
  billingCycle: 'one-time' | 'monthly' | 'per platform' | 'custom';
  description: string;
  highlights: string[];
  scopeNote?: string;
  badge?: string;
  isPopular?: boolean;
}

export interface QuoteRequestData {
  clientName: string;
  email: string;
  phoneOrWhatsapp: string;
  companyOrOrganization: string;
  selectedServices: string[];
  budgetRange: string;
  timeline: string;
  projectDescription: string;
}

export interface AdminQuoteLineItem {
  id: string;
  serviceId?: string;
  name: string;
  category: string;
  unitPrice: number;
  quantity: number;
  notes?: string;
}
