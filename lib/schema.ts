// JSON-LD structured data for Cosmo Car Customs
// LocalBusiness + Service schemas for SEO

const BASE_URL = 'https://cosmocarcustoms.com'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cosmo Car Customs',
    description:
      'Premium auto detailing, ceramic coating, paint protection film, window tinting, and paint correction studio in Mississauga, GTA.',
    url: BASE_URL,
    telephone: '+19059718186',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1380 Cardiff Blvd Unit 9',
      addressLocality: 'Mississauga',
      addressRegion: 'ON',
      postalCode: 'L5S 1P9',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.7624,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: ['https://www.instagram.com/cosmocarcustoms/'],
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Cosmo Car Customs',
      url: BASE_URL,
    },
    url,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.6532, longitude: -79.7624 },
      geoRadius: '50000',
    },
  }
}
