export const cityOptions = [
  { value: 'atlanta', label: 'Atlanta' },
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'minneapolis', label: 'Minneapolis'},
  { value: 'nyc', label: 'NYC' },
  { value: 'philadelphia', label: 'Philadelphia' },
  { value: 'portland', label: 'Portland' },
  { value: 'toronto', label: 'Toronto' },
]

export const stateOptions = [
  { value: 'california', label: 'California' },
  { value: 'minnesota', label: 'Minnesota' },
  { value: 'new-york', label: 'New York' },
  { value: 'ontario', label: 'Ontario' },
]

export const countryOptions = [
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
]

export const groupedOptions = [
  {
    label: 'City',
    options: cityOptions,
  },
  {
    label: 'State/Province',
    options: stateOptions,
  },
  {
    label: 'Country',
    options: countryOptions,
  },
];