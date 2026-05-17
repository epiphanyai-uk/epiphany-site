import {
  globalStyle,
} from '@vanilla-extract/css'

/* GLOBAL RESETS */
globalStyle('html, body, #root, #__next', {
  margin: 0,
  padding: 0,
  minHeight: '100vh',
});

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column',
  background: '#0f172a',
});

globalStyle('main', {
  flexGrow: 1,
});