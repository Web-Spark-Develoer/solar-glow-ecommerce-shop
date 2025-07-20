export interface Product {
  id: string;
  name: string;
  category: 'batteries' | 'controllers' | 'inverters' | 'panels';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'SMS Lithium Battery 15kWh',
    category: 'batteries',
    price: 850000,
    originalPrice: 950000,
    image: '/lovable-uploads/40f1af3e-ab04-4332-b649-0ab3f3763c3c.png',
    description: 'High-capacity 51.2V 15kWh lithium iron phosphate battery with advanced BMS for reliable energy storage.',
    features: [
      'Long cycle life (>6000 cycles)',
      'Fast charging capability',
      'Built-in battery management system',
      'Weather resistant design',
      'LCD display with real-time monitoring'
    ],
    specifications: {
      'Voltage': '51.2V',
      'Capacity': '15kWh',
      'Type': 'LiFePO4',
      'Cycles': '>6000',
      'Warranty': '5 years'
    },
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'MPPT Solar Charge Controller',
    category: 'controllers',
    price: 45000,
    originalPrice: 55000,
    image: '/lovable-uploads/385cf854-e581-417f-8436-541ae13d2f02.png',
    description: 'Advanced MPPT solar charge controller with LCD display for maximum power point tracking and system monitoring.',
    features: [
      'Maximum Power Point Tracking',
      'LCD display with data logging',
      'Multiple protection features',
      'Compatible with various battery types',
      'Easy installation and setup'
    ],
    specifications: {
      'Max Solar Input': '150V',
      'Charge Current': '60A',
      'System Voltage': '12V/24V',
      'Efficiency': '>98%',
      'Warranty': '2 years'
    },
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Lithium Battery Module 25.6V',
    category: 'batteries',
    price: 420000,
    image: '/lovable-uploads/b146bc7a-5706-4ac4-99f1-2d4418661872.png',
    description: 'Compact 25.6V 300Ah LiFePO4 battery module perfect for residential solar installations.',
    features: [
      'Compact design',
      'High energy density',
      'Integrated safety features',
      'Scalable configuration',
      'Maintenance-free operation'
    ],
    specifications: {
      'Voltage': '25.6V',
      'Capacity': '300Ah',
      'Type': 'LiFePO4',
      'Weight': '32kg',
      'Warranty': '5 years'
    },
    inStock: true,
    rating: 4.6,
    reviews: 67
  },
  {
    id: '4',
    name: 'Monocrystalline Solar Panel 550W',
    category: 'panels',
    price: 85000,
    originalPrice: 95000,
    image: '/lovable-uploads/e0a88af2-bb02-4181-93d3-03e5be89ea9a.png',
    description: 'High-efficiency 550W monocrystalline solar panel with excellent performance in various weather conditions.',
    features: [
      'High efficiency (>22%)',
      'Excellent low-light performance',
      'Durable aluminum frame',
      '25-year power warranty',
      'Anti-reflective coating'
    ],
    specifications: {
      'Power': '550W',
      'Efficiency': '22.1%',
      'Voltage': '41.2V',
      'Current': '13.36A',
      'Warranty': '25 years'
    },
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '5',
    name: 'FIRMAN Hybrid Inverter',
    category: 'inverters',
    price: 125000,
    image: '/lovable-uploads/7ece06ef-a33e-440f-b453-9c54105c6569.png',
    description: 'Advanced hybrid inverter with grid-tie capability and seamless switching between solar, battery, and grid power.',
    features: [
      'Pure sine wave output',
      'Grid-tie capability',
      'Battery charging from grid',
      'LCD display with monitoring',
      '2-year warranty'
    ],
    specifications: {
      'Power': '5000W',
      'Input Voltage': '24V/48V',
      'Output': '220V AC',
      'Efficiency': '>95%',
      'Warranty': '2 years'
    },
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    name: 'Super Speed Battery 200Ah',
    category: 'batteries',
    price: 180000,
    image: '/lovable-uploads/4e4de273-5ec6-4178-a898-fd2375f614f2.png',
    description: 'Reliable 12V 200Ah tubular battery designed for deep cycle applications in solar systems.',
    features: [
      'Deep cycle design',
      'Maintenance-free',
      'Long service life',
      'Excellent recovery',
      'Spill-proof construction'
    ],
    specifications: {
      'Voltage': '12V',
      'Capacity': '200Ah',
      'Type': 'AGM',
      'Life': '8-10 years',
      'Warranty': '3 years'
    },
    inStock: true,
    rating: 4.4,
    reviews: 91
  },
  {
    id: '7',
    name: 'Quantum Inverter Battery',
    category: 'batteries',
    price: 95000,
    image: '/lovable-uploads/4814a560-668b-4031-bfd3-6fa52ffb8162.png',
    description: 'High-performance inverter battery with extended backup time for home and office use.',
    features: [
      'Fast charging',
      'Low maintenance',
      'Corrosion resistant',
      'Temperature tolerance',
      'Reliable performance'
    ],
    specifications: {
      'Voltage': '12V',
      'Capacity': '150Ah',
      'Type': 'Tubular',
      'Life': '5-7 years',
      'Warranty': '2 years'
    },
    inStock: false,
    rating: 4.3,
    reviews: 52
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};