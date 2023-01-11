import defaultTheme from './defaultTheme';

export { switcher as default } from './switcher';

export type ColorTypes = keyof typeof defaultTheme.colors;
export type SpacingTypes = keyof typeof defaultTheme.spacing;
export type RoundingTypes = keyof typeof defaultTheme.rounding;
export type ScreensTypes = keyof typeof defaultTheme.screens;
export type IconSizesTypes = keyof typeof defaultTheme.iconSizes;
export type FontSizeTypes = keyof typeof defaultTheme.font.size;
export type FontWeightTypes = keyof typeof defaultTheme.font.weight;

/**
 * Declare the default theme
 */
declare module 'styled-components/native' {
	export type Theme = typeof defaultTheme;

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends Theme {}
}
