import type { Template, PricingPlan } from '../types/index';

export const templates: Template[] = [
  {
    id: 'basic-1',
    name: 'Template A - Basic',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Company profile', 'Desain menarik', 'Kontak pembelian', '1x revisi'],
    image: '#4F46E5'
  },
  {
    id: 'basic-2',
    name: 'Template B - Basic',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Company profile', 'Desain menarik', 'Kontak pembelian', '1x revisi'],
    image: '#7C3AED'
  },
  {
    id: 'basic-3',
    name: 'Template C - Basic',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Company profile', 'Desain menarik', 'Kontak pembelian', '1x revisi'],
    image: '#DB2777'
  },
  {
    id: 'premium-1',
    name: 'Template A - Premium',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Semua fitur Basic', 'Produk unggulan', 'Akses update', '3x revisi'],
    image: '#059669'
  },
  {
    id: 'premium-2',
    name: 'Template B - Premium',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Semua fitur Basic', 'Produk unggulan', 'Akses update', '3x revisi'],
    image: '#DC2626'
  },
  {
    id: 'premium-3',
    name: 'Template C - Premium',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Semua fitur Basic', 'Produk unggulan', 'Akses update', '3x revisi'],
    image: '#EA580C'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: 'Rp 80.000',
    features: [
      'Company profile',
      'Desain menarik',
      'Kontak pembelian',
      '1x revisi',
      'Responsive design'
    ]
  },
  {
    name: 'Premium',
    price: 'Rp 150.000',
    features: [
      'Semua fitur Basic',
      'Produk unggulan',
      'Akses update',
      '3x revisi',
      'SEO friendly',
      'Fast loading'
    ],
    popular: true
  },
  {
    name: 'Custom',
    price: 'Mulai 200k',
    features: [
      'Desain sesuai brand',
      'Unlimited revisi',
      'Fitur khusus',
      'Konsultasi gratis',
      'Support prioritas'
    ]
  }
];