import { Component, Input } from '@angular/core';
import { OmniviewFormat, rendererRegistry } from './renderers';

/**
 * OmniviewComponent - Universal content renderer
 * 
 * Renders raw string data in various formats including text, HTML, Markdown,
 * LaTeX, MathJax, JSON, and syntax-highlighted code.
 * 
 * Each format has its own dedicated renderer implementation in the `renderers/` folder.
 * 
 * @example
 * ```html
 * <omniview [data]="content" [format]="'markdown'"></omniview>
 * ```
 */
@Component({
  selector: 'omniview',
  imports: [],
  templateUrl: './ngx-omniview.component.html',
  styleUrl: './ngx-omniview.component.css'
})
export class NgxOmniviewComponent {
  /**
   * The raw string content to be rendered
   */
  @Input() data: string = '';

  /**
   * The format/type of the content
   * @default 'text'
   */
  @Input() format: OmniviewFormat = 'text';

  /**
   * Get the rendered content based on the format
   * 
   * Uses the renderer registry to delegate to the appropriate renderer function.
   */
  get renderedContent(): string {
    if (!this.data) {
      return '';
    }

    // Get the appropriate renderer from the registry
    const renderer = rendererRegistry[this.format];
    
    if (!renderer) {
      // Fallback if format is not recognized
      return this.data;
    }

    return renderer(this.data);
  }
}
