import { style, styleVariants } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  gap: '1rem',
})

const baseButton = style({
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  fontWeight: 600,
  textDecoration: 'none',
  transition: '0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      background: '#14b8a6',
      color: 'white',

      selectors: {
        '&:hover': {
          background: '#0d9488',
        },
      },
    },
  ],

  secondary: [
    baseButton,
    {
      border: '1px solid #14b8a6',
      color: '#0f766e',
      background: 'transparent',

      selectors: {
        '&:hover': {
          background: '#ccfbf1',
        },
      },
    },
  ],
})