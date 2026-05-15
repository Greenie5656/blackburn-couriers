// Company Information
export const COMPANY = {
  name: 'A2A Couriers North West Limited',
  tradingName: 'A2A Couriers',
  tagline: 'EXPRESS — SECURE — DIRECT',
  phone: '01254 393030',
  phoneHref: 'tel:01254393030',
  email: 'info@a2acouriers.co.uk',
  emailHref: 'mailto:info@a2acouriers.co.uk',
  mainSiteUrl: 'https://www.a2acouriers.co.uk',
  address: {
    line1: 'Junction 7 Business Park',
    line2: 'Blackburn Road',
    city: 'Accrington',
    postcode: 'BB5 5JW',
    full: 'Junction 7 Business Park, Blackburn Road, Accrington BB5 5JW',
  },
} as const;

// Page-Specific Location Data
export const LOCATION = {
  primary: 'Blackburn',
  region: 'Lancashire',
  description: 'Blackburn, Darwen & surrounding areas',
  postcodes: ['BB1', 'BB2', 'BB3'],
  towns: [
    {
      name: 'Blackburn',
      postcodes: ['BB1', 'BB2'],
      areas: [
        'Blackburn town centre',
      'Shadsworth',
      'Whitebirk',
      'Knuzden',
      'Beardwood',
      'Cherry Tree',
      'Feniscowles',
      'Mill Hill',
      'Witton',
      'Livesey',
      'Pleasington',
      'Mellor',
      'Mellor Brook',
      'Wilpshire',
      'Ramsgreave',
      'Sunnybower',
      'Lammack',
      'Bastwell',
      'Audley',
      'Little Harwood',
      'Intack',
      'Higher Croft',
      'Revidge',
      'Ewood',
      ],
    },
    {
      name: 'Darwen',
      postcodes: ['BB3'],
      areas: [
        'Darwen town centre',
      'Lower Darwen',
      'Hoddlesden',
      'Eccleshill',
      'Tockholes',
      'Pickup Bank',
      'Belmont',
      'Earcroft',
      'Whitehall',
      ],
    },
  ],
  nearbyAreas: [
    'Accrington',
    'Great Harwood',
    'Clayton-le-Moors',
    'Oswaldtwistle',
    'Haslingden',
    'Clitheroe',
    'Whalley',
    'Langho',
    'Preston',
    'Burnley',
    
  ],
} as const;

// Services
export const SERVICES = [
  {
    id: 'same-day',
    title: 'Same-Day Delivery',
    description:
      'Urgent collection and delivery across Blackburn and beyond. We aim to collect within 60 minutes of your call.',
    icon: 'Zap',
  },
  {
    id: 'dedicated',
    title: 'Dedicated Vehicle',
    description:
      'Your parcel travels alone in a dedicated van - no sharing, no depots, no delays. Straight from A to B.',
    icon: 'Truck',
  },
  {
    id: 'nationwide',
    title: 'Nationwide Coverage',
    description:
      'Based locally but delivering nationally. From Blackburn to anywhere in the UK, same-day or next-day.',
    icon: 'MapPin',
  },
  {
    id: 'time-critical',
    title: 'Time-Critical & Urgent',
    description:
      'When deadlines matter. Legal documents, medical supplies, and manufacturing parts delivered on time, every time.',
    icon: 'Clock',
  },
] as const;

// Trust Points
export const TRUST_POINTS = [
  { text: 'Collections within 60 minutes', icon: 'Timer' },
  { text: 'Dedicated direct delivery', icon: 'Route' },
  { text: 'No depots, no delays', icon: 'ShieldCheck' },
  { text: 'Fully insured & tracked', icon: 'Lock' },
  { text: 'Available 24/7', icon: 'Clock' },
  { text: 'Local drivers who know the area', icon: 'MapPinCheck' },
] as const;

// FAQ Data — these are critical for AI search optimisation
export const FAQS = [
  {
    question: 'How quickly can you collect from Blackburn?',
    answer:
      'We aim to collect from anywhere in Blackburn, Darwen, and surrounding BB postcode areas within 60 minutes of your call. Our drivers are based locally so response times are fast.',
  },
  {
    question: 'Do you offer same-day courier services in Blackburn?',
    answer:
      'Yes. Same-day delivery is our core service. Whether you need something collected from Blackburn town centre, Whitebirk Industrial Estate, or anywhere in the BB1, BB2, or BB3 postcode areas, we can collect and deliver the same day.',
  },
  {
    question: 'What areas around Blackburn do you cover?',
    answer:
      'We cover all of Blackburn and Darwen including areas like Rishton, Guide, Mellor, Feniscowles, Cherry Tree, Shadsworth, Hoddlesden, and Tockholes. We also serve nearby towns including Accrington, Great Harwood, Clitheroe, and right across Lancashire. Nationwide delivery is available too.',
  },
  {
    question: 'How much does a same-day courier from Blackburn cost?',
    answer:
      'Every delivery is different so we quote based on distance, vehicle size, and urgency. Give us a call on 01254 393030 or use the enquiry form for a quick, no-obligation quote.',
  },
  {
    question: 'What size vehicles do you have available?',
    answer:
      'We operate a range of vehicles from small vans for documents and parcels, through to Sprinter vans, Luton vans with tail lifts, and curtain-side vehicles for larger loads. Haulage options are available on request.',
  },
  {
    question: 'Do my parcels go through a depot or sorting centre?',
    answer:
      'No. Every delivery is dedicated and direct. Your item is collected and delivered straight to the destination in the same vehicle. No depots, no transfers, no delays.',
  },
  {
    question: 'Can you deliver from Blackburn to anywhere in the UK?',
    answer:
      'Yes. While we are based locally in Lancashire, we provide nationwide same-day and next-day courier services. We regularly deliver from Blackburn to London, Manchester, Birmingham, Edinburgh, and everywhere in between.',
  },
  {
    question: 'Are you available outside normal business hours?',
    answer:
      'Yes, we operate 24/7 including evenings, weekends, and bank holidays. Time-critical deliveries do not wait for office hours and neither do we.',
  },
] as const;