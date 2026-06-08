// Real Google reviews sourced from cosmocarcustoms.com

export type Review = {
  id: string
  name: string
  initials: string
  rating: number
  date: string
  service: string
  body: string
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Navdeep Chahal',
    initials: 'NC',
    rating: 5,
    date: '2024',
    service: 'Car Detailing',
    body: 'Exceptional professionalism and attention to detail. The team at Cosmo Car Customs truly exceeded my expectations. My car has never looked this clean — inside and out.',
  },
  {
    id: 'r2',
    name: 'Harvinder Singh',
    initials: 'HS',
    rating: 5,
    date: '2024',
    service: 'Full Detail',
    body: 'Pranav and the team did an unreal job. The car looks brand new inside and out — the shine is absolutely incredible. Will not be going anywhere else.',
  },
  {
    id: 'r3',
    name: 'Tejinder Bhullar',
    initials: 'TB',
    rating: 5,
    date: '2024',
    service: 'Full Detail + Headlight Restoration',
    body: 'They took out all the salt stains and the headlight restoration made them look brand new. Couldn\'t believe the difference. Highly recommend Cosmo Car Customs.',
  },
  {
    id: 'r4',
    name: 'Manjot Singh Pawar',
    initials: 'MP',
    rating: 5,
    date: '2024',
    service: 'Paint Correction',
    body: 'Ramandeep Singh\'s dedication and skill really stood out. He even took the time to give me tips on maintaining the shine at home. Professional from start to finish.',
  },
  {
    id: 'r5',
    name: 'Apex Contents Solution',
    initials: 'AC',
    rating: 5,
    date: '2024',
    service: 'Car Detailing',
    body: 'Randeep Singh cleaned our vehicle to the minute of details. Every corner, every surface — absolutely spotless. The attention to detail is second to none.',
  },
  {
    id: 'r6',
    name: 'Uzair Arif',
    initials: 'UA',
    rating: 5,
    date: '2024',
    service: 'Car Detailing',
    body: 'Perfect job on my Accord 2015 Touring. The team was professional, the results were flawless, and the whole experience was smooth from booking to pickup.',
  },
]
