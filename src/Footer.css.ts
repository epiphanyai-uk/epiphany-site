import { style } from '@vanilla-extract/css'

export const footer = style({
  padding: '2.5rem 1.5rem',
  width:'100%',
  fontSize: '0.875rem',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  background: '#0f172a',
  color: '#cbd5e1',
})

export const divider = style({
  height: '4px',
  width: '100%',
  marginBottom: '1.5rem',
  borderRadius: '9999px',
  background:
    'linear-gradient(to right, #2dd4bf, #38bdf8, #14b8a6)',
  opacity: 0.7,
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2.5rem',
  textAlign: 'center',

  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      textAlign: 'left',
    },
  },
})

export const brandTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: '#2dd4bf',
})


export const paragraph = style({
  fontSize: '1rem',
  fontWeight: 400,
  marginBottom: '0.75rem',
  color: '#D1D5DB',
})

export const socialRow = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '0.75rem',
  marginTop: '1rem',

  '@media': {
    '(min-width: 768px)': {
      justifyContent: 'flex-start',
    },
  },
})

export const socialIcon = style({
  fontSize: '1.25rem',
  color: '#cbd5e1',
  transition: 'color 0.2s ease',

  selectors: {
    '&:hover': {
      color: '#2dd4bf',
    },
  },
})

export const sectionTitle = style({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: '#2dd4bf',
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
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
  marginTop: '2rem',
  paddingTop: '1.5rem',
  fontSize: '0.75rem',
  textAlign: 'center',
  opacity: 0.7,
})