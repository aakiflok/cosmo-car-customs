export const SERVICES = [
  {
    slug: 'ceramic-coating',
    number: '01',
    name: 'Ceramic Coating',
    tagline: 'Showroom gloss. Years of protection.',
    description: 'A nano-ceramic polymer layer bonds permanently to your paint, creating a hydrophobic barrier that repels water, blocks UV rays, and delivers a mirror-like finish lasting 3–10 years. No wax needed — the protection is built into the surface itself.',
    outcome: 'Long-lasting hydrophobic shine, UV defence, and chemical resistance for daily drivers to exotics. Your car stays cleaner, longer.',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Single Layer', duration: '3–5 years', includes: ['Full paint decontamination', 'Clay bar treatment', '1 coat professional ceramic', 'Hydrophobic sealant top coat', 'Paint inspection report'] },
      { name: 'Multi-Layer', duration: '7–10 years', includes: ['Full paint decontamination', 'Clay bar treatment', '2–3 coats ceramic stacked', 'Self-healing clear layer', 'Annual maintenance check'] },
    ],
    faqs: [
      { q: 'How long does ceramic coating last?', a: 'Professionally applied ceramic coatings last 3–10 years depending on the product tier and maintenance. We use Gyeon and Gtechniq products which are among the most durable on the market.' },
      { q: 'Does my car need paint correction first?', a: 'Yes. Any swirl marks or scratches must be corrected before coating — otherwise they are permanently sealed under the layer. We always assess paint condition before recommending a path.' },
    ]
  },
  {
    slug: 'paint-protection-film',
    number: '02',
    name: 'Paint Protection Film',
    tagline: 'Invisible armour for your finish.',
    description: 'A transparent self-healing urethane film physically shields your paint from rock chips, scratches, road debris, and bug acid. Unlike ceramic coating, PPF provides a mechanical barrier — it takes the hit so your paint does not have to.',
    outcome: 'Physical chip and scratch protection on front bumper, hood, mirrors, and full vehicle — completely invisible once installed.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Partial Front', duration: 'Lifetime*', includes: ['Front bumper', 'Partial hood (24")', 'Mirror caps', 'A-pillars'] },
      { name: 'Full Front', duration: 'Lifetime*', includes: ['Full bumper', 'Full hood', 'Full fenders', 'Side mirrors', 'Headlights'] },
      { name: 'Full Vehicle', duration: 'Lifetime*', includes: ['Complete coverage all panels', 'All painted surfaces', 'Door cups & edges', 'Roof and pillars'] },
    ],
    faqs: [
      { q: 'Is PPF visible on dark cars?', a: 'No. Properly installed PPF is optically clear. With gloss film on a dark vehicle, the panel edge is virtually invisible under normal lighting and distance.' },
      { q: 'Can PPF be combined with ceramic coating?', a: 'Yes — this is our recommended stack. PPF installed first, then ceramic coated on top, gives you physical impact protection plus hydrophobic self-cleaning properties.' },
    ]
  },
  {
    slug: 'paint-correction',
    number: '03',
    name: 'Paint Correction',
    tagline: 'Restore clarity. Prepare for protection.',
    description: 'Machine polishing with professional compounds removes swirl marks, fine scratches, oxidation, water spots, and buffer trails — restoring the depth and gloss your paint had when it left the factory. Essential before any ceramic or PPF application.',
    outcome: 'A scratch-free, optically clear surface with restored paint depth and gloss — ready for coating or simply stunning on its own.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Single Stage', duration: 'One-time', includes: ['Decontamination wash', 'Light swirl removal', 'Polish and refine', 'Paint depth inspection'] },
      { name: 'Two Stage', duration: 'One-time', includes: ['Decontamination wash', 'Compound cut stage', 'Final polish refine', '80–90% defect removal'] },
      { name: 'Three Stage', duration: 'One-time', includes: ['Full multi-stage process', 'Heavy compound cut', 'Mid-stage refine', 'Final glaze', '95%+ defect removal'] },
    ],
    faqs: [
      { q: 'Can paint correction fix all scratches?', a: 'Paint correction removes the vast majority of surface scratches and swirls. Deep scratches that penetrate the clear coat or base coat may require touch-up paint — we will always tell you honestly what can and cannot be corrected.' },
    ]
  },
  {
    slug: 'window-tinting',
    number: '04',
    name: 'Window Tinting',
    tagline: 'Style, privacy, and UV protection.',
    description: 'High-quality SunTek and 3M window film reduces cabin heat by up to 60%, blocks up to 99% of UV rays, and adds a refined, private aesthetic to any vehicle — from a barely-there 70% to a full limo-dark 5%.',
    outcome: 'Cooler cabin, UV skin and interior protection, enhanced privacy, and a sharper vehicle silhouette.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Rear Windows', duration: 'Lifetime', includes: ['All rear side glass', 'Rear windshield', 'Shade of your choice', 'Bubble-free install'] },
      { name: 'Full Vehicle', duration: 'Lifetime', includes: ['All windows', 'Windshield strip', 'Front doors (legal shade)', 'All rear glass'] },
    ],
    faqs: [
      { q: 'What shade options are available?', a: 'We offer 5% (limo), 15%, 20%, 35%, and 50% shades for rear glass. Ontario law requires front side windows to be 70% or higher — we will advise you on legal compliance.' },
      { q: 'How long does a tint job take?', a: 'A full vehicle tint typically takes 2–3 hours. Rear window only is about 1 hour. We recommend leaving the windows up for 24–48 hours after installation.' },
    ]
  },
  {
    slug: 'car-detailing',
    number: '05',
    name: 'Car Detailing',
    tagline: 'Deep clean. Head to toe.',
    description: 'A thorough interior and exterior detailing service that removes embedded dirt, salt stains, odours, and contamination from every surface. We don\'t rush the process — every detail is handled carefully so you get back a car that looks and smells like new.',
    outcome: 'Deep-cleaned interior and exterior with spot treatment, decontamination wash, leather conditioning, and odour elimination.',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Exterior Detail', duration: 'One-time', includes: ['Decontamination hand wash', 'Clay bar treatment', 'Tire and trim dressing', 'Glass cleaning and polish'] },
      { name: 'Interior Detail', duration: 'One-time', includes: ['Full vacuum all surfaces', 'Steam clean carpets and mats', 'Leather conditioning', 'Deodorize and air sanitize'] },
      { name: 'Full Detail', duration: 'One-time', includes: ['Complete interior + exterior', 'Salt stain removal', 'Headlight restoration', 'Engine bay clean'] },
    ],
    faqs: [
      { q: 'How long does a full detail take?', a: 'A full interior and exterior detail typically takes 4–6 hours depending on vehicle size and condition. We never rush — quality is more important than clock time.' },
      { q: 'Can you remove salt stains from the interior?', a: 'Yes. Salt stain removal from carpets and mats is part of our full detail service. We use steam cleaning and professional extraction to get the results that a regular car wash cannot.' },
    ]
  },
  {
    slug: 'headlight-restoration',
    number: '06',
    name: 'Headlight Restoration',
    tagline: 'See clearly. Look sharp.',
    description: 'Yellowed, cloudy, or oxidized headlights reduce your road visibility and make your car look years older than it is. Our multi-step wet sand and polish process restores full clarity and optical output — then seals with a UV-resistant coating to prevent re-yellowing.',
    outcome: 'Crystal-clear headlights that look brand new, with improved night visibility and a UV sealant to maintain results for 2+ years.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    packages: [
      { name: 'Single Restoration', duration: '2+ years', includes: ['Multi-step wet sand', 'Machine polish and refine', 'UV sealant coat', 'Both headlights included'] },
    ],
    faqs: [
      { q: 'How long does headlight restoration last?', a: 'With our UV sealant applied at the end of the process, results last 2+ years. Without sealant, oxidation can return within months — we always include the sealant step.' },
    ]
  },
];

