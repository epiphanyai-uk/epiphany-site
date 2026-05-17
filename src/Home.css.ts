import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1rem',
 background: '#0f172a',
})

export const container = style({
  width: '100%',
  maxWidth: '1100px',
  display: 'grid',
  gap: '3rem',
})

export const hero = style({
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
  gap: '1.5rem',
  marginBlockStart: '6rem',
})

export const paragraph = style({
  color: '#d1d5db',
})

export const buttonContainer = style({
  textDecoration: 'none',
  cursor: 'pointer',

  selectors: {
    '&': {
      textDecoration: 'none',
    },
  },
})

export const base = style({
  insetInline: 0,
  margin: '0 auto',
  width: 170,
  position: 'relative',
  zIndex: 0,
})

export const nextSteps = style({
  display: 'flex',
  borderTop: '1px solid var(--border)',
  textAlign: 'left',

  '@media': {
    '(max-width: 1024px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
})

export const icon = style({
  marginBottom: 16,
  width: 22,
  height: 22,
})

export const docs = style({
  borderRight: '1px solid var(--border)',

  '@media': {
    '(max-width: 1024px)': {
      borderRight: 'none',
      borderBottom: '1px solid var(--border)',
    },
  },
})

export const nextStepsList = style({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  gap: 8,
  margin: '32px 0 0',

  '@media': {
    '(max-width: 1024px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
})

export const socialLink = style({
  color: 'var(--text-h)',
  fontSize: 16,
  borderRadius: 6,
  background: 'var(--social-bg)',
  display: 'flex',
  padding: '6px 12px',
  alignItems: 'center',
  gap: 8,
  textDecoration: 'none',
  transition: 'box-shadow 0.3s',

  selectors: {
    '&:hover': {
      boxShadow: 'var(--shadow)',
    },
  },

  '@media': {
    '(max-width: 1024px)': {
      width: '100%',
      justifyContent: 'center',
      boxSizing: 'border-box',
    },
  },
})

export const spacer = style({
  height: 88,
  borderTop: '1px solid var(--border)',

  '@media': {
    '(max-width: 1024px)': {
      height: 48,
    },
  },
})

export const ticks = style({
  position: 'relative',
  width: '100%',

  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      top: -4.5,
      border: '5px solid transparent',
      left: 0,
      borderLeftColor: 'var(--border)',
    },
    '&::after': {
      content: '',
      position: 'absolute',
      top: -4.5,
      border: '5px solid transparent',
      right: 0,
      borderRightColor: 'var(--border)',
    },
  },
})

export const panel = style({
  padding: '2rem',
})