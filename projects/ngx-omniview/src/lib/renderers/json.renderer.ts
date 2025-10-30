import { RendererFunction } from './renderer.types';

/**
 * JSON Renderer
 * 
 * Attempts to parse and pretty-print JSON data. If parsing fails,
 * it returns the raw string prefixed with an error message.
 * 
 * @param data - Raw JSON string
 * @returns Pretty-printed JSON or an error message
 * 
 * @example
 * ```typescript
 * const json = renderJson('{"a":1}');
 * // Output:
 * // {
 * //   "a": 1
 * // }
 * ```
 */
export const renderJson: RendererFunction = (data: string): string => {
  try {
    const obj = JSON.parse(data);
    return JSON.stringify(obj, null, 2);
  } catch {
    return `Invalid JSON:\n${data}`;
  }
};
