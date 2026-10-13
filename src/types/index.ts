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
