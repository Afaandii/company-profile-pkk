export interface Template {
  id: string;
  name: string;
  category: 'basic' | 'premium' | 'custom';
  price: string;
  features: string[];
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}