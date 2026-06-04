// Real-feel review data for Cosmo Car Customs
// Replace with actual fetched Google reviews in production

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
    name: 'Michael T.',
    initials: 'MT',
    rating: 5,
    date: 'April 2025',
    service: 'Ceramic Coating',
    body: 'The finish they achieved on my M3 was beyond what I expected. The ceramic coating has an incredible depth to it and the water beading is remarkable.',
  },
  {
    id: 'r2',
    name: 'Priya S.',
    initials: 'PS',
    rating: 5,
    date: 'March 2025',
    service: 'Paint Protection Film',
    body: 'Had PPF installed on the full front end. The film is completely invisible and gives me total peace of mind driving on the 401. Professional and honest team.',
  },
  {
    id: 'r3',
    name: 'David R.',
    initials: 'DR',
    rating: 5,
    date: 'February 2025',
    service: 'Paint Correction',
    body: 'The swirl marks on my Audi were driving me crazy. After a 2-stage correction the paint looks like it just came off the assembly line. Excellent work.',
  },
  {
    id: 'r4',
    name: 'Jason K.',
    initials: 'JK',
    rating: 5,
    date: 'January 2025',
    service: 'Window Tinting',
    body: 'Clean install, no bubbles, the shade is exactly what I asked for. The shop is organized and Rajinder explained the whole process clearly.',
  },
  {
    id: 'r5',
    name: 'Fatima A.',
    initials: 'FA',
    rating: 5,
    date: 'December 2024',
    service: 'Full Detail',
    body: 'I handed over a very dirty car and got back something that looked brand new. Interior shampoo was thorough and the exterior gloss was impressive.',
  },
]
