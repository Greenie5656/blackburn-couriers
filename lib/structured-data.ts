import { COMPANY, LOCATION, FAQS, SERVICES } from './constants';

// Local Business Schema — tells search engines exactly what this business is,
// where it's located, what it does, and what areas it serves
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CourierService',
    '@id': `https://www.blackburn-couriers.co.uk/#business`,
    name: COMPANY.name,
    alternateName: COMPANY.tradingName,
    description: `Professional same-day courier service covering ${LOCATION.primary}, Darwen, and surrounding areas in ${LOCATION.region}. Collections within 60 minutes. Dedicated, direct delivery — no depots, no delays.`,
    url: 'https://www.blackburn-couriers.co.uk',
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: COMPANY.address.city,
      addressRegion: LOCATION.region,
      postalCode: COMPANY.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.7533,
      longitude: -2.3644,
    },
    areaServed: [
      // Primary areas with detailed coverage
      ...LOCATION.towns.map((town) => ({
        '@type': 'City',
        name: `${town.name}, ${LOCATION.region}`,
      })),
      // Nearby areas
      ...LOCATION.nearbyAreas.map((area) => ({
        '@type': 'City',
        name: `${area}, ${LOCATION.region}`,
      })),
      // Nationwide
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '££',
    image: 'https://www.blackburn-couriers.co.uk/images/A2A Vans.jpg',
    logo: 'https://www.blackburn-couriers.co.uk/images/Logo_Header.png',
    sameAs: [COMPANY.mainSiteUrl],
    parentOrganization: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: COMPANY.mainSiteUrl,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Courier Services',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };
}

// FAQ Schema — this is the one AI search engines love.
// Each Q&A pair becomes a rich result in Google AND a citable
// answer for ChatGPT, Perplexity, Google AI Overviews etc.
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema — helps search engines understand page hierarchy
export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'A2A Couriers',
        item: COMPANY.mainSiteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Couriers in ${LOCATION.primary}`,
        item: 'https://www.blackburn-couriers.co.uk',
      },
    ],
  };
}

// Service Schema — detailed service markup for rich results
export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Same-Day Courier Service',
    provider: {
      '@type': 'CourierService',
      name: COMPANY.name,
      url: 'https://www.blackburn-couriers.co.uk',
    },
    areaServed: {
      '@type': 'City',
      name: `${LOCATION.primary}, ${LOCATION.region}`,
    },
    description: `Same-day courier service in ${LOCATION.primary} and ${LOCATION.region}. Collections within 60 minutes from anywhere in the ${LOCATION.postcodes.join(', ')} postcode areas. Dedicated direct delivery nationwide.`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  };
}

// WebPage Schema — tells AI crawlers what this page is about
export function getWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Same-Day Couriers in ${LOCATION.primary} | ${COMPANY.tradingName}`,
    description: `Professional same-day courier service covering ${LOCATION.primary}, Darwen, and surrounding areas. Collections within 60 minutes. Dedicated, direct delivery.`,
    url: 'https://www.blackburn-couriers.co.uk',
    isPartOf: {
      '@type': 'WebSite',
      name: COMPANY.tradingName,
      url: COMPANY.mainSiteUrl,
    },
    about: {
      '@type': 'CourierService',
      name: COMPANY.name,
      areaServed: `${LOCATION.primary}, ${LOCATION.region}`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.faq-answer'],
    },
  };
}