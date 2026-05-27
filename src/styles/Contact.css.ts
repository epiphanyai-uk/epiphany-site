import { style } from '@vanilla-extract/css'

/* PAGE WRAPPER */
export const page = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
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
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '10rem auto',
})

/* FIELD WRAPPER */
export const field = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'left',
})

/* LABEL */
export const label = style({
  fontSize: '1rem',
  opacity: 0.8,
  color: '#2dd4bf',
  margin: '0.5rem',
})

/* INPUT */
export const input = style({
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  background: '#0f172a',
  border: '1px solid rgba(34, 211, 238, 0.12)',
  color: '#e2e8f0',

  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: 'rgba(34, 211, 238, 0.4)',
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

export const successContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '1rem',
  minHeight: '60vh',
})