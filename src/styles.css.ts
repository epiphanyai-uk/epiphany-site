import {
  globalStyle,
} from '@vanilla-extract/css'

/* GLOBAL RESETS */
globalStyle('html, body', {
  margin: 0,
  padding: 0,
  background: '#0f172a'
});

globalStyle('*', {
  boxSizing: 'border-box',
});