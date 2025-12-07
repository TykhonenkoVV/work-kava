export const sizes = {
  onlymobile: '1023',
  mobile: '414',
  tablet: '1024',
  desktop: '1440'
};

export const devices = {
  onlymobile: `max-width: ${sizes.onlymobile}px`,
  mobile: `min-width: ${sizes.mobile}px`,
  tablet: `min-width: ${sizes.tablet}px`,
  desktop: `min-width: ${sizes.desktop}px`,
  retina: 'min-device-pixel-ratio: 2'
};

export const theme = Object.freeze({
  colors: {
    primary: '#1B253F',
    white: '#FFFFFF',
    accent: '#DCA135',
    price_bgr: '#B9811A',

    beige: '#E2D0AE',
    darkBeige: '#7E7262', // decorative elements
    darkBeigeDecor: 'rgba(126, 114, 98, 0.40)', // decorative beige elements with opacity
    lightBeige: '#CECECE', // decorative elements on coworking page

    gray: '#3C3F4A', //on dark section decorative elements
    extraLightGray: 'rgba(255, 255, 255, 0.40)', //on hero and fastfood decorative elements
    lightGray: 'rgba(255, 255, 255, 0.50)', //decorative elements on coworking page
    darkGray: '#656565', //placeholderFooter, icons and placeholder on forms

    lightBlue: '#3C4F82', //fastfood and cafe pages

    headerBackground: '#000000',

    darkButtonHover: '#3C4F82',
    whiteButtonHover: '#E2D0AE',

    darkFastfoodBackground: 'rgba(27, 37, 63, 0.80)',
    lightFastfoodBackground: 'rgba(255, 255, 255, 0.80)',

    backdrop: 'rgba(0, 0, 0, 0.40)',

    validationError: '#ED4337',

    lightSectionBefore: '#A2A2A2',
    darkSectionBefore: '#b6b6b8ff',
    firstSectionBackground: '#302305',
    secondSectionBackground: '#857661',
    thirdSectionBackground: '#e2d0ae'
  },

  sizes,

  useWebp: document.querySelector('html').classList.contains('webp'),

  devices,

  baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  heroLinerGradient: '90deg, rgba(27, 37, 63, 0.6), rgba(27, 37, 63, 0.6)',
  beigeRadialGradient:
    'radial-gradient(148.54% 120.77% at 100% 0%, #5E4943 0%, #857661 100%)', // cafe page
  lightBeigeRadialGradient:
    'radial-gradient(258.19% 141.42% at 0% 0%, #e2d0ae 0%, rgba(226, 208, 174, 0) 100%)', // cafe page
  darklinerGradient: 'rgba(27, 37, 63,0.80), rgba(27, 37, 63, 0.80)',
  lightlinerGradient: 'rgba(255, 255, 255, 0.80), rgba(255, 255, 255, 0.80)'
});
