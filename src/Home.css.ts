import { style } from '@vanilla-extract/css';



export const counter = style({
  fontSize: 16,
  padding: '5px 10px',
  borderRadius: 5,
  color: 'var(--accent)',
  background: 'var(--accent-bg)',
  border: '2px solid transparent',
  transition: 'border-color 0.3s',
  marginBottom: 24,

  selectors: {
    '&:hover': {
      borderColor: 'var(--accent-border)',
    },
    '&:focus-visible': {
      outline: '2px solid var(--accent)',
      outlineOffset: '2px',
    },
  },
})

export const hero = style({
  position: 'relative',
})

 export const base = style({
  insetInline: 0,
  margin: '0 auto',
  width: 170,
  position: 'relative',
  zIndex: 0,
})

 export const framework = style({
  insetInline: 0,
  margin: '0 auto',
  position: 'absolute',
  zIndex: 1,
  top: 34,
  height: 28,
  transform:
    'perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)',
})

export const vite = style({
  insetInline: 0,
  margin: '0 auto',
  position: 'absolute',
  zIndex: 0,
  top: 107,
  height: 26,
  width: 'auto',
  transform:
    'perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)',
})

export const center = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  placeContent: 'center',
  placeItems: 'center',
  flexGrow: 1,

  '@media': {
    '(max-width: 1024px)': {
      padding: '32px 20px 24px',
      gap: 18,
    },
  },
})

export const nextSteps = style({
  display: 'flex',
  borderTop: '1px solid var(--border)',
  textAlign: 'left',

  selectors: {
    '& > div': {
      flex: '1 1 0',
      padding: 32,

      '@media': {
        '(max-width: 1024px)': {
          padding: '24px 20px',
        },
      },
    },
  },

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
      marginTop: 20,
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