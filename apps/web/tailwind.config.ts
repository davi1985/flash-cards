import type { Config } from 'tailwindcss'
import { colors, fonts, radii, spacing } from '@repo/tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        current: 'currentColor',
      },
      spacing,
      borderRadius: radii,
      fontWeight: fonts.fontWeights,
      fontFamily: {
        sans: fonts.fontFamilies.default,
        mono: 'monospace',
      },
      fontSize: fonts.fontSizes,
      lineHeight: fonts.lineHeights,

      boxShadow: {
        lg: '0px 0.7699px 2.71728px 0px rgba(0, 0, 0, 0.02), 0px 2.12866px 7.51293px 0px rgba(0, 0, 0, 0.03), 0px 5.125px 18.08824px 0px rgba(0, 0, 0, 0.04), 0px 17px 60px 0px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
export default config
