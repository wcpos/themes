import palette from './palettes/blue-grey.json';

export const colors = {
	background: palette['blue-grey-050'],
	border: palette['blue-grey-600'],
	primary: palette['blue-grey-700'],
	secondary: palette['blue-grey-400'],
	attention: palette['cyan-800'],
	critical: palette['red-vivid-600'],
	info: palette['light-blue-vivid-800'],
	success: palette['teal-800'],
	warning: palette['yellow-vivid-800'],
	inverse: 'rgba(256, 256, 256, 0.9)',
	disabled: '#AFAFAF',

	// greys
	lightestGrey: palette['blue-grey-050'],
	lightGrey: palette['blue-grey-100'],
	grey: palette['blue-grey-200'],
	darkGrey: palette['blue-grey-300'],
	darkestGrey: palette['blue-grey-400'],
};
