'use client'

import { MantineThemeOverride, createTheme } from '@mantine/core'
import { Space_Grotesk } from 'next/font/google'

const inter = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const theme: MantineThemeOverride = createTheme({
  breakpoints: { xs: '23.4375em', sm: '48em', md: '62em', lg: '75em', xl: '90em' },
  fontFamily: inter.style.fontFamily,
  colors: {
    mattBlack: [
      '#E8E8E8',
      '#D0D0D0',
      '#B9B9B9',
      '#A1A1A1',
      '#737373',
      '#444444',
      '#151515',
      '#111111',
      '#0D0D0D',
      '#080808',
    ],
    mintJelly: [
      '#EDFCF6',
      '#DCF9EC',
      '#CAF6E3',
      '#B8F3D9',
      '#95EDC6',
      '#71E7B3',
      '#4EE1A0',
      '#3EB480',
      '#2F8760',
      '#1F5A40',
    ],
    verifiedBlack: [
      '#E9E9E9',
      '#D3D3D3',
      '#BDBDBD',
      '#A7A7A7',
      '#7C7C7C',
      '#505050',
      '#242424',
      '#1D1D1D',
      '#161616',
      '#0E0E0E',
    ],
    orochimaru: [
      '#FBFBFB',
      '#F7F7F7',
      '#F4F4F4',
      '#F0F0F0',
      '#E8E8E8',
      '#E1E1E1',
      '#D9D9D9',
      '#AEAEAE',
      '#828282',
      '#575757',
    ],
  },
})

export { theme }
