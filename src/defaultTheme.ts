// import { math } from 'polished';

import Platform from '@wcpos/utils/src/platform';

import { colors, inverseColors } from './colors';
import normalizeText from './normalize-text';

const fonts = Platform.select({
	android: {
		regular: 'sans-serif',
	},
	ios: {
		regular: 'System',
	},
	default: {
		regular: 'sans-serif',
	},
});

const theme = {
	/**
	 * Font
	 */
	font: {
		family: fonts.regular,
		size: {
			xSmall: `${normalizeText(10)}px`,
			small: `${normalizeText(12)}px`,
			normal: `${normalizeText(14)}px`,
			medium: `${normalizeText(16)}px`,
			large: `${normalizeText(18)}px`,
			xLarge: `${normalizeText(24)}px`,
			xxLarge: `${normalizeText(30)}px`,
		},
		weight: {
			thin: 100,
			xLight: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semiBold: 600,
			bold: 700,
			xBold: 800,
			black: 900,
		},
		/**
		 * If line height matches font size, bits of characters get cut off (in web)
		 * If I set lineHeight something line 1.2 or 1.2em, then native complains
		 * It's confusing, but I'll just set the line height slightgly higher than the font size
		 */
		lineHeight: {
			xSmall: `${normalizeText(12)}px`,
			small: `${normalizeText(14)}px`,
			normal: `${normalizeText(16)}px`,
			medium: `${normalizeText(18)}px`,
			large: `${normalizeText(20)}px`,
			xLarge: `${normalizeText(26)}px`,
			xxLarge: `${normalizeText(32)}px`,
		},
	},

	/**
	 * Colours
	 */
	colors,
	inverseColors,

	/**
	 * Padding
	 */
	spacing: {
		xxLarge: 40,
		xLarge: 32,
		large: 24,
		medium: 16,
		normal: 12,
		small: 8,
		xSmall: 4,
		xxSmall: 2,
		none: 0,
	},

	/**
	 * Icon Sizes
	 * Best if it matches text line height
	 */
	iconSizes: {
		xSmall: `${normalizeText(12)}px`,
		small: `${normalizeText(14)}px`,
		normal: `${normalizeText(16)}px`,
		medium: `${normalizeText(18)}px`,
		large: `${normalizeText(20)}px`,
		xLarge: `${normalizeText(26)}px`,
		xxLarge: `${normalizeText(32)}px`,
	},

	/**
	 * Border radius
	 */
	rounding: {
		circle: 9999,
		xxLarge: 50,
		xLarge: 32,
		large: 9,
		medium: 6,
		small: 3,
		none: 0,
	},

	/**
	 * Border thicknesses
	 */
	border: {
		thinner: 1,
		small: 2,
		none: 0,
	},

	/**
	 * Responsive screen sizes
	 */
	screens: {
		xSmall: 480,
		small: 768,
		medium: 1024,
		large: 1280,
	},

	/**
	 * Z Index
	 */
	zIndex: {
		backdrop: 100,
		dialog: 200,
		modal: 200,
		popover: 300,
		toast: 400,
		tooltip: 500,
	},
};

export default theme;
