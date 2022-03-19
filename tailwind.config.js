module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      bellefair: ['Bellefair', 'serif'],
      barlow: ['Barlow', 'sans-serif'],
      barlowCondensed: ['Barlow Condensed', 'sans-serif']
    },
    extend: {
      screens: {
        'tablet': '498px'
      },
      fontSize: {
        '6xl': '3.5rem',
        'xxl': '9.375rem'
      },
      colors: {
        'dark-gray': '#000203',
        'dark-blue': '#383B4B',
        'dark-blue-2': '#0B0D17',
        'light-blue': '#D0D6F9'
      },
      backgroundImage: {
        // Shared
        'logo': "url('/public/assets/shared/logo.svg')",
        'icon-hamburger': "url('/public/assets/shared/icon-hamburger.svg')",
        'icon-close': "url('/public/assets/shared/icon-close.svg')",
        // Landing Page
        'landing-page-mobile': "url('/public/assets/home/background-home-mobile.png')",
        'landing-page-tablet': "url('/public/assets/home/background-home-tablet.png')",
        'landing-page-desktop': "url('/public/assets/home/background-home-desktop.png')",
        // Destination
        'destination-mobile': "url('/public/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/public/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/public/assets/destination/background-destination-desktop.jpg')",
        // Crew
        'crew-mobile': "url('/public/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/public/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/public/assets/crew/background-crew-desktop.jpg')",
        // Technology
        'technology-mobile': "url('/public/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/public/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/public/assets/technology/background-technology-desktop.jpg')"
      },
      lineHeight: {
        'extra-large': '6.25rem',
        'xxl': '9.375rem'
      },
    },
  },
  plugins: [],
}
