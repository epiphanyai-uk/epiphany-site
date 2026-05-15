import {
  style,
  globalStyle,
} from '@vanilla-extract/css'

/* GLOBAL RESETS */
globalStyle('html, body', {
  margin: 0,
  padding: 0,

  width: '100%',
  minHeight: '100%',
})

globalStyle('#root', {
  minHeight: '100vh',
})

globalStyle('*', {
  boxSizing: 'border-box',
})

/* COMPONENT STYLES */
export const container = style({
  padding: '2rem',
  background: '#111',
  color: 'white',
})

export const epiphany = style({
  borderRadius: '50%',
})

export const button = style({
  borderRadius: '50%',
  border: '2px solid magenta',
})