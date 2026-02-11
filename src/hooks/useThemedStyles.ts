import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Hook para criar estilos temáticos de forma otimizada
 * 
 * @param createStylesFn - Função que recebe colors e retorna StyleSheet
 * @returns Estilos calculados com as cores do tema atual
 * 
 * @example
 * ```tsx
 * // No arquivo de estilos (stylesHome.ts):
 * export const createStyles = (colors: any) => StyleSheet.create({
 *   container: { backgroundColor: colors.background }
 * });
 * 
 * // No componente (HomeScreen.tsx):
 * import { useThemedStyles } from '../hooks/useThemedStyles';
 * import { createStyles } from '../styles/stylesHome';
 * 
 * const styles = useThemedStyles(createStyles);
 * ```
 */
export const useThemedStyles = <T,>(createStylesFn: (colors: any) => T): T => {
  const { colors } = useTheme();
  
  return useMemo(() => createStylesFn(colors), [colors, createStylesFn]);
};