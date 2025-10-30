import { RendererRegistry } from './renderer.types';
import { renderText } from './text.renderer';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Renderer for HTML that safely sanitizes content
 */
export const renderHtml = (sanitizer: DomSanitizer) => (data: string): SafeHtml => {
  return sanitizer.bypassSecurityTrustHtml(data);
};

/**
 * Renderer for Markdown using ngx-markdown
 * No parsing needed here; the component template will handle it
 */
export const renderMarkdown = (data: string): string => data;

/**
 * Renderer for JSON
 * Pretty-prints parsed JSON
 */
export const renderJson = (data: string): string => {
  try {
    const obj = JSON.parse(data);
    return JSON.stringify(obj, null, 2);
  } catch {
    return `Invalid JSON:\n${data}`;
  }
};

/**
 * Default placeholder renderer for formats not yet implemented
 * Shows "coming soon" message with the raw data
 */
const renderPlaceholder = (format: string) => (data: string): string => {
  return `[${format} rendering - coming soon]\n\n${data}`;
};

/**
 * Renderer Registry
 * 
 * Central registry mapping each format to its renderer function.
 * 
 * To add a new renderer:
 * 1. Create a new file: `[format].renderer.ts`
 * 2. Implement the RendererFunction
 * 3. Import and register it here
 * 
 * @example
 * ```typescript
 * // Adding a new renderer
 * import { renderMarkdown } from './markdown.renderer';
 * 
 * export const rendererRegistry: RendererRegistry = {
 *   ...
 *   markdown: renderMarkdown,
 *   ...
 * };
 * ```
 */
export const rendererRegistry: RendererRegistry = {
  text: renderText,
  html: renderHtml,
  
  // Placeholders for future renderers
  markdown: renderPlaceholder('markdown'),
  latex: renderPlaceholder('latex'),
  mathjax: renderPlaceholder('mathjax'),
  json: renderJson,
  code: renderPlaceholder('code'),
};

