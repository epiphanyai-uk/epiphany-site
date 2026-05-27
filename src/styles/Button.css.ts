import { style, styleVariants } from '@vanilla-extract/css'

const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  borderRadius: '0.5rem',
  padding: '0.5rem 1rem',
  margin: '1rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  border: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
    
  selectors: {
    '&:focus': {
      outline: 'none',
    },

    '&:focus-visible': {
      boxShadow: '0 0 0 2px rgb(6 182 212 / 0.5)',
    },

    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'not-allowed',
    },
  },
})

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      background: '#2dd4bf',
      color: '#000',
      fontSize: '1rem',

      selectors: {
        '&:hover': {
          background: '#22d3ee',
        },
      },
    },
  ],

  secondary: [
    baseButton,
    {
      background: 'transparent',
      color: '#06b6d4',
      border: '1px solid #06b6d4',

      selectors: {
        '&:hover': {
          background: 'rgb(6 182 212 / 0.1)',
        },
      },
    },
  ],
})