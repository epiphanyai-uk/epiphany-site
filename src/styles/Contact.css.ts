import { style } from '@vanilla-extract/css'

/* PAGE WRAPPER */
export const page = style({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1rem',
})

/* PAGE TITLE */
export const title = style({
  fontSize: '2rem',
  color: '#2dd4bf',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '1.5rem',
})

/* FORM CARD */
export const card = style({
  width: '100%',
  maxWidth: '36rem',
  borderRadius: '1rem',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '3rem auto',
})

/* FIELD WRAPPER */
export const field = style({
  display: 'flex',
  flexDirection: 'column',
})

/* LABEL */
export const label = style({
  fontSize: '0.875rem',
  opacity: 0.8,
  color: '#2dd4bf',
  gap: '2rem',
})

/* INPUT */
export const input = style({
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid #334155',
  background: '#0f172a',
  color: '#e2e8f0',
  outline: 'none',
  margin: '0.25rem auto',

  selectors: {
    '&:focus': {
      borderColor: '#14b8a6',
      boxShadow: '0 0 0 2px rgba(20,184,166,0.3)',
    },
  },
})

/* TEXTAREA */
export const textarea = style([
  input,
  {
    minHeight: '10rem',
    resize: 'vertical',
  },
])

/* BUTTON WRAPPER */
export const buttonWrap = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1.5rem',
})

/* BUTTON */
export const button = style({
  padding: '0.75rem 1.5rem',
  borderRadius: '0.75rem',

  background: '#14b8a6',
  color: '#000',

  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',

  transition: 'background 0.2s ease',

  selectors: {
    '&:hover': {
      background: '#0d9488',
    },

    '&:active': {
      transform: 'scale(0.98)',
    },
  },
})