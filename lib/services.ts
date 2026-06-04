// Service data — single source of truth for all service pages and overview cards

export type Service = {
  slug: string
  name: string
  tagline: string
  description: string
  seoTitle: string
  seoDescription: string
  keyword: string
  h1: string
  features: string[]
  has3D: boolean
  number: string
}

export const services: Service[] = [
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    tagline: 'Permanent gloss and hardened surface protection',
    description:
      'A professional-grade nano-ceramic layer bonded to your paint surface, delivering hydrophobic properties, UV resistance, and a showroom-depth gloss that lasts 3–10 years.',
    seoTitle: 'Ceramic Coating Mississauga | Cosmo Car Customs',
    seoDescription:
      'Professional ceramic coating services in Mississauga and the GTA. Hydrophobic protection, UV resistance, and showroom gloss lasting 3–10 years. 4.9-star rated studio.',
    keyword: 'ceramic coating Mississauga',
    h1: 'Ceramic Coating Services in Mississauga & GTA',
    features: [
      'Long-lasting shine (3–10 years protection)',
      'Resistant to UV rays, bird droppings, and light scratches',
      'Hydrophobic — water beads and rolls off the surface',
      'Enhanced paint depth and gloss',
      'Reduces contamination buildup between washes',
    ],
    has3D: true,
    number: '01',
  },
  {
    slug: 'paint-protection-film',
    name: 'Paint Protection Film',
    tagline: 'Invisible armor for your vehicle\'s finish',
    description:
      'A virtually transparent urethane film installed over painted surfaces, protecting against road chips, stone strikes, scratches, and environmental damage while preserving the original finish.',
    seoTitle: 'Paint Protection Film Mississauga | Cosmo Car Customs',
    seoDescription:
      'Paint protection film (PPF) installation in Mississauga and GTA. Invisible surface armor against chips, scratches, and road debris. 4.9-star rated studio.',
    keyword: 'paint protection film Mississauga',
    h1: 'Paint Protection Film — Invisible Vehicle Defence',
    features: [
      'Protects against stone chips, scratches, and road debris',
      'Self-healing properties under heat',
      'Virtually invisible on the vehicle surface',
      'Compatible with ceramic coating installation',
      'Preserves resale value and original finish',
    ],
    has3D: true,
    number: '02',
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    tagline: 'Surface clarity restored — swirl marks and scratches removed',
    description:
      'A multi-stage paint refinement process that removes swirl marks, oxidation, fine scratches, and water spots, restoring depth and clarity before any protective treatment is applied.',
    seoTitle: 'Paint Correction Mississauga | Cosmo Car Customs',
    seoDescription:
      'Professional paint correction in Mississauga. Swirl mark removal, oxidation correction, and gloss restoration. Preparation for ceramic coating and PPF.',
    keyword: 'paint correction Mississauga GTA',
    h1: 'Paint Correction: Swirl Removal & Gloss Restoration',
    features: [
      'Removes swirl marks, fine scratches, and oxidation',
      'Restores original paint clarity and gloss',
      'Available in 1, 2, or 3-stage correction',
      'Essential surface prep before coating or PPF application',
      'Applied to daily drivers and exotic vehicles',
    ],
    has3D: false,
    number: '03',
  },
  {
    slug: 'window-tinting',
    name: 'Window Tinting',
    tagline: 'UV rejection, heat reduction, and refined privacy',
    description:
      'Premium window film installation reducing solar heat, blocking up to 99% of UV rays, improving cabin privacy, and adding a refined, uniform appearance to the vehicle\'s glass.',
    seoTitle: 'Window Tinting Mississauga | Cosmo Car Customs',
    seoDescription:
      'Professional window tinting in Mississauga and GTA. Block up to 99% UV rays, reduce heat, and improve privacy. 4.9-star rated auto detailing studio.',
    keyword: 'window tinting Mississauga',
    h1: 'Window Tinting for Heat, UV & Privacy',
    features: [
      'Blocks up to 99% of harmful UV rays',
      'Reduces interior heat and solar glare',
      'Improves cabin privacy',
      'Multiple tint shade options available',
      'Ontario-legal tint percentages applied',
    ],
    has3D: false,
    number: '04',
  },
  {
    slug: 'car-detailing',
    name: 'Car Detailing',
    tagline: 'Precision interior and exterior restoration',
    description:
      'A thorough interior and exterior cleaning and conditioning process restoring the vehicle to its best appearance using professional equipment, steam cleaning, and premium product lines.',
    seoTitle: 'Car Detailing Mississauga | Cosmo Car Customs',
    seoDescription:
      'Professional car detailing in Mississauga. Interior vacuum and shampoo, exterior wash and wax, headlight restoration. 4.9-star rated studio.',
    keyword: 'car detailing Mississauga',
    h1: 'Professional Car Detailing — Interior to Exterior',
    features: [
      'Interior vacuum, steam cleaning, and shampoo',
      'Exterior wash, clay bar, and wax or sealant',
      'Headlight restoration and trim dressing',
      'Engine bay cleaning available on request',
      'Available as standalone or bundled with coating/PPF',
    ],
    has3D: false,
    number: '05',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
