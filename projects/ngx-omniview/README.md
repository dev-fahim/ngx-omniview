# ngx-omniview

Universal content renderer for Angular. Display raw text as HTML, Markdown, LaTeX, MathJax, JSON, and more with a single component.

## Features

- ✅ **Multi-format support**: text, html, markdown, latex, mathjax, json, code
- ✅ **Angular 15-20 compatible**
- ✅ **Simple API**: Just pass data and format
- ✅ **Unstyled**: Adapts to your design
- ✅ **Lightweight**: Modular renderer architecture

## Installation

```bash
npm install ngx-omniview
```

## Usage

### Basic Example

```typescript
import { Component } from '@angular/core';
import { NgxOmniviewComponent } from 'ngx-omniview';

@Component({
  selector: 'app-example',
  imports: [NgxOmniviewComponent],
  template: `<omniview [data]="content" [format]="'text'"></omniview>`
})
export class ExampleComponent {
  content = 'Hello World!';
}
```

### Supported Formats

```typescript
<omniview [data]="text" [format]="'text'"></omniview>
<omniview [data]="html" [format]="'html'"></omniview>
<omniview [data]="markdown" [format]="'markdown'"></omniview>
<omniview [data]="latex" [format]="'latex'"></omniview>
<omniview [data]="mathjax" [format]="'mathjax'"></omniview>
<omniview [data]="json" [format]="'json'"></omniview>
<omniview [data]="code" [format]="'code'"></omniview>
```

## API

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `data` | `string` | `''` | Raw content to render |
| `format` | `OmniviewFormat` | `'text'` | Content format type |

### Types

```typescript
type OmniviewFormat = 
  | 'text' 
  | 'html' 
  | 'markdown' 
  | 'latex' 
  | 'mathjax' 
  | 'json' 
  | 'code';
```

## Development Status

| Format | Status |
|--------|--------|
| text | ✅ Implemented |
| html | 🚧 In Progress |
| markdown | 🚧 In Progress |
| latex | 🚧 In Progress |
| mathjax | 🚧 In Progress |
| json | 🚧 In Progress |
| code | 🚧 In Progress |

## Contributing

Contributions welcome! See [GitHub repository](https://github.com/binapani-edu/ngx-omniview) for details.

## License

MIT
