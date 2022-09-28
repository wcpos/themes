import defaultTheme from './defaultTheme';

interface ThemeSwitcherProps {
	name: string;
	mode: 'light' | 'dark';
	/**
	 * {
	 *   width: number;
	 *   height: number;
	 *   scale: number;
	 *   fontScale: number;
	 * }
	 */
	dimensions: import('react-native').ScaledSize;
}

/**
 * Returns a theme
 * @param name
 * @param mode
 */
export function switcher({ name, mode, dimensions }: ThemeSwitcherProps) {
	// passing dimensions back through to the theme
	// @TODO - maybe we only need a screenSize which can be over ridden by the user?
	return { ...defaultTheme, _dimensions: dimensions };
}
