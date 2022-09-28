import defaults from 'lodash/defaults';
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
	dimensions?: import('react-native').ScaledSize;
}

/**
 * Returns a theme
 */
export function switcher(options?: ThemeSwitcherProps) {
	const opts = defaults(options, {
		name: 'default',
		mode: 'light',
		dimensions: { width: 800, height: 600, scale: 2, fontScale: 1 },
	});

	// passing dimensions back through to the theme
	// @TODO - maybe we only need a screenSize which can be over ridden by the user?
	return { ...defaultTheme, _dimensions: opts.dimensions };
}
