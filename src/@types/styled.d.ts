import 'styled-components'

interface SpacingProps {
  xsm: string // 8px
  sm: string // 12px
  base: string // 16px;
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
  '8xl': string
  '9xl': string
}
interface ColorProps {
  primary: {
    '300': string
    '400': string
    '700': string
  }

  secundary: {
    '700': string
    '600': string
    '400': string
    '300': string
  }

  white: {
    dark: string
    light: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorProps
    spacings: SpacingProps
  }
}
