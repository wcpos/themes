import palette from './palettes/blue-grey.json';

const greyscale = {
	'grey-050': '#fafbfc',
	'grey-100': '#f1f5f9',
	'grey-200': '#e2e8f0',
	'grey-300': '#cbd5e1',
	'grey-400': '#94a3b8',
	'grey-500': '#64748b',
	'grey-600': '#475569',
	'grey-700': '#334155',
	'grey-800': '#1e293b',
	'grey-900': '#0f172a',
};

export const colors = {
	primary: palette['light-blue-vivid-700'],
	secondary: palette['blue-grey-500'],
	attention: palette['cyan-800'],
	critical: palette['red-vivid-600'],
	info: palette['light-blue-vivid-800'],
	success: palette['teal-800'],
	warning: palette['yellow-vivid-800'],
	inverse: 'rgba(256, 256, 256, 0.9)',
	disabled: '#AFAFAF',

	// text
	text: palette['blue-grey-800'],
	textMuted: palette['blue-grey-600'],

	// greys
	lightestGrey: greyscale['grey-050'],
	lightGrey: greyscale['grey-100'],
	grey: greyscale['grey-200'],
	darkGrey: greyscale['grey-300'],
	darkestGrey: greyscale['grey-400'],

	// backgrounds
	bodyBackground: palette['blue-grey-050'],
	headerBackground: palette['blue-grey-800'],
	inputBackground: '#FFFFFF',

	// borders
	border: palette['blue-grey-100'],
	borderMuted: palette['blue-grey-050'],
};

export const inverseColors = {
	primary: 'inverse',
	secondary: 'inverse',
	darkestGrey: 'inverse',
	lightGrey: 'textMuted',
};
