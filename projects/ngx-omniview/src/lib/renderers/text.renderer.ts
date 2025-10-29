import { RendererFunction } from './renderer.types';

/**
 * Text Renderer
 * 
 * Renders plain text content as-is with preserved whitespace and line breaks.
 * This is the simplest renderer with no transformations applied.
 * 
 * @param data - Raw text content
 * @returns The same text content without modifications
 * 
 * @example
 * ```typescript
 * const output = renderText('Hello\nWorld');
 * // Output: "Hello\nWorld"
 * ```
 */
export const renderText: RendererFunction = (data: string): string => {
  return data;
};

