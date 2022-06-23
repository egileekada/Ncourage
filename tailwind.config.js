/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {}, 
    fontFamily: { 
      'CircularStd-SemiBold': [
        'CircularStd-SemiBold',
      ],
      'CircularStd-Bold': [
        'CircularStd-Bold',
      ],
      'CircularStd-Medium': [
        'CircularStd-Medium',
      ],
      'PublicSans-Medium': [
        'PublicSans-Medium',
      ],
      'PublicSans-Bold': [
        'PublicSans-Bold',
      ],
      'PublicSans-SemiBold': [
        'PublicSans-SemiBold',
      ],
      'PublicSans-Regular': [
        'PublicSans-Regular',
      ],
    },
  },
  plugins: [],
}
