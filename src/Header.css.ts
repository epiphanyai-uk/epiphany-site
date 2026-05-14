import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,

  height: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0 1rem',

  '@media': {
    '(min-width: 768px)': {
      padding: '0 1.5rem',
    },
  },
})

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  flexShrink: 0,
})

export const menuButton = style({
  padding: '0.5rem',
  borderRadius: '0.375rem',

  border: 'none',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    '(min-width: 768px)': {
      display: 'none',
    },
  },
})

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
})

export const navLinks = style({
  display: 'none',

  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
  },
})

export const right = style({
  display: 'none',

  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
  },
})

export const themeButton = style({
  padding: '0.5rem',
  borderRadius: '9999px',

  border: 'none',
  cursor: 'pointer',

  transition: '0.2s ease',

  selectors: {
    '&:focus': {
      outline: 'none',
    },

    '&:focus-visible': {
      boxShadow: '0 0 0 2px rgb(20 184 166 / 0.5)',
    },
  },
})