// stitches.config.js
import { createStitches } from '@stitches/react';

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      primary: '#0ea5e9',
      secondary: '#3b82f6',
      background: '#f3f4f6',
      text: '#111827',
      white: '#ffffff',
      gray: '#9ca3af',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
    },
  },
});

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '$background',
    color: '$text',
  },
});
