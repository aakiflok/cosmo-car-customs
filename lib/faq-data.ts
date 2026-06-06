export interface FAQCategory {
  category: string;
  icon?: string;
  faqs: {
    q: string;
    a: string;
  }[];
}

export const FAQ_DATA: FAQCategory[] = [
  {
    category: 'Ceramic Coating',
    icon: 'shield',
    faqs: [
      {
        q: 'How long does ceramic coating last?',
        a: 'Professional ceramic coatings last 3-10 years depending on the product tier and maintenance. We recommend annual inspections and maintenance washes to maximize lifespan.',
      },
      {
        q: 'Does my car need paint correction first?',
        a: 'Yes. Any swirl marks or scratches must be corrected before coating - otherwise they are permanently sealed under the ceramic layer.',
      },
      {
        q: 'How often should I wash my car after coating?',
        a: 'We recommend washing every 1-2 weeks with a pH-neutral shampoo. Avoid automatic car washes and high-pressure washers that can damage the coating.',
      },
      {
        q: 'Can ceramic coating be removed?',
        a: 'Ceramic coatings are permanent. If you want a different coating applied later, the old one cannot be fully removed - new coatings will bond over the existing layer.',
      },
      {
        q: 'Is ceramic coating worth it?',
        a: 'Yes. Ceramic coating protects your paint from UV rays, oxidation, and minor scratches. It also reduces maintenance and keeps your car looking new for years.',
      },
      {
        q: 'Can I apply ceramic coating myself?',
        a: 'DIY ceramic coatings have lower quality and durability. Professional installation ensures proper surface prep, application, and longevity. We recommend professional application.',
      },
      {
        q: 'Will ceramic coating protect against rock chips?',
        a: 'No. Ceramic coating protects against oxidation and minor scratches, but not against physical damage. For chip protection, use Paint Protection Film (PPF).',
      },
      {
        q: 'Can ceramic coating and PPF be combined?',
        a: 'Yes - this is our most recommended setup. PPF installed first (for chip protection), then ceramic coated on top (for hydrophobic gloss and UV protection).',
      },
    ],
  },
  {
    category: 'Paint Protection Film',
    icon: 'armor',
    faqs: [
      {
        q: 'Is PPF visible on dark cars?',
        a: 'No. Properly installed PPF is optically clear and invisible to normal inspection. You will not notice it unless you look very closely.',
      },
      {
        q: 'Does PPF turn yellow over time?',
        a: 'High-quality PPF like XPEL and LLumar does not yellow. Low-quality films may yellow after 3-5 years, which is why professional-grade materials matter.',
      },
      {
        q: 'How is PPF removed?',
        a: 'PPF can be removed using heat and careful peeling. Professional removal leaves no residue. Attempting DIY removal may damage paint.',
      },
      {
        q: 'How long does PPF last?',
        a: 'Premium PPF is designed to last 10+ years. We provide lifetime warranty on XPEL and LLumar installations.',
      },
      {
        q: 'Can PPF self-heal?',
        a: 'Yes. PPF contains a self-healing layer that closes minor scratches and swirl marks using heat (sunlight or blow-dry method).',
      },
      {
        q: 'Is partial front PPF worth it?',
        a: 'Yes. Partial front (bumper + hood + mirrors) protects the most vulnerable areas and costs less than full coverage.',
      },
      {
        q: 'Does PPF need maintenance?',
        a: 'Minimal. Wash gently with pH-neutral soap. Avoid clay bar on PPF edges and use a ceramic coating on top for optimal protection.',
      },
    ],
  },
  {
    category: 'Paint Correction',
    icon: 'paint',
    faqs: [
      {
        q: 'Can paint correction fix all scratches?',
        a: 'Paint correction removes surface scratches and swirl marks by polishing. Deep scratches that go through the clear coat may not be fully correctable.',
      },
      {
        q: 'How much paint is removed during correction?',
        a: 'Minimal - typically 10-20 microns depending on severity. A standard car has 100+ microns of clear coat, so professional correction is safe.',
      },
      {
        q: 'What is the difference between 1-stage, 2-stage, and 3-stage correction?',
        a: '1-stage: Light scratches only. 2-stage: Medium defects (80-90% removal). 3-stage: Severe defects (95%+ removal). More stages equals longer process but better results.',
      },
      {
        q: 'How long does paint correction take?',
        a: 'Depends on severity. Single-stage takes 1 day, two-stage takes 1.5 days, three-stage takes 2+ days. We provide time estimates during consultation.',
      },
      {
        q: 'Is paint correction necessary before ceramic coating?',
        a: 'Highly recommended. Coating a scratched surface seals those defects permanently. Correction first, then coating, gives the best final result.',
      },
    ],
  },
  {
    category: 'Window Tinting',
    icon: 'window',
    faqs: [
      {
        q: 'Is window tinting legal in Ontario?',
        a: 'Yes, with limits. Front windows must allow 65%+ light transmission (legal tint). Rear windows can be any darkness. We apply legal tints that pass inspection.',
      },
      {
        q: 'Does tinting affect visibility at night?',
        a: 'No. Professional tint does not significantly reduce night visibility. Light transmission refers to daytime - night driving is unaffected.',
      },
      {
        q: 'How long does window tint last?',
        a: 'Quality films last 5-10+ years. We use SunTek and ceramic films that resist fading and bubbling. Warranty covers defects for 5 years.',
      },
      {
        q: 'Can tinted windows be removed?',
        a: 'Yes. Professional removal uses heat and careful scraping. DIY removal may damage windows or seals. We recommend professional removal.',
      },
      {
        q: 'Will tinting void my warranty?',
        a: 'No. Professional tinting does not void manufacturer warranties. However, dark tint may conflict with certain factory features (check your manual).',
      },
      {
        q: 'What tint shade should I choose?',
        a: 'We recommend 50% for rear windows and legal 65% for fronts (Ontario). Darker tint offers more privacy and heat reduction but may affect visibility.',
      },
    ],
  },
  {
    category: 'Booking & Service',
    icon: 'calendar',
    faqs: [
      {
        q: 'How do I book a consultation?',
        a: 'Visit our Consultation page, fill out your vehicle details, and select your preferred service. We will contact you within 24 hours to confirm.',
      },
      {
        q: 'What should I bring to my appointment?',
        a: 'Bring your keys, vehicle registration, and any specific concerns about your paint. Your vehicle should be clean (not dirty, but not freshly washed).',
      },
      {
        q: 'How long does a typical service take?',
        a: 'Ceramic: 1-3 days. PPF: 1-2 days. Paint correction: 1-2 days. Tinting: 3-6 hours. We provide detailed timelines during consultation.',
      },
      {
        q: 'Do you offer mobile services?',
        a: 'Our main studio is in Mississauga. Mobile services may be available for large projects - contact us to inquire.',
      },
      {
        q: 'Can I drop off my car?',
        a: 'Yes. We offer drop-off service. We are located in Mississauga and open Monday-Saturday, 9am-6pm. Please call ahead to arrange drop-off.',
      },
      {
        q: 'What is your payment policy?',
        a: 'We accept all major credit cards, e-transfer, and bank transfer. A 50% deposit is required to confirm booking; balance due on completion.',
      },
      {
        q: 'Do you have warranty coverage?',
        a: 'Yes. All services include 5-year warranty. Ceramic coating and PPF warranties are transferable to new owners.',
      },
    ],
  },
  {
    category: 'Aftercare & Maintenance',
    icon: 'care',
    faqs: [
      {
        q: 'How do I care for my ceramic coating?',
        a: 'Wash every 1-2 weeks with pH-neutral soap. Use microfiber towels to dry. Avoid automatic washes and high-pressure sprays. Maintenance spray every 6 months recommended.',
      },
      {
        q: 'What shampoo should I use?',
        a: 'Use pH-neutral automotive shampoos specifically designed for coated vehicles. Household soaps can strip the coating. We recommend Gyeon and IGL products.',
      },
      {
        q: 'Can I use clay bar on a coated vehicle?',
        a: 'No. Clay bar can damage ceramic coating. Instead, use a coating-safe iron remover or maintenance spray.',
      },
      {
        q: 'How often should I get a maintenance wash?',
        a: 'Every 1-2 weeks for coated vehicles. This prevents contamination buildup. In winter, wash more frequently due to salt and sand.',
      },
      {
        q: 'Can I wax over ceramic coating?',
        a: 'Not recommended. Ceramic coating replaces wax. Applying wax over ceramic coating reduces effectiveness. Use ceramic maintenance spray instead.',
      },
      {
        q: 'What do I do if my coating gets damaged?',
        a: 'Minor scratches can be repaired with touch-up coating. Major damage may require recoating of affected area. Contact us for assessment.',
      },
      {
        q: 'Is winter care different for coated vehicles?',
        a: 'Yes. Wash more frequently to remove salt and sand. Use winter-specific shampoos. Apply maintenance spray after each wash for optimal protection.',
      },
    ],
  },
];
