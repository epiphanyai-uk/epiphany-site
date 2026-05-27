import { style } from '@vanilla-extract/css'

export const footer = style({
  width: '100%',
})

export const divider = style({
  height: '4px',
  width: '100%',
  background: 'linear-gradient(to right, transparent, rgba(45,212,191,0.3), transparent)',
  margin: '1.5rem 0',
})

export const content = style({
  display: 'flex',
  flexWrap: 'wrap',
})

export const flex = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  textAlign: 'center',
  alignItems: 'center',
  margin: '0 auto',
  

  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  flex: 1,
  minWidth: 0, 
})

export const brandTitle = style({
  margin: 0,
  fontSize: '1.1rem',
  fontWeight: 700,
  color: '#2dd4bf',
})

export const paragraph = style({
  margin: '0 auto',
  fontSize: '1rem',
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

export const socialLink = style({
  display: 'inline-flex',
  transition: 'color 0.2s ease',
  color: '#cbd5e1',

  selectors: {
    '&:hover': {
      color: '#2dd4bf',
    },
  },
})

export const socialIcon = style({
  width: '1.25rem',
  height: '1.25rem',
  fill: 'currentColor',
})

export const sectionTitle = style({
  fontSize: '1.1rem',
  fontWeight: 600,
  margin: '0 auto',
  color: '#2dd4bf',
})

export const list = style({
  display: 'flex',
  fontSize: '1rem',
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
  textAlign: 'center',
  color: '#94a3b8',
  fontSize: '0.9rem',
  padding: '0.5rem',
})