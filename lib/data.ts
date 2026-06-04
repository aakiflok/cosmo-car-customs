export const SERVICES = [
  {
    slug: 'ceramic-coating',
    number: '01',
    name: 'Ceramic Coating',
    tagline: 'Showroom gloss. Years of protection.',
    description: 'A nano-ceramic layer bonds permanently to your paint, delivering hydrophobic protection, UV resistance, and a mirror-like finish that lasts 3–10 years.',
    outcome: 'Long-lasting shine, hydrophobic protection, and UV defence for daily drivers to exotics.',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Single Layer', duration: '3–5 years', includes: ['Full paint decontamination','1 coat ceramic','Hydrophobic sealant'] },
      { name: 'Multi-Layer', duration: '7–10 years', includes: ['Full paint decontamination','2–3 coats ceramic','Self-healing clear'] },
    ],
    faqs: [
      { q: 'How long does ceramic coating last?', a: 'Professionally applied ceramic coatings last 3–10 years depending on the product tier and how the vehicle is maintained.' },
      { q: 'Does my car need paint correction first?', a: 'Yes. Any swirl marks or scratches must be corrected before coating — otherwise they are permanently sealed under the layer.' },
    ]
  },
  {
    slug: 'paint-protection-film',
    number: '02',
    name: 'Paint Protection Film',
    tagline: 'Invisible armour for your finish.',
    description: 'A self-healing urethane film shields your paint from rock chips, scratches, and road debris while remaining completely invisible on the surface.',
    outcome: 'Physical chip and scratch protection on front bumper, hood, mirrors, and full vehicle wraps.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Partial Front', duration: 'Lifetime*', includes: ['Bumper','Partial hood','Mirror caps'] },
      { name: 'Full Front', duration: 'Lifetime*', includes: ['Full bumper','Full hood','Full fenders','Mirrors'] },
      { name: 'Full Vehicle', duration: 'Lifetime*', includes: ['Complete coverage','All painted surfaces'] },
    ],
    faqs: [
      { q: 'Is PPF visible on dark cars?', a: 'No. Properly installed PPF is optically clear and invisible to normal inspection.' },
      { q: 'Can PPF be combined with ceramic coating?', a: 'Yes — PPF installed first, then ceramic coated on top, delivers the best overall protection system.' },
    ]
  },
  {
    slug: 'paint-correction',
    number: '03',
    name: 'Paint Correction',
    tagline: 'Restore clarity. Prepare for protection.',
    description: 'Machine polishing removes swirl marks, fine scratches, oxidation, and water spots — restoring the depth and gloss your paint had when new.',
    outcome: 'Scratch-free surface ready for ceramic coating or PPF, with restored paint clarity and gloss.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Single Stage', duration: 'One-time', includes: ['Light swirl removal','Polish and refine'] },
      { name: 'Two Stage', duration: 'One-time', includes: ['Compound cut','Final polish','80–90% defect removal'] },
      { name: 'Three Stage', duration: 'One-time', includes: ['Full multi-stage correction','95%+ defect removal'] },
    ],
    faqs: [
      { q: 'Can paint correction fix all scratches?', a: 'Paint correction removes most surface scratches and swirl marks. Deep scratches that go through the paint layer may require touch-up paint or PPF.' },
    ]
  },
  {
    slug: 'window-tinting',
    number: '04',
    name: 'Window Tinting',
    tagline: 'Style, privacy, and UV protection.',
    description: 'High-quality SunTek window film reduces heat, blocks up to 99% of UV rays, and enhances the silhouette of any vehicle — from subtle to blacked-out.',
    outcome: 'Cooler cabin, UV skin protection, privacy, and a refined vehicle profile.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Rear Windows', duration: 'Lifetime', includes: ['All rear glass','Shade of choice'] },
      { name: 'Full Vehicle', duration: 'Lifetime', includes: ['All windows','Windshield strip','All shades'] },
    ],
    faqs: [
      { q: 'What shade options are available?', a: 'We offer a range from 5% (limo) to 70% (barely visible). Legal front windows in Ontario must be 70% or higher.' },
    ]
  },
  {
    slug: 'car-detailing',
    number: '05',
    name: 'Car Detailing',
    tagline: 'Deep clean. Head to toe.',
    description: 'Interior and exterior detailing removes embedded dirt, stains, odours, and contamination — returning your vehicle to a clean, protected, and showroom-ready state.',
    outcome: 'Deep-cleaned interior and exterior with spot treatment, decontamination, and protection.',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Exterior Detail', duration: 'One-time', includes: ['Hand wash','Clay bar','Tire dressing','Glass clean'] },
      { name: 'Interior Detail', duration: 'One-time', includes: ['Vacuum','Steam clean','Leather condition','Deodorize'] },
      { name: 'Full Detail', duration: 'One-time', includes: ['Interior + Exterior combined','Headlight restoration','Engine bay'] },
    ],
    faqs: [
      { q: 'How long does a full detail take?', a: 'A full interior and exterior detail typically takes 4–6 hours depending on vehicle size and condition.' },
    ]
  },
];

export const REVIEWS = [
  { name: 'Marcus T.', rating: 5, service: 'Ceramic Coating', body: 'The finish on my BMW after the multi-layer ceramic is genuinely jaw-dropping. The water just sheets off. Worth every dollar.' },
  { name: 'Priya S.', rating: 5, service: 'Paint Correction + PPF', body: 'Rajinder took care of my Audi like it was his own. The correction before PPF made such a visible difference. Highly recommend.' },
  { name: 'James O.', rating: 5, service: 'Window Tinting', body: 'Clean install, no bubbles, perfectly aligned. My car looks so much sharper with the tint.' },
  { name: 'Neha K.', rating: 5, service: 'Full Detail', body: 'My interior was a disaster after winter. They returned it looking better than the day I picked it up from the dealership.' },
  { name: 'Alex R.', rating: 5, service: 'Ceramic Coating', body: 'Professional from start to finish. They explained every step, no upselling, just real expertise.' },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Private Consultation', body: 'A short guided intake qualifies your vehicle, finish goals, condition, and timing before we connect for an appointment.' },
  { number: '02', title: 'Vehicle Assessment', body: 'Our team evaluates the paint condition, protection goals, and recommends the right service path — correction, coating, film, or bundle.' },
  { number: '03', title: 'Precision Execution', body: 'Every step is performed with professional-grade products, clean technique, and thorough quality inspection before delivery.' },
];

export const BUSINESS = {
  name: 'Cosmo Car Customs',
  tagline: 'Premium Vehicle Protection Studio',
  phone: '905-971-8186',
  phone2: '647-643-0187',
  address: '1380 Cardiff Blvd, Unit 9, Mississauga, ON L5S 1P9',
  googleRating: '4.9',
  reviewCount: '250+',
  yearsExperience: '5+',
  instagram: 'https://www.instagram.com/cosmocarcustoms/',
  website: 'https://cosmocarcustoms.com',
};
