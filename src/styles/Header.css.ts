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
  backgroundColor: '#14b8a6',
  color: '#020617',

  '@media': {
    '(min-width: 768px)': {
      display: 'none',
    },
  },
})

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'center',

  '@media': {
    '(min-width: 768px)': {
      justifyContent: 'flex-start',
    },
  },
})

export const navLinks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textDecoration: 'none',
  color: '#cbd5e1',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  textAlign: 'center',
  padding: '0.75rem 1rem',
  fontSize: '1rem',

  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1rem',
    },
  },

  selectors: {
    '&:hover': {
      color: '#2dd4ee',
    },
    '&:active': {
      color: '#2dd4ee',
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: '2px solid #2dd4ee',
      outlineOffset: '4px',
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
  alignItems: 'stretch',
  gap: '0.5rem',
  padding: '1.5rem 1rem',
  background: 'rgba(2, 6, 23, 0.95)',
  backdropFilter: 'blur(12px)',
  borderTop: '3px solid rgba(34, 211, 238, 0.2)',
  borderBottom: '3px solid rgba(34, 211, 238, 0.08)',
  boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
  zIndex: 1000,
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