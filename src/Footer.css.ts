import { style } from '@vanilla-extract/css'

export const footer = style({
  width: '100%',
  background: '#000',
  color: '#cbd5e1',
  borderTop: '1px solid rgba(255,255,255,0.08)',
 
})

export const divider = style({
  height: '5px',
  width: '100%',
  borderRadius: '9999px',
  background: 'linear-gradient(to right, #2dd4bf, #38bdf8, #14b8a6)',
  opacity: 0.7,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  textAlign: 'center',
  padding: '1.5rem',

  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      textAlign: 'left',
    },
  },
})

export const brandTitle = style({
  fontSize: '1rem',
  fontWeight: 700,
  color: '#2dd4bf',
})

export const paragraph = style({
  fontSize: '0.8rem',
  color: '#cbd5e1',
})

export const socialRow = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.75rem',

  '@media': {
    '(min-width: 768px)': {
      justifyContent: 'start',
    },
  },
})

export const socialIcon = style({
  width: '1.25rem',
  height: '1.25rem',
  fill: 'currentColor',
  color: '#cbd5e1',
  transition: 'color 0.2s ease',

  selectors: {
    '&:hover': {
      color: '#2dd4bf',
    },
  },
})

export const sectionTitle = style({
  fontSize: '1rem',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: '#2dd4bf',
})

export const list = style({
  display: 'flex',
  fontSize: '0.8rem',
  flexDirection: 'column',
  gap: '0.5rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

export const link = style({
  color: '#cbd5e1',
  textDecoration: 'none',
  transition: 'color 0.2s ease',

  selectors: {
    '&:hover': {
      color: '#67e8f9',
    },
  },
})

export const bottom = style({
  borderTop: '1px solid rgba(255,255,255,0.1)',

  textAlign: 'center',
  color: '#94a3b8',
  fontSize: '0.75rem',
  
})