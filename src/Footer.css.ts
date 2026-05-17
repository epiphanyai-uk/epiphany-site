import { style } from '@vanilla-extract/css'

/* FULL WIDTH FOOTER */
export const footer = style({
  width: '100%',
  background: '#0f172a',
  color: '#cbd5e1',
  borderTop: '1px solid rgba(255,255,255,0.08)',
  padding: '3rem 1.5rem',
})

/* CENTERED CONTAINER */
export const footerContainer = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
})

/* TOP DIVIDER */
export const divider = style({
  height: '4px',
  width: '100%',
  marginBottom: '2rem',
  borderRadius: '9999px',
  background:
    'linear-gradient(to right, #2dd4bf, #38bdf8, #14b8a6)',
  opacity: 0.7,
})

/* FLEX CONTENT */
export const footerContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  alignItems: 'center',
  textAlign: 'center',

  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
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
  color: '#cbd5e1'
})

export const socialRow = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.75rem',
  marginTop: '1rem',

  '@media': {
    '(min-width: 768px)': {
      justifyContent: 'flex-start',
    },
  },
})

export const socialIcon = style({
  width: "2rem",
  height: "2rem",
  fill: 'currentColor',
  color: '#cbd5e1',
  flexShrink: 0,
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
  flexDirection: 'column',
  gap: '0.5rem',
  listStyle: 'none',
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
  color: '#94a3b8'
})