// import defaults from 'lodash/defaults';

import defaultTheme from './defaultTheme';

interface ThemeSwitcherProps {
	name?: string;
	mode?: 'light' | 'dark';
	/**
	 * {
	 *   width: number;
	 *   height: number;
	 *   scale: number;
	 *   fontScale: number;
	 * }
	 */
	// dimensions?: import('react-native').ScaledSize;
}

/**
 * Returns a theme
 *
 * TODO - should dimensions be passed as a prop so we can change font-sizes, padding etc?
 */
export function switcher(options?: ThemeSwitcherProps) {
	// const opts = defaults(options, {
	// 	name: 'default',
	// 	mode: 'light',
	// 	// dimensions: { width: 800, height: 600, scale: 2, fontScale: 1 },
	// });

	return defaultTheme;
}
