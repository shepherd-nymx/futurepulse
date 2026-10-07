export interface PillarDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  focusAreas: string[];
  engineeringApproach: string;
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
