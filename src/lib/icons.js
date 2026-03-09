/**
 * SVG path data for all icons used across the application.
 * viewBox is always "0 0 24 24" unless noted.
 * Stroke-based icons: use stroke="currentColor".
 */
export const ICONS = {
  // Feature icons
  chat: `<path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z" stroke="currentColor" stroke-width="1.5"/><path d="M7 9h6M7 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,

  brain: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,

  chart: `<path d="M3 3v18h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 14l4-4 3 3 4-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,

  shield: `<path d="M12 2L3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>`,

  // Developer tool icons
  'file-code': `<path d="M14 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7l-6-5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 2v5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,

  layers: `<path d="M12 2L2 7l10 5 10-5-10-5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,

  code: `<path d="M7 8l-4 4 4 4M17 8l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 4l-4 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,

  // Integration path icons (18×18 viewBox)
  hexagon: `<path d="M9 2L2 6v6l7 4 7-4V6L9 2Z" stroke="#9B7DFF" stroke-width="1.5" stroke-linejoin="round"/>`,

  'plus-box': `<rect x="2" y="2" width="14" height="14" rx="3" stroke="#9B7DFF" stroke-width="1.5"/><path d="M6 9h6M9 6v6" stroke="#9B7DFF" stroke-width="1.5" stroke-linecap="round"/>`,

  // CometChat logomark (28×28 viewBox)
  logomark: `<path d="M14 4C8.477 4 4 8.238 4 13.5c0 2.578 1.13 4.9 2.933 6.55L6 24l4.7-1.967A10.218 10.218 0 0 0 14 23c5.523 0 10-4.238 10-9.5S19.523 4 14 4Z" fill="white"/>`,

  // Utility icons
  'arrow-right': `<path d="M2.5 7h9M8.5 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,

  check: `<path d="M2 5l2.5 2.5L8 3" stroke="#7C5CFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,

  'check-small': `<path d="M10 3L5 8.5 2 5.5" stroke="#7C5CFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,

  // Hamburger / close (20×20 viewBox)
  menu: `<path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,

  close: `<path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,

  // Chat bubble logo (16×16 viewBox)
  'bubble-sm': `<path d="M8 2C4.686 2 2 4.462 2 7.5c0 1.547.677 2.94 1.76 3.93L3 14l2.82-1.18A6.13 6.13 0 0 0 8 13c3.314 0 6-2.462 6-5.5S11.314 2 8 2Z" fill="white"/>`,

  // Send arrow (10×10)
  send: `<path d="M1.5 5h7M6 2.5l2.5 2.5L6 7.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>`,
}

/**
 * Map icon name → { viewBox, size }
 * Most icons share "0 0 24 24"; special ones are listed here.
 */
const ICON_META = {
  hexagon:      { viewBox: '0 0 18 18' },
  'plus-box':   { viewBox: '0 0 18 18' },
  logomark:     { viewBox: '0 0 28 28' },
  'bubble-sm':  { viewBox: '0 0 16 16' },
  send:         { viewBox: '0 0 10 10' },
  check:        { viewBox: '0 0 10 10' },
  'check-small':{ viewBox: '0 0 12 12' },
  menu:         { viewBox: '0 0 20 20' },
  close:        { viewBox: '0 0 20 20' },
}

export function getIconMeta(name) {
  return ICON_META[name] ?? { viewBox: '0 0 24 24' }
}
