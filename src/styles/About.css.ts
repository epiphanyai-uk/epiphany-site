import { style } from '@vanilla-extract/css'

/* PAGE WRAPPER */
export const page = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontFamily: 'inter',
})

export const img = style({
    margin: '0 auto',
})

/* MAIN CARD */
export const card = style({
    position: 'relative',
    zIndex: 10,
    maxWidth: '48rem',
    padding: '2.5rem',
    borderRadius: '1rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    background: '#020617',
    border: '1px solid rgba(34, 211, 238, 0.10)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    marginBlockStart: '8rem',
    marginBlockEnd: '3rem',
    marginInline: '1rem',

    '@media': {
        '(min-width: 768px)': {
            marginInline: 'auto',
            maxWidth: '600px',
        },
    },

    selectors: {
        '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(34, 211, 238, 0.35)',
        },
    }
})

/* TYPOGRAPHY */
export const title = style({
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#14b8a6',
    margin: 0,
})

export const text = style({
    fontSize: '1rem',
    lineHeight: 1.7,
    margin: 0,
    color: '#14b8a6',
})

/* DIVIDER */
export const divider = style({
    height: '4px',
    width: '100%',
    background: 'linear-gradient(to right, transparent, rgba(45,212,191,0.3), transparent)',
    margin: '1.5rem 0',
})