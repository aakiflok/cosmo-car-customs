export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Cosmo Car Customs',
    description: 'Premium vehicle detailing, ceramic coating, paint correction, paint protection film, and window tinting in Mississauga and the GTA.',
    url: 'https://cosmocarcustoms.com',
    telephone: '+1-905-971-8186',
    address: { '@type': 'PostalAddress', streetAddress: '1380 Cardiff Blvd Unit 9', addressLocality: 'Mississauga', addressRegion: 'ON', postalCode: 'L5S 1P9', addressCountry: 'CA' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '250', bestRating: '5' },
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '18:00' }],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    provider: { '@type': 'LocalBusiness', name: 'Cosmo Car Customs', url: 'https://cosmocarcustoms.com' },
    areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.6532, longitude: -79.3832 }, geoRadius: '50000' },
    url,
  };
}
