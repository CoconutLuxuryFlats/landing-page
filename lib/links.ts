export const PROPERTY_LINKS = {
  barcelona: {
    rent: 'https://www.idealista.com/pro/coconut-luxury-flats/alquiler-viviendas/barcelona-barcelona/?ordenado-por=precios-desc',
    sale: 'https://www.idealista.com/pro/coconut-luxury-flats/venta-viviendas/barcelona-barcelona/?ordenado-por=precios-desc',
  },
  madrid: {
    rent: '',
    sale: '',
  },
} as const

export const COMPANY = {
  name: 'COCONUT LUXURY FLATS',
  phone: '+34 699 00 80 71',
  whatsapp: 'https://wa.me/34699008071',
  email: 'admin@coconutluxuryflats.com',
  instagram: 'https://instagram.com/coconut_luxury_flats',
} as const

export const LOGO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JPrsEK25chenttihUSDYwIVtofYOqq.png'

export const SITE_CONFIG = {
  companyName: 'COCONUT LUXURY FLATS',
  slogan: 'WE HELP YOU TO CREATE YOUR NEW REALITY',
  markets: ['Barcelona', 'Madrid'],
  address: { street: 'Rambla Catalunya 125', postalCode: '08008', city: 'Barcelona', country: 'España' },
} as const

export const propertyLink = (city: 'barcelona' | 'madrid', type: 'rent' | 'sale') => PROPERTY_LINKS[city][type]
