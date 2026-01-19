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
  },
  {
    id: 'basic-4',
    name: 'Modern Business',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Company profile', 'Clean design', 'Mobile ready', 'Custom colors'],
    image: '#2563EB'
  },
  {
    id: 'basic-5',
    name: 'Creative Portfolio',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Project gallery', 'Dark mode', 'Animasi halus', 'Contact form'],
    image: '#7C3AED'
  },
  {
    id: 'basic-6',
    name: 'SaaS Landing',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Feature sections', 'Pricing table', 'Testimonials', 'Fast loading'],
    image: '#DB2777'
  },
  {
    id: 'premium-4',
    name: 'Enterprise Pro',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Advance SEO', 'Multi-page', 'Custom domain', 'Priority support'],
    image: '#059669'
  },
  {
    id: 'premium-5',
    name: 'E-commerce Lite',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Product grid', 'Cart system', 'Payment integration', 'Dashboard'],
    image: '#DC2626'
  },
  {
    id: 'premium-6',
    name: 'Real Estate Plus',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Property search', 'Map integration', 'Agent profiles', 'Booking system'],
    image: '#EA580C'
  },
  {
    id: 'basic-7',
    name: 'Minimal Blog',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Clean typography', 'Lazy loading', 'Newsletter', 'Share buttons'],
    image: '#4B5563'
  },
  {
    id: 'basic-8',
    name: 'Personal Brand',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Bio section', 'Social links', 'Resume download', 'Blog support'],
    image: '#4F46E5'
  },
  {
    id: 'premium-7',
    name: 'Agency Hub',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Client portal', 'Project tracking', 'Invoice system', 'Team chat'],
    image: '#8B5CF6'
  },
  {
    id: 'premium-8',
    name: 'Education LMS',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Course builder', 'Quiz system', 'Certificate gen', 'Video hosting'],
    image: '#F59E0B'
  },
  {
    id: 'basic-9',
    name: 'Fitness Center',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Schedule', 'Instructor team', 'Gallery', 'Class booking'],
    image: '#10B981'
  },
  {
    id: 'premium-9',
    name: 'Restaurant Elite',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Online ordering', 'Menu management', 'Reservation', 'Table tracking'],
    image: '#EF4444'
  },
  {
    id: 'basic-10',
    name: 'Barber Shop',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Service list', 'Team showcase', 'Price list', 'Google Maps'],
    image: '#1E293B'
  },
  {
    id: 'premium-10',
    name: 'Startup Full',
    category: 'premium',
    price: 'Rp 150.000',
    features: ['Auth flow', 'API integration', 'Analytics', 'Live chat'],
    image: '#6366F1'
  },
  {
    id: 'basic-11',
    name: 'Photographer',
    category: 'basic',
    price: 'Rp 80.000',
    features: ['Masonry grid', 'Lightbox', 'Category filter', 'EXIF data'],
    image: '#EC4899'
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