import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '4rem',
  background: '#020617',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
  zIndex: '50',

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

export const link = style({
  textDecoration: 'none',
  color: '#cbd5e1',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      color: '#2dd4bf',
    },
  },
})

export const navLinks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textDecoration: 'none',

  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1rem',
    },
  },
})

export const desktopNav = style({
  display: 'none',

  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
    },
  },
})

export const mobileNavOpen = style({
  position: 'absolute',
  top: '4rem',
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  height: '50vh',
  background: '#020617',
  borderTop: '1px solid rgba(255,255,255,0.08)',
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