export const REVIEWS = [
  { name: 'Navdeep Chahal',       rating: 5, service: 'Car Detailing',         body: 'Exceptional professionalism and attention to detail. Truly exceeded my expectations — my car has never looked this clean.' },
  { name: 'Harvinder Singh',      rating: 5, service: 'Full Detail',            body: 'Looks brand new inside and out. The shine is absolutely unreal. Pranav and the team crushed it.' },
  { name: 'Tejinder Bhullar',     rating: 5, service: 'Headlight Restoration',  body: 'Took out all the salt stains and the headlight restoration made them look brand new. Couldn\'t believe the difference.' },
  { name: 'Manjot Singh Pawar',   rating: 5, service: 'Paint Correction',       body: 'Ramandeep Singh\'s dedication and skill really stood out. He even gave me tips on maintaining the shine at home.' },
  { name: 'Apex Contents',        rating: 5, service: 'Car Detailing',          body: 'Randeep Singh cleaned our vehicle to the minute of details. Every corner, every surface — absolutely spotless.' },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Private Consultation', body: 'A short guided intake qualifies your vehicle, finish goals, condition, and timing — so we come prepared and never waste your time.' },
  { number: '02', title: 'Vehicle Assessment', body: 'Our team evaluates paint condition, protection goals, and recommends the right service path — correction, coating, film, or bundle. No upselling, just honest advice.' },
  { number: '03', title: 'Precision Execution', body: 'We don\'t rush the process — every detail is handled carefully with professional-grade products and a thorough quality inspection before delivery.' },
];

export const BUSINESS = {
  name: 'Cosmo Car Customs',
  tagline: 'Premium Vehicle Protection Studio',
  phone: '905-971-8186',
  phone2: '647-643-0187',
  address: '1380 Cardiff Blvd, Unit 9, Mississauga, ON L5S 1P9',
  hours: 'Mon–Sat: 8am – 6pm',
  email: 'info@cosmocarcustoms.com',
  googleRating: '4.9',
  reviewCount: '250+',
  yearsExperience: '5+',
  instagram: 'https://www.instagram.com/cosmocarcustoms/',
  website: 'https://cosmocarcustoms.com',
  team: [
    { name: 'Pranav',           role: 'Lead Detailer' },
    { name: 'Ramandeep Singh',  role: 'Paint Correction Specialist' },
    { name: 'Randeep Singh',    role: 'Detailing Specialist' },
  ],
};
