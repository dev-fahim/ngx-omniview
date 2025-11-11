<div align="center">

# ngx-omniview

[![Angular](https://img.shields.io/badge/Angular-15--20-red.svg?logo=angular&logoColor=white)](https://angular.io)
[![NPM version](https://img.shields.io/npm/v/ngx-omniview.svg?logo=npm&logoColor=white)](https://www.npmjs.com/package/ngx-omniview)
[![License: MIT](https://img.shields.io/npm/l/ngx-omniview.svg?color=green&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Downloads](https://img.shields.io/npm/dt/ngx-omniview.svg?logo=npm&logoColor=white)](https://npmcharts.com/compare/ngx-omniview?minimal=true)
<br>
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white)](https://github.com/binapani-edu/ngx-omniview)
[![Website](https://img.shields.io/badge/Website-binapani.com-0078D4?logo=googlechrome&logoColor=white)](https://www.binapani.com)
[![YouTube](https://img.shields.io/badge/YouTube-Binapani%20Edu-FF0000?logo=youtube&logoColor=white)](https://www.youtube.com/@binapani_edu)

[![NPM](https://nodei.co/npm/ngx-omniview.svg)](https://www.npmjs.com/package/ngx-omniview)

**A universal content viewer for Angular**
Renders any raw string input as Plain Text, HTML, Markdown, LaTeX, MathJax, JSON, and more... all from a single component.

</div>

---

> **⚠️ Development Status**
> 
> This project is currently in **active development**.
> While we strive for stability, you may encounter bugs or unexpected behavior.  
> 
> **🐛 Found an issue?** Please [report it](https://github.com/binapani-edu/ngx-omniview/issues) so we can improve!  
> **💡 Have a suggestion?** We'd love to hear your [feedback](https://github.com/binapani-edu/ngx-omniview/issues)!

---

## Features

- ✅ **Multi-format support**: text, html, markdown, latex, mathjax, json, code
- ✅ **Currently compatible with Angular v15**  
- 🔄 **Planned compatibility for Angular v16–20**
- ✅ **Simple API**: Just pass data and format
- ✅ **Unstyled**: Adapts to your design
- ✅ **Lightweight**: Modular renderer architecture

## Installation

```bash
npm install ngx-omniview
```

### Peer Dependencies

To keep the bundle size minimal, `ngx-omniview` relies on several peer dependencies.
Install only the dependencies needed for the formats you use.

**Required:**
- `@angular/core` and `@angular/common` >=15.0.0 <21.0.0 (Angular 15–20)

**Optional (install only for the formats you use):**
- `katex` >=0.16.0 <0.17.0 — for `latex` format
- `mathjax-angular` >=2.0.0 <4.0.0 — for `mathjax` format
- `ngx-markdown` >=15.0.0 <21.0.0 — for `markdown` format

Formats like `text`, `html`, `json`, and `code` work without any optional peer dependencies.

```bash
npm install katex@~0.16.25          # For LaTeX (tested with 0.16.25)
npm install mathjax-angular@~2.1.1  # For MathJax (tested with 2.1.1)
npm install ngx-markdown@~15.1.0    # For Markdown (tested with 15.1.0)
```

## Usage

### Basic Example

**1. Import `NgxOmniviewModule` in your `AppModule`:**

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxOmniviewModule } from 'ngx-omniview';
import { MarkdownModule } from 'ngx-markdown';
import { MathjaxModule } from 'mathjax-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxOmniviewModule,
    MarkdownModule.forRoot(),  // Required for markdown format
    MathjaxModule.forRoot()    // Required for mathjax format
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**2. Use the component in your templates:**

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<omniview [data]="content" [format]="'text'"></omniview>`
})
export class AppComponent {
  content = 'Hello World!';
}
```

### Supported Formats

```html
<omniview [data]="text" [format]="'text'"></omniview>
<omniview [data]="html" [format]="'html'"></omniview>
<omniview [data]="markdown" [format]="'markdown'"></omniview>
<omniview [data]="latex" [format]="'latex'"></omniview>
<omniview [data]="mathjax" [format]="'mathjax'"></omniview>
<omniview [data]="json" [format]="'json'"></omniview>
<omniview [data]="code" [format]="'code'"></omniview>
```

## Additional Setup (for LaTeX and Markdown)

### ✅ 1. Add LaTeXJS Script to `index.html`

Add the following script inside your `index.html` (preferably before the closing `</body>` tag):

```html
<script type="module">
  import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs";
  customElements.define("latex-js", LaTeXJSComponent);
</script>
```

This enables the `<latex-js>` custom element used by `ngx-omniview` for LaTeX rendering.


### ✅ 2. Update `angular.json` for Markdown + LaTeX Styling

To support Markdown with LaTeX rendering, add the following entries to the **build > options** section in your `angular.json`:

```json
"styles": [
  "node_modules/katex/dist/katex.min.css"
],
"scripts": [
  "node_modules/katex/dist/katex.min.js",
  "node_modules/katex/dist/contrib/auto-render.min.js"
]
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
| html | ✅ Implemented |
| markdown | ✅ Implemented |
| latex | ✅ Implemented |
| mathjax | ✅ Implemented |
| json | ✅ Implemented |
| code | 🚧 In Progress |

## Contributing

Contributions welcome! See [GitHub repository](https://github.com/binapani-edu/ngx-omniview) for details.

## License

MIT © [Binapani LTD](https://www.binapani.com/)

---

<div align="center">

• [Report Bug](https://github.com/binapani-edu/ngx-omniview/issues) • [Request Feature](https://github.com/binapani-edu/ngx-omniview/issues) • [View on NPM](https://www.npmjs.com/package/ngx-omniview) •

Made with ❤️ for Angular

</div>
