import { style } from '@vanilla-extract/css'

export const card = style({
  borderRadius: '1rem',
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'var(--background)',
  color: 'var(--foreground)',
  boxShadow:
    '0 1px 2px rgba(0,0,0,0.05)',
  overflow: 'hidden',
})

export const cardContent = style({
  padding: '1rem',
})