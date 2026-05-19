import { style } from '@vanilla-extract/css'

export const input = style({
  display: 'flex',

  height: '2.5rem',
  width: '100%',

  borderRadius: '0.5rem',
  border: '1px solid rgba(255,255,255,0.1)',

  padding: '0.5rem 0.75rem',

  fontSize: '0.875rem',

  background: 'var(--background)',
  color: 'var(--foreground)',

  transition:
    'box-shadow 0.2s ease, border-color 0.2s ease',

  selectors: {
    '&::placeholder': {
      color: 'var(--muted-foreground)',
    },

    '&:focus': {
      outline: 'none',
    },

    '&:focus-visible': {
      boxShadow: '0 0 0 2px rgb(6 182 212 / 0.4)',
    },

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